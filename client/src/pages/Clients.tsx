import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clients } from '../data/clients';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ClientsSection from '../components/ClientsSection';

const Clients = () => {
  const [filter, setFilter] = useState('All');
  const [filteredClients, setFilteredClients] = useState(clients);
  
  // Extract unique categories
  const uniqueCategories = Array.from(new Set(clients.map(client => client.category)));
  const categories = ['All', ...uniqueCategories];
  
  useEffect(() => {
    // Update document title
    document.title = 'Our Clients - Ayaan Print Industries';
    
    // Filter clients when filter changes
    if (filter === 'All') {
      setFilteredClients(clients);
    } else {
      setFilteredClients(clients.filter(client => client.category === filter));
    }
  }, [filter]);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Clients</h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg">
              We are proud to partner with these amazing brands. Our clients trust us for quality, 
              reliability, and exceptional print solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors
                  ${filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 h-64"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: client.id * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", 
                  border: "1px solid #e5e7eb" 
                }}
              >
                <div className="flex items-center justify-center h-32 mb-4">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-16 max-w-full"
                  />
                </div>
                <h3 className="font-semibold text-lg text-center text-blue-900 mb-2">{client.name}</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {client.category}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No clients found in this category.</p>
            </div>
          )}
          
          {/* Testimonial Section */}
          <div className="mt-20 bg-blue-50 rounded-2xl p-10">
            <blockquote className="text-center">
              <p className="text-xl font-medium text-gray-800 italic mb-6">
                "Ayaan Print Industries has consistently delivered exceptional quality with every print job. 
                Their attention to detail and commitment to deadlines has made them our preferred printing partner."
              </p>
              <footer className="text-blue-600 font-semibold">— One of our valued clients</footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join our client list?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Experience the Ayaan Print Industries difference with premium printing solutions
            tailored to your business needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-md font-bold hover:bg-blue-50 transition-colors shadow-md"
          >
            Contact Us Today
          </a>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Clients;