import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl   -sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3">RSVP for DevMeetup V3</h1>
            <p className="text-gray-600">Secure your spot at the biggest developer event in Ethiopia</p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 font-normal" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 font-normal" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                type="email" 
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 font-normal" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input 
                type="tel" 
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 font-normal" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
              <input 
                type="text"
                placeholder="Enter your company/organization name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 font-normal" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level *</label>
              <select 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select your experience level</option>
                <option value="student">Student</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="advanced">Advanced (5-8 years)</option>
                <option value="expert">Expert (8+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Technology Stack *</label>
              <select 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select your primary technology</option>
                <option value="web-frontend">Web Frontend (React, Vue, Angular)</option>
                <option value="web-backend">Web Backend (Node.js, Python, Java)</option>
                <option value="mobile">Mobile Development (Android, iOS, React Native)</option>
                <option value="ai-ml">AI/ML/Data Science</option>
                <option value="devops">DevOps/Cloud</option>
                <option value="blockchain">Blockchain</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Any Special Requirements or Questions?</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-24"
                placeholder="Let us know if you have any special requirements or questions..."
              ></textarea>
            </div>
            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I agree to the event terms and conditions and understand that my data will be handled according to the privacy policy. *
              </label>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-6"
            >
              Confirm RSVP
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              Fields marked with * are required
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
