
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState<'netlify' | 'emailjs'>('netlify');
  const [emailjsConfig, setEmailjsConfig] = useState({
    serviceId: '',
    templateId: '',
    publicKey: ''
  });
  const [showConfig, setShowConfig] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailJSSubmit = async () => {
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      toast({
        title: "EmailJS Configuration Required",
        description: "Please configure your EmailJS service ID, template ID, and public key.",
        variant: "destructive",
      });
      setShowConfig(true);
      return;
    }

    try {
      // Import EmailJS dynamically
      const emailjs = await import('emailjs-com');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Akash Pratap Singh'
      };

      await emailjs.default.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please check your EmailJS configuration and try again.",
        variant: "destructive",
      });
    }
  };

  const handleNetlifySubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Netlify form error:', error);
      toast({
        title: "Error sending message",
        description: "Please ensure Netlify Forms is enabled for your site and try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (serviceType === 'emailjs') {
        await handleEmailJSSubmit();
      } else {
        await handleNetlifySubmit();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'akash@example.com',
      link: 'mailto:akash@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's talk</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're someone with an 
                exciting project, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="bg-purple-500/20 p-3 rounded-full group-hover:bg-purple-500/30 transition-colors duration-300">
                    <info.icon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            {/* Service Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Contact Service</h3>
                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Settings size={20} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-700/50 rounded-lg">
                <button
                  type="button"
                  onClick={() => setServiceType('netlify')}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    serviceType === 'netlify'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Netlify Forms
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('emailjs')}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    serviceType === 'emailjs'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EmailJS
                </button>
              </div>
            </div>

            {/* EmailJS Configuration */}
            {showConfig && serviceType === 'emailjs' && (
              <div className="mb-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <h4 className="text-white font-medium mb-3">EmailJS Configuration</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Service ID"
                    value={emailjsConfig.serviceId}
                    onChange={(e) => setEmailjsConfig(prev => ({ ...prev, serviceId: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Template ID"
                    value={emailjsConfig.templateId}
                    onChange={(e) => setEmailjsConfig(prev => ({ ...prev, templateId: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Public Key"
                    value={emailjsConfig.publicKey}
                    onChange={(e) => setEmailjsConfig(prev => ({ ...prev, publicKey: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                  />
                </div>
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending via {serviceType === 'netlify' ? 'Netlify' : 'EmailJS'}...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Setup Instructions:</h4>
              <div className="text-sm text-gray-300 space-y-1">
                {serviceType === 'netlify' ? (
                  <>
                    <p>• Deploy to Netlify and enable Forms in your site settings</p>
                    <p>• Form submissions will appear in your Netlify dashboard</p>
                  </>
                ) : (
                  <>
                    <p>• Create an account at emailjs.com</p>
                    <p>• Set up a service and email template</p>
                    <p>• Enter your Service ID, Template ID, and Public Key above</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
