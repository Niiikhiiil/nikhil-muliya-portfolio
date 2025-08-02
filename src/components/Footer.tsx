import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">{'<'}</span>
              Nikhil Muliya
              <span className="text-blue-400">{'/>'}</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Full-Stack Developer passionate about creating amazing web experiences
              and bringing ideas to life through clean, efficient code.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>nikhilmuliya21@gmail.com</p>
              <p>+91 87800-71750</p>
              <p>Rajkot, Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>using</span>
              <Code size={16} className="text-blue-400" />
              <span>and</span>
              <Coffee size={16} className="text-yellow-400" />
            </div>

            <div className="text-gray-400 text-sm">
              © {currentYear} Nikhil Muliya. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;