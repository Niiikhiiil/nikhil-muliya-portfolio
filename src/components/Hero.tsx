import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 mb-3">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Nikhil Muliya
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Software Developer
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate Software developer with 1.5 years of experience crafting beautiful,
            responsive web applications using React.js, Javascript, Typescript, HTML, CSS, SCSS, Bootstrap, TailwindCSS and also having knowledge in Backend technologies like Node.js, ExpressJS and MongoDB.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          {[
            { Icon: Github, href: 'https://github.com/Niiikhiiil', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/niiiikhiiil', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:nikhilmuliya21@gmail.com', label: 'Email' }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon size={24} className="text-white group-hover:text-blue-400 transition-colors duration-200" />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <a
            href="#contact"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-md"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors duration-200">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;