import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    { icon: 'fas fa-medal', label: 'Quality Assured' },
    { icon: 'fas fa-clock', label: 'Timely Delivery' },
    { icon: 'fas fa-users', label: 'Expert Team' },
    { icon: 'fas fa-comments', label: '24/7 Support' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            data-aos="fade-right"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Printing professionals at work" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            data-aos="fade-left"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-900 mb-6">About Us</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            <p className="text-gray-700 text-lg mb-4">
              Established in 2015 as a full-fledged Document Solutions Provider, AYAAN PRINT INDUSTRIES has earned a reputation as a quality commercial printer, offering complete offset and digital printing services. The company undertakes all printing-related assignments, assuring the highest quality standards.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              AYAAN PRINT INDUSTRIES has always aimed to innovate and has invested in state-of-the-art equipment to provide the best solutions and quality to its customers. We have also expanded our product portfolio, keeping in mind the need for faster delivery to meet the ever-increasing market demand.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Our setup includes a mix of high-end machines that cater to clients across various market segments.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className={`${feature.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <span className="font-medium text-gray-800">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
