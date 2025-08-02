
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'HTML5 & CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Sass/SCSS', level: 75 },
        { name: 'Redux Toolkit', level: 70 },
        { name: 'TypeScript', level: 50 },
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 80 },
        { name: 'JWT Authentication', level: 70 },
      ]
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Redux', level: 70 },
        { name: 'React Router', level: 85 },
        { name: 'Axios', level: 80 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Vite/Webpack', level: 70 },
        { name: 'VS Code', level: 100 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Technologies I Love</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'React', 'JavaScript', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git'
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm">
                    {tech.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;