import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import './App.css';
import profileImage from './assets/IMG-20240919-WA0086_1.jpg';
import eyanoImage from './assets/eyano.png';
import mergeConstructImage from './assets/merge.png';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [hasChosenChannel, setHasChosenChannel] = useState(false);

  const [preparedMessage, setPreparedMessage] = useState({ whatsapp: '', emailSubject: '', emailBody: '' });

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Vérifier si tous les champs sont remplis
    const allFieldsFilled = Object.values({...formData, [name]: value}).every(field => field.trim() !== '');
    setIsFormValid(allFieldsFilled);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const { name, email, subject, message } = formData;

    const whatsappText =
      `Nouveau message depuis le portfolio:%0A%0A` +
      `Nom: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Sujet: ${encodeURIComponent(subject)}%0A%0A` +
      `Message: ${encodeURIComponent(message)}`;

    const emailSubject = `[Portfolio] ${subject}`;
    const emailBody =
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      `Sujet: ${subject}\n\n` +
      `Message:\n${message}`;

    setPreparedMessage({
      whatsapp: whatsappText,
      emailSubject,
      emailBody,
    });

    setShowContactOptions(true);
    setHasChosenChannel(false);
    setShowSuccessMessage(false);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsFormValid(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = '243822400635';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${preparedMessage.whatsapp}`;
    globalThis.open(whatsappUrl, '_blank');
    setHasChosenChannel(true);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(preparedMessage.emailSubject);
    const body = encodeURIComponent(preparedMessage.emailBody);
    const mailtoUrl = `mailto:elbamatondo12@gmail.com?subject=${subject}&body=${body}`;
    globalThis.open(mailtoUrl, '_blank');
    setHasChosenChannel(true);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Données des projets
  const projects = [
    {
      id: 1,
      title: 'Gestion des Résultats',
      description: 'Application web pour la gestion et la publication des résultats académiques avec tableau de bord administratif et espace étudiant.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: 'https://github.com/mkmathiasgmail/gestion-result',
      demo: 'https://github.com/mkmathiasgmail/gestion-result'
    },
    {
      id: 2,
      title: 'Bonzenga App',
      description: 'Site vitrine pour un salon de coiffure avec prise de rendez-vous en ligne et galerie des réalisations.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      github: 'https://github.com/mkmathiasgmail/bonzenga-app',
      demo: 'https://github.com/mkmathiasgmail/bonzenga-app'
    },
    {
      id: 3,
      title: 'Gestion de Centre de Formation',
      description: 'Application web complète pour la gestion administrative des centres de formation. Gestion des apprenants, formateurs, sessions de formation, emplois du temps et évaluations avec tableau de bord administratif.',
      technologies: ['Laravel', 'React.js', 'MySQL', 'REST API', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      github: 'https://github.com/mkmathiasgmail/gestion_centre_final',
      demo: 'https://github.com/mkmathiasgmail/gestion_centre_final#readme'
    },
    {
      id: 4,
      title: 'Gestion de Tâches',
      description: 'Application de gestion de tâches avec tableau de bord et fonctionnalités de collaboration en équipe.',
      technologies: ['Angular', 'Firebase', 'Material UI'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.example.com'
    },
    {
      id: 5,
      title: 'Eyano App',
      description: "Application d'évaluations pour des concours, permettant de gérer les questions, les sessions d'examen et les résultats des candidats.",
      technologies: ['Laravel', 'Blade', 'PHP', 'MySQL'],
      image: eyanoImage,
      github: 'https://github.com/yourusername/eyano-app',
      demo: 'https://github.com/yourusername/eyano-app'
    },
    {
      id: 6,
      title: 'Merge Construct',
      description: 'Application de gestion des stocks et des ventes de matériaux de construction avec suivi des clients, des commandes et des paiements.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      image: mergeConstructImage,
      github: 'https://github.com/yourusername/gestion-materiaux-construction',
      demo: 'https://github.com/yourusername/gestion-materiaux-construction'
    }
  ];

  // Compétences avec icônes et couleurs
  const skills = [
    { 
      name: 'HTML/CSS', 
      level: 90, 
      icon: <FaHtml5 className="skill-icon" />, 
      color: '#e34f26' 
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: <FaJs className="skill-icon" />, 
      color: '#f7df1e' 
    },
    { 
      name: 'React', 
      level: 80, 
      icon: <FaReact className="skill-icon" />, 
      color: '#61dafb' 
    },
    { 
      name: 'Node.js', 
      level: 75, 
      icon: <FaNodeJs className="skill-icon" />, 
      color: '#68a063' 
    },
    { 
      name: 'MongoDB', 
      level: 70, 
      icon: <FaDatabase className="skill-icon" />, 
      color: '#4db33d' 
    },
    { 
      name: 'Git', 
      level: 80, 
      icon: <FaGitAlt className="skill-icon" />, 
      color: '#f14e32' 
    }
  ];

  if (isLoading) {
    return (
      <div
        className="loading-screen"
        role="status"
        aria-label="Chargement du portfolio de Idriss Elba"
      >
        <div className="loading-initials">IE</div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="logo-initials">I E</span>
            <span className="logo-text">Idriss Elba</span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#accueil" onClick={() => scrollToSection('accueil')} className={activeSection === 'accueil' ? 'active' : ''}>Accueil</a>
            <a href="#apropos" onClick={() => scrollToSection('apropos')} className={activeSection === 'apropos' ? 'active' : ''}>À propos</a>
            <a href="#competences" onClick={() => scrollToSection('competences')} className={activeSection === 'competences' ? 'active' : ''}>Compétences</a>
            <a href="#projets" onClick={() => scrollToSection('projets')} className={activeSection === 'projets' ? 'active' : ''}>Projets</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <div className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Section Accueil */}
      <section id="accueil" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Bonjour, je suis <span>Idriss Elba Kapata</span></h1>

            <h2 className="hero-subtitle">Développeur Web Full Stack</h2>
            <p>Je crée des expériences numériques exceptionnelles</p>
            <div className="cta-buttons">
              <a href="#projets" className="btn btn-primary">Voir mes projets</a>
              <a href="#contact" className="btn btn-secondary">Me contacter</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profil" className="profile-image" />
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="about">
        <div className="container">
          <h2 className="section-title">À propos de moi</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Je suis un développeur passionné par la création d'applications web modernes et réactives. Avec une solide expérience en développement front-end et back-end, je m'efforce de créer des solutions élégantes et performantes.</p>
              <p>Ma passion pour le code et mon souci du détail me permettent de transformer des idées en réalité numérique tout en respectant les meilleures pratiques de développement.</p>
              <div className="social-links">
                <a href="https://github.com/mkmathiasgmail" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/idriss-matondo-2652102b2/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:elbamatondo12@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="skills">
        <div className="container">
          <h2 className="section-title">Mes compétences</h2>
          <div className="skills-container">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="skill-item"
                data-aos="fade-up"
              >
                <div className="skill-header">
                  <div className="skill-icon-container" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      boxShadow: `0 0 15px ${skill.color}80`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="projects">
        <div className="container">
          <h2 className="section-title">Mes projets</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                role="button"
                tabIndex={0}
                onClick={() => handleProjectClick(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProjectClick(project);
                  }
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={`${project.id}-${tech}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal projet plein écran */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={closeProjectModal}>
              &times;
            </button>
            <div className="project-modal-image-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="project-modal-info">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-modal-tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={`${selectedProject.id}-${tech}`}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Contactez-moi</h2>
          
          <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
            {/* Formulaire de contact */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Votre email"
                      required
                      className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                    className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Votre message..."
                    required
                    className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>

                </div>
                
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
                    isFormValid 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Envoyer le message
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Tous les champs sont obligatoires afin que je puisse vous répondre.
                </p>
              </form>
              {showSuccessMessage && (
                <p className="mt-4 text-sm font-medium text-green-600">
                  Votre message a été préparé avec succès. Merci pour votre confiance !
                </p>
              )}
            </div>
            
            {/* Informations de contact */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">Coordonnées</h3>
              <p className="mb-6 text-gray-600">N'hésitez pas à me contacter pour discuter de votre projet ou pour toute question.</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaEnvelope className="mr-3 text-blue-600" />
                  <span className="text-gray-700">elbamatondo12@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="mr-3 text-blue-600" />
                  <a href="https://www.linkedin.com/in/idriss-matondo-2652102b2/" target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-colors hover:text-blue-600">
                    Mon profil LinkedIn
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="mr-3 text-gray-800" />
                  <a href="https://github.com/mkmathiasgmail" target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-colors hover:text-blue-600">
                    github.com/mkmathiasgmail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      {showContactOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Merci pour votre message</h3>
            <p className="mb-6 text-gray-600">Choisissez comment vous souhaitez m'envoyer ce message&nbsp;:</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex-1 px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Envoyer via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleEmailClick}
                className="flex-1 px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Envoyer par email
              </button>
            </div>
            <button
              type="button"
              disabled={!hasChosenChannel}
              onClick={() => {
                if (!hasChosenChannel) return;
                setShowContactOptions(false);
                setShowSuccessMessage(true);
              }}
              className={`w-full px-4 py-2 mt-4 text-sm font-medium rounded-md transition-colors ${
                hasChosenChannel
                  ? 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                  : 'text-gray-400 bg-gray-100 cursor-not-allowed'
              }`}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Idriss Elba Kapata. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#accueil">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;