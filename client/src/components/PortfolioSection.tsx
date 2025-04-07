import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import Lightbox from './Lightbox';
import ImageWithFallback from './ImageWithFallback';
import fallbackImage from '@assets/logo_16_155.png';

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  // Extract unique categories
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));

  // Get user-friendly category names for display
  const getCategoryName = (category: string) => {
    return category.replace(/_/g, ' ');
  };

  useEffect(() => {
    if (activeCategory) {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    } else {
      setFilteredItems(portfolioItems);
    }
  }, [activeCategory]);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-900 mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Browse through our collection of work we've done for clients across various industries.
            Click on any image to view details.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <motion.button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
              onClick={() => setActiveCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryName(category)}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index}
              className="portfolio-item rounded-lg overflow-hidden shadow-lg cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(item.imageUrl)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <ImageWithFallback 
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  fallbackSrc={fallbackImage}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {getCategoryName(item.category)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
      
      {lightboxOpen && selectedImage && (
        <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />
      )}
    </section>
  );
};

export default PortfolioSection;
