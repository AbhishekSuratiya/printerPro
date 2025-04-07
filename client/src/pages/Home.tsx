import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import MissionVisionSection from '../components/MissionVisionSection';
import VideoSection from '../components/VideoSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    });
    
    // Update document title
    document.title = 'Ayaan Print Industries - All Printing Solutions Under One Roof';
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionVisionSection />
      <VideoSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
