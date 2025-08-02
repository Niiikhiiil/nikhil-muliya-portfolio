import { Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'An admin dashboard to manage employee records, roles, attendance, and performance reviews. Built using React and Redux Toolkit with responsive UI and data filtering features.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: true
    },
    {
      title: 'Contractor Management System',
      description: 'A task management system for handling contractor onboarding, task assignments, and Managing attendences with responsive UI and role-based access.',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: true
    },
    {
      title: 'Guest Reservation System',
      description: 'A smart reservation platform where guests can pre-book desks or meeting rooms and check in on arrival using a secure QR code. Includes real-time availability tracking, access validation, and reservation history.',
      image: 'https://images.pexels.com/photos/4269203/pexels-photo-4269203.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'Redux Toolkit', 'Bootstrap', 'SCSS', 'QRCode Scanner'],
      featured: true
    },
    {
      title: 'Meeting Management System (Teams App Integration)',
      description: 'A scheduling tool for booking, managing, and tracking meetings with calendar integration, conflict detection, and automated email notifications.',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: true
    },
    {
      title: 'Meeting Management System',
      description: 'A scheduling tool for booking, managing, and tracking meetings with calendar integration, conflict detection, and automated email notifications.',
      image: 'https://images.pexels.com/photos/6914649/pexels-photo-6914649.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: true
    },
    {
      title: 'Desk Booking System',
      description: 'A reservation platform to book desks and meeting rooms with real-time availability, QR check-ins, and user access controls.',
      image: 'https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: true
    },
    {
      title: 'Catering Management System',
      description: 'A web app to manage catering orders, meal schedules, vendor coordination, and delivery status with real-time updates and user-specific dashboards.',
      image: 'https://images.pexels.com/photos/29819295/pexels-photo-29819295.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: false
    },
    {
      title: 'Microsoft Outlook Add-In',
      description: 'A custom Outlook Add-In built with React to allow users to interact with internal business tools directly from their mailbox, including meeting room bookings and desk room access.',
      image: 'https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: false
    },
    {
      title: 'Timesheet Management System',
      description: 'An application that enables employees to log working hours, submit weekly reports, and generate productivity analytics for HR and project teams.',
      image: 'https://images.pexels.com/photos/4841640/pexels-photo-4841640.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: false
    },
    {
      title: 'Payroll Management System',
      description: 'A payroll processing platform for calculating employee salaries, deductions, tax reports, and automating pay slips generation integrated with attendance systems.',
      image: 'https://images.pexels.com/photos/6694950/pexels-photo-6694950.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: false
    },
    {
      title: 'Resource Management System',
      description: 'A centralized system for allocating, tracking, and analyzing resource usage across departments and projects with reporting dashboards and alerts.',
      image: 'https://images.pexels.com/photos/6964107/pexels-photo-6964107.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'SCSS', 'Bootstrap', 'Redux Toolkit'],
      featured: false
    },
    {
      title: 'Kudos Management System',
      description: 'An internal recognition platform where employees can send, receive, and track kudos. Features include public appreciation, filters by tag (e.g., #teamwork), and a leaderboard to promote a positive workplace culture.',
      image: 'https://images.pexels.com/photos/8250916/pexels-photo-8250916.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'TypeScript', 'Redux Toolkit', 'Bootstrap', 'SCSS'],
      featured: false
    }
  ];


  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
            >
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                    <Zap size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-blue-400 px-2 py-1 rounded text-xs border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {/* <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;