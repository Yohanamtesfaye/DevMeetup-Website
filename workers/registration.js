// Cloudflare Worker for handling registrations

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://devmeetup.et',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: corsHeaders
      });
    }

    try {
      const data = await request.json();

      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'experienceLevel', 'techStack'];
      for (const field of requiredFields) {
        if (!data[field]) {
          return new Response(
            JSON.stringify({ error: `${field} is required` }), 
            { 
              status: 400, 
              headers: { 
                'Content-Type': 'application/json',
                ...corsHeaders 
              } 
            }
          );
        }
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }), 
          { 
            status: 400, 
            headers: { 
              'Content-Type': 'application/json',
              ...corsHeaders 
            } 
          }
        );
      }

      // Store in D1 Database
      const { success } = await env.DB.prepare(`
        INSERT INTO registrations (
          first_name, last_name, email, phone, 
          company, job_title, experience_level, 
          tech_stack, special_requirements, 
          registration_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.company || '',
        data.jobTitle || '',
        data.experienceLevel,
        data.techStack,
        data.specialRequirements || '',
        new Date().toISOString()
      ).run();

      if (!success) {
        throw new Error('Failed to save registration');
      }

      // Send confirmation email
      await env.MAILSENDER.send({
        to: data.email,
        from: "info@devmeetup.et",
        subject: "DevMeetup Ethiopia - Registration Confirmation",
        text: `
Dear ${data.firstName} ${data.lastName},

Thank you for registering for DevMeetup Ethiopia! We're excited to have you join us.

Registration Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
- Experience Level: ${data.experienceLevel}
- Technology Stack: ${data.techStack}

We'll be in touch with more details about the event soon.

Best regards,
The DevMeetup Ethiopia Team
        `,
        html: `
<h2>DevMeetup Ethiopia - Registration Confirmation</h2>
<p>Dear ${data.firstName} ${data.lastName},</p>
<p>Thank you for registering for DevMeetup Ethiopia! We're excited to have you join us.</p>
<h3>Registration Details:</h3>
<ul>
  <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
  <li><strong>Email:</strong> ${data.email}</li>
  <li><strong>Phone:</strong> ${data.phone}</li>
  <li><strong>Experience Level:</strong> ${data.experienceLevel}</li>
  <li><strong>Technology Stack:</strong> ${data.techStack}</li>
</ul>
<p>We'll be in touch with more details about the event soon.</p>
<p>Best regards,<br>The DevMeetup Ethiopia Team</p>
        `
      });

      return new Response(
        JSON.stringify({ 
          message: 'Registration successful',
          data: { ...data, registrationDate: new Date().toISOString() }
        }), 
        { 
          status: 200, 
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );

    } catch (error) {
      console.error('Registration error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }), 
        { 
          status: 500, 
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );
    }
  }
};
