import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analytical approach to complex technical challenges'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering results and meeting deadlines'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I began my journey as a full-stack developer 2 years ago. During my training period, I gained hands-on experience working on backend development, which gave me a solid understanding of how complete web applications function from end to end.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently, I am working as a React.js developer, focusing on building intuitive and responsive user interfaces. However, my background in backend development allows me to collaborate effectively across the full stack and understand how frontend and backend systems integrate seamlessly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with the latest trends in frontend technologies while retaining my backend knowledge. My goal is to contribute to impactful projects that enhance user experience and deliver real value.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '1.5+', label: 'Years Experience' },
            { number: '15+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies Used' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;