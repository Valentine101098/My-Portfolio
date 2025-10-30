import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X } from 'lucide-react';
import photo1 from './assets/photo1.jpg';
import expense from './assets/expense.png'
import property from './assets/property.png'
import spacer from './assets/spacer.png'
import tracker from './assets/tracker.png'

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const projects = [
    {
      title: "SIM Kit Activation Tracker",
      description: "A comprehensive tracking application developed for a telecommunications company to monitor and manage activated SIM kit inventory with data validation and reporting features.",
      tech: ["Python", "Database Management"],
      github: "https://github.com/Valentine101098/Sim-Tracker",
      type: "Professional Project",
      image: tracker // Placeholder for project screenshot
    },
    {
      title: "SpaceHub - Workspace Booking Platform",
      description: "A full-featured workspace booking application for flexible office spaces with user authentication including google social authentication, real-time availability checking, and booking management functionality.",
      tech: ["React", "Flask", "SQLAlchemy", "Authentication"],
      github: "https://github.com/Valentine101098/Phase-5-Group-6-Spacer",
      type: "Full Stack Application",
      image: spacer // Placeholder for project screenshot
    },
    {
      title: "Property Management System",
      description: "A comprehensive platform for tracking rentals and tenant information with CRUD operations, role-based access control, and complex database relationships.",
      tech: ["Python", "Flask", "SQLAlchemy", "React"],
      github: "https://github.com/Moringa-SDF-PT10/property-management-gr12",
      type: "Full Stack Application",
      image:property // Placeholder for project screenshot
    },
    {
      title: "Personal Expense Tracker",
      description: "A command-line expense tracking tool with intuitive interface, advanced filtering, categorization, and financial summary reporting features.",
      tech: ["Python", "SQLAlchemy", "SQLite", "Colorama"],
      github: "https://github.com/Valentine101098/expense-tracker",
      type: "CLI Application",
      image: expense // Placeholder for project screenshot
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "SQL"],
    "Frontend": ["React", "HTML", "CSS"],
    "Backend": ["Flask", "SQLAlchemy"],
    "Databases": ["SQLite", "PostgreSQL"],
    "Concepts": ["OOP", "ORMs", "Data Structures", "Full-stack Development"]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Intersection observer for fade-in animations
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .fade-in-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-element.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .skill-badge {
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .skill-badge:hover {
          transform: scale(1.05);
          background-color: #667eea;
          color: white;
        }

        .profile-image {
          transition: transform 0.3s ease;
        }

        .profile-image:hover {
          transform: scale(1.05);
        }

        .project-image-container {
          overflow: hidden;
          border-radius: 0.5rem;
        }

        .project-image {
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">VW</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-600'
                      : 'text-gray-500 hover:text-purple-600'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-purple-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-sm font-medium text-gray-700 hover:text-purple-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image 1 - Hero Section */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 p-1 float-animation">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">

                  <img src={photo1} alt="Valentine Wanjiru" className="w-full h-full object-cover"/>

              </div>
            </div>
          </div>

          <div className="mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
              Valentine Wanjiru
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl gradient-text mb-6 sm:mb-8">
              Software Developer
            </p>
          </div>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
            Full-stack developer passionate about building practical solutions with Python, React, and JavaScript.
            Specializing in data-driven applications and turning complex problems into elegant code.
          </p>
          <div className="flex justify-center space-x-6 sm:space-x-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="https://github.com/Valentine101098" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-purple-600 transition-all transform hover:scale-110">
              <Github size={24} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/valentine-wanjiru-146301224" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-purple-600 transition-all transform hover:scale-110">
              <Linkedin size={24} className="sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:kt116tabitha@gmail.com"
               className="text-gray-700 hover:text-purple-600 transition-all transform hover:scale-110">
              <Mail size={24} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center fade-in-element gradient-text">About Me</h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Profile Image 2 - About Section */}
            <div className="md:col-span-1 fade-in-element">
              <div className="rounded-lg overflow-hidden shadow-lg profile-image bg-gradient-to-br from-purple-100 to-indigo-100 h-64 sm:h-80 flex items-center justify-center mx-auto max-w-sm">
                <div className="text-gray-400 text-center p-6">
                  <p className="text-sm font-medium">Replace with</p>
                  <p className="text-sm">your professional photo</p>
                  <p className="text-sm mt-2">(about-photo.jpg)</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 sm:space-y-6 text-gray-700 leading-relaxed fade-in-element">
              <p className="text-base sm:text-lg">
                I'm a motivated software developer with a strong foundation in full-stack development.
                Currently completing my Software Engineering Bootcamp at Moringa School, I combine technical
                skills with analytical thinking from my background in Economics and Statistics.
              </p>
              <p className="text-base sm:text-lg">
                My experience includes delivering a pro bono telecommunications tracking system and building
                multiple full-stack applications. I'm particularly interested in data-intensive applications,
                telecommunications, and solving complex business problems through code.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 fade-in-element">
            <div className="bg-white rounded-lg p-5 sm:p-6 shadow-md">
              <h3 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-base sm:text-lg">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-purple-600 text-sm sm:text-base">Software Engineering Bootcamp</p>
                  <p className="text-xs sm:text-sm text-gray-600">Moringa School (Expected Nov 2025)</p>
                </div>
                <div>
                  <p className="font-medium text-purple-600 text-sm sm:text-base">Bachelor of Economics & Statistics</p>
                  <p className="text-xs sm:text-sm text-gray-600">Kenyatta University</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 sm:p-6 shadow-md">
              <h3 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-base sm:text-lg">Location & Availability</h3>
              <div className="space-y-2">
                <p className="flex items-center text-xs sm:text-sm">
                  <MapPin size={16} className="mr-2 text-purple-600 flex-shrink-0" />
                  Nairobi, Kenya
                </p>
                <p className="text-xs sm:text-sm">✓ Available for immediate start</p>
                <p className="text-xs sm:text-sm">✓ Open to internships & entry-level roles</p>
                <p className="text-xs sm:text-sm">✓ Fluent in English & Swahili</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center fade-in-element gradient-text">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow project-card fade-in-element bg-white">
                {/* Project Screenshot Placeholder */}
                <div className="project-image-container h-40 sm:h-48 bg-gradient-to-br from-purple-100 to-indigo-100">
                  <img src={project.image} alt={project.title} className="project-image w-full h-full object-cover"/>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-2">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-purple-600 transition-all transform hover:scale-110 flex-shrink-0">
                      <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <p className="text-xs text-purple-600 font-medium mb-2 sm:mb-3">{project.type}</p>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-50 text-purple-700 text-xs rounded-full skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center fade-in-element gradient-text">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className="border border-purple-200 rounded-lg p-4 sm:p-5 lg:p-6 bg-white shadow-md fade-in-element" style={{animationDelay: `${idx * 0.1}s`}}>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-purple-600">{category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-50 text-purple-700 text-xs sm:text-sm rounded-full skill-badge cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 fade-in-element gradient-text">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed fade-in-element">
            I'm currently seeking internship or entry-level opportunities in software development.
            Whether you have a question or just want to connect, feel free to reach out!
          </p>
          <div className="space-y-3 sm:space-y-4 fade-in-element">
            <a href="mailto:kt116tabitha@gmail.com"
               className="flex items-center justify-center space-x-2 sm:space-x-3 text-gray-700 hover:text-purple-600 transition-all transform hover:scale-105 text-sm sm:text-base">
              <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-all">kt116tabitha@gmail.com</span>
            </a>
            <a href="tel:+254740760407"
               className="flex items-center justify-center space-x-2 sm:space-x-3 text-gray-700 hover:text-purple-600 transition-all transform hover:scale-105 text-sm sm:text-base">
              <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span>+254 740 760 407</span>
            </a>
            <div className="flex justify-center space-x-6 sm:space-x-8 pt-4 sm:pt-6">
              <a href="https://github.com/Valentine101098" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 hover:text-purple-600 transition-all transform hover:scale-110">
                <Github size={26} className="sm:w-7 sm:h-7" />
              </a>
              <a href="https://www.linkedin.com/in/valentine-wanjiru-146301224" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 hover:text-purple-600 transition-all transform hover:scale-110">
                <Linkedin size={26} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50">
        <p>© 2025 Valentine Wanjiru.</p>
      </footer>
    </div>
  );
}