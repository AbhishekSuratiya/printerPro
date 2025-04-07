import { motion } from 'framer-motion';
import { services } from '../data/services';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-900 mb-4 drop-shadow-sm">Our Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <div className="text-gray-700 max-w-3xl mx-auto">
            <p className="mb-3">
              At AYAAN PRINT INDUSTRIES, we offer a complete range of services in the fields of Print & Export Packaging, including:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-left max-w-2xl mx-auto mb-6">
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Barcode Stickers</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> PVC Stickers</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Hang Tags</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Printed Wash Care & Law Labels</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Woven Labels</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Header Cards</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Insert Cards</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Swatch Cards</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Belly Bands</li>
              <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Printed Stationery</li>
              <li className="flex items-center col-span-2"><i className="fas fa-check text-blue-500 mr-2"></i> All Types of Export Packaging</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-blue-500 font-medium hover:text-blue-700 transition-colors">
                Get a Quote →
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-colors shadow-md"
            data-aos="fade-up"
          >
            Print with Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
