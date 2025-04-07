import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? Contact us today and let's discuss how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            data-aos="fade-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full flex"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full w-full">
              <h3 className="text-2xl font-bold font-heading text-blue-900 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="flex-grow flex flex-col">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    {...register('name')}
                    placeholder="John Doe" 
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    {...register('email')}
                    placeholder="john@example.com" 
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    {...register('phone')}
                    placeholder="+91 99999 99999" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <div className="mb-6 flex-grow">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    {...register('message')}
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 h-full min-h-[120px]`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors disabled:opacity-70 shadow-md mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            data-aos="fade-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full flex"
          >
            <div className="bg-blue-900 rounded-lg shadow-lg p-8 text-white h-full w-full flex flex-col">
              <h3 className="text-2xl font-bold font-heading mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-white">123 Printing Avenue, New Delhi, India - 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <i className="fas fa-phone-alt text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-white">+91-99999-99999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-white">info@ayaanprint.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <i className="fas fa-clock text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-white">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="bg-white/10 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-white/10 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-white/10 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-white/10 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </motion.a>
                </div>
              </div>
              
              <div className="mt-10 rounded-lg overflow-hidden h-48">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400607503!2d77.04417972966965!3d28.52725481878395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1617000042824!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
