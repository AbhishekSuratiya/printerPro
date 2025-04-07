import { motion } from 'framer-motion';
import backgroundImage from '../assets/background.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Ayaan Print Industries background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          data-aos="fade-down"
        >
          Ayaan Print Industries
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-medium mb-6 text-white drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          All Printing Solutions Under One Roof
        </motion.p>
        
        <motion.p 
          className="max-w-2xl mx-auto text-lg mb-10 text-white drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          data-aos="fade-up" 
          data-aos-delay="150"
        >
          High-quality and affordable printing services customized to your needs.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition-colors inline-block shadow-lg text-white"
          >
            Get a Quote
          </a>
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 rounded-md font-semibold transition-colors inline-block shadow-lg"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
