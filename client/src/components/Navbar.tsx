import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/new_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isPageLink: true },
    { name: 'About', href: '#about', isPageLink: false },
    { name: 'Services', href: '#services', isPageLink: false },
    { name: 'Mission & Vision', href: '#mission-vision', isPageLink: false },
    { name: 'Clients', href: '/clients', isPageLink: true },
    { name: 'Portfolio', href: '#portfolio', isPageLink: false },
    { name: 'Contact', href: '#contact', isPageLink: false },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`} id="navbar">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img src={logoImage} alt="Ayaan Print Industries Logo" className="h-12 w-auto" />
            <div className="text-primary font-bold text-2xl font-heading hidden sm:block">
              Ayaan<span className="text-blue-500">Print</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              link.isPageLink ? (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-500 font-medium transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-500 font-medium transition-colors cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-2"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  link.isPageLink ? (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className="text-gray-800 hover:text-blue-500 font-semibold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-800 hover:text-blue-500 font-semibold transition-colors"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
