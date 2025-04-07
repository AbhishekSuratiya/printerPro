import { motion } from 'framer-motion';
import { clients } from '../data/clients';
import { Link } from 'wouter';

const ClientsSection = () => {
  // Display just a portion of clients on the home page
  const featuredClients = clients.slice(0, 18);

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-900 mb-4">Our Trusted Clients</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We are proud to work with some of the best brands in the industry. Our clients trust us 
            for our quality, reliability, and exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {featuredClients.map((client) => (
            <motion.div
              key={client.id}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg h-32"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/clients">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-colors shadow-md cursor-pointer"
            >
              View All Clients
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;