import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Offset Printing', href: '#' },
    { name: 'Digital Printing', href: '#' },
    { name: 'Screen Printing', href: '#' },
    { name: 'Corporate Stationery', href: '#' },
    { name: 'Custom Merchandise', href: '#' },
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
  ];

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Ayaan<span className="text-blue-400">Print</span></h3>
            <p className="text-white mb-6">
              All printing solutions under one roof. Quality printing services customized to your needs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="text-white hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <span className="text-white">123 Printing Avenue, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-blue-400"></i>
                <span className="text-white">+91-99999-99999</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                <span className="text-white">info@ayaanprint.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-blue-400"></i>
                <span className="text-white">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ayaan Print Industries. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white hover:text-blue-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
