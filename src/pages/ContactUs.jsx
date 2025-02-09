import { motion } from "framer-motion";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Textarea from "../components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from 'emailjs-com';
import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_l28jg5a', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
    >
      <div className="container mx-auto lg:px-16 px-4 sm:px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-600"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl   p-8">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Get in Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="your@email.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    name="message" 
                    placeholder="Your message" 
                    className="min-h-[150px]" 
                    value={formData.message} 
                    onChange={handleChange} 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl   p-8">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">contact@devmeetup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+251 911 123 456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl   p-8">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Follow Us</h2>
              <div className="flex gap-4">
                {[
                  { name: "Twitter", url: "#" },
                  { name: "LinkedIn", url: "#" },
                  { name: "Telegram", url: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="px-4 py-2 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;