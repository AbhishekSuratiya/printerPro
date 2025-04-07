import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2" 
            data-aos="fade-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white drop-shadow-sm">Watch Us in Action</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            <p className="text-white text-lg mb-6 drop-shadow-sm">
              Take a look behind the scenes of our printing magic. Our state-of-the-art facility combines cutting-edge technology with skilled craftsmanship to deliver exceptional results.
            </p>
            <p className="text-white text-lg mb-8 drop-shadow-sm">
              From prepress to finishing, we maintain strict quality controls at every stage of the printing process to ensure your project exceeds expectations.
            </p>
            <motion.a 
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition-colors cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-play-circle mr-2"></i>
              <span>Watch More Videos</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2" 
            data-aos="fade-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Ayaan Print Industries - Our Process" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="aspect-video"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
