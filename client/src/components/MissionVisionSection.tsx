import { motion } from 'framer-motion';

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-900 mb-4">Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-700 mb-8">
              Our mission is to set a benchmark in the field of print production in the Delhi-NCR region, ensuring maximum client satisfaction by delivering the highest standards of quality, while upholding human values and promoting intelligence, creativity, and innovation to achieve success.
            </p>
          </div>
          
          <div className="rounded-xl bg-white shadow-lg p-8 mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">AYAAN PRINT INDUSTRIES – At Your Doorstep</h3>
            <p className="text-gray-700 mb-6">
              We provide comprehensive printing and designing solutions for a wide range of sectors, including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center">
                <i className="fas fa-building text-blue-500 mr-3"></i>
                <span>Government</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-landmark text-blue-500 mr-3"></i>
                <span>Semi-Government</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-briefcase text-blue-500 mr-3"></i>
                <span>Corporate</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-user text-blue-500 mr-3"></i>
                <span>Individual Clients</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Starting modestly as AYAAN Graphics in 1997, we have grown to cater to a wide range of clients across the National Capital Region, including Noida.
            </p>
            <p className="text-gray-700 mb-4">
              We leverage all available means of communication and select the most efficient methods of delivery — closing the distance between us and our clients.
            </p>
            <p className="text-gray-700 mb-4">
              We are a team of experienced industry professionals who work without boundaries and with unwavering enthusiasm.
            </p>
            <p className="text-gray-700 font-medium">
              Quality, commitment, and prompt service are the core identity of AYAAN PRINT INDUSTRIES.
            </p>
          </div>
          
          <div className="bg-blue-600 text-white rounded-xl p-8" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-xl mb-4">
              Our goal is to develop and maintain long-lasting relationships.
            </p>
            <p className="text-lg">
              We believe that mutual trust and collaboration with our clients are the key ingredients to long-term success and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;