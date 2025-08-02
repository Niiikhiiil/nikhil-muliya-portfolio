import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer (React.js)',
      company: 'Peafowl IT Solution',
      location: 'Rajkot, Gujarat, India',
      period: 'May 2024 - Present',
      type: 'Full-time',
      responsibilities: [
        'Developing and maintaining dynamic, scalable frontend applications using React.js for 10,000+ daily active users',
        'Collaborating with UX/UI designers to build pixel-perfect, responsive interfaces using Tailwind CSS and modern design systems',
        'Implementing state management using Redux for efficient data flow and performance',
        'Optimizing frontend performance through code splitting, lazy loading, and best practices to reduce load time by 40%',
        'Working closely with backend teams to integrate RESTful APIs and ensure seamless frontend-backend communication',
        'Participating in code reviews and sharing knowledge on React best practices with team members'
      ],
      technologies: ['React.js', 'Javascript', 'TypeScript', 'Redux', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind CSS', 'Axios', 'ESLint', 'Prettier']
    },
    {
      title: 'Software Developer Trainee',
      company: 'Intralogic IT Solutions',
      location: 'Rajkot, Gujarat, India',
      period: 'Feb 2023 – May 2023',
      type: 'Internship / Training',
      responsibilities: [
        'Worked on full-stack web development projects using the MERN (MongoDB, Express.js, React.js, Node.js) stack',
        'Developed responsive frontend components using React.js and integrated them with RESTful APIs',
        'Built backend APIs with Express.js and Node.js for features like authentication and data management',
        'Designed and managed MongoDB databases, including schema creation and data queries using Mongoose',
        'Collaborated in an agile team environment to deliver project milestones and weekly sprints',
        'Gained experience in Git-based version control, code debugging, and deployment workflows'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JavaScript', 'Bootstrap', 'Git']
    }

  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey in full-stack development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Career Timeline</h3>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Started as Graphic Designer (FreeLancee)</p>
                    <p className="text-gray-400 text-sm">June 2020 - Jan 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Worked As Software Developer Trainee (MERN)</p>
                    <p className="text-gray-400 text-sm">Feb 2023 - May 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    ★
                  </div>
                  <div>
                    <p className="text-white font-medium">Working As Lead/Senior Developer in Leading Projects</p>
                    <p className="text-gray-400 text-sm">May 2024 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;