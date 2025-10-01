import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '/Nikhil-Muliya-Full-Stack-Software-Devleloper.pdf'; // Adjust the path as necessary
    link.download = 'Nikhil_Muliya_Software_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-400">{'<'}</span>
            Nikhil Muliya
            <span className="text-blue-400">{'/>'}</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4">
            <nav className="flex flex-col space-y-2 px-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-left py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mt-4"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;