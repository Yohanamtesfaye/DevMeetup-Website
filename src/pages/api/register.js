// This is a client-side API route that can be adapted for Cloudflare Workers
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'experienceLevel', 'techStack'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Here you would typically:
    // 1. Save to a database (e.g., using Cloudflare D1 or other compatible database)
    // 2. Send confirmation email
    // 3. Handle any other necessary operations

    // For now, we'll just return a success response
    return res.status(200).json({ 
      message: 'Registration successful',
      data: {
        ...data,
        registrationDate: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
