import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDesktop, FaServer, FaMobileAlt, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel } from 'react-icons/si';
import './App.css';
import profileImage from './assets/IMG-20240919-WA0086_1.jpg';

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
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setShowContactOptions(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
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

const projects = [
    {
      id: 1,
      title: 'Bonzenga App',
      description: 'Site vitrine pour un salon de coiffure avec présentation des services, galerie et prise de rendez-vous.',
      impact: 'Une présence en ligne claire pour faciliter la découverte des services et la prise de contact.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/mkmathiasgmail/bonzenga-app',
      demo: null
    },
    {
      id: 2,
      title: 'Gestion de Centre de Formation',
      description: 'Application web de gestion des apprenants, formateurs, sessions, emplois du temps et évaluations.',
      impact: 'Centralisation des opérations administratives dans un tableau de bord structuré.',
      technologies: ['Laravel', 'React.js', 'MySQL', 'REST API', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/mkmathiasgmail/gestion_centre_final',
      demo: null
    },
    {
      id: 3,
      title: 'Gestion des Résultats',
      description: 'Application de publication de résultats académiques avec espace étudiant et tableau de bord administratif.',
      impact: 'Projet réalisé dans un dépôt privé ; démonstration disponible sur demande.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
      github: null,
      demo: null
    }
  ];

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
    },
    { 
      name: 'Laravel', 
      level: 85, 
      icon: <SiLaravel className="skill-icon" />, 
      color: '#ff2d20' 
    },
    { 
      name: 'PHP', 
      level: 80, 
      icon: <FaPhp className="skill-icon" />, 
      color: '#777bb4' 
    },
    { 
      name: 'Bootstrap', 
      level: 85, 
      icon: <FaBootstrap className="skill-icon" />, 
      color: '#7952b3' 
    },
    { 
      name: 'Tailwind CSS', 
      level: 85, 
      icon: <SiTailwindcss className="skill-icon" />, 
      color: '#06b6d4' 
    }
  ];

  if (isLoading) {
    return (
      <div
        className="loading-screen"
        role="status"
        aria-label="Chargement du portfolio de Idriss Elba"
      >
        <div className="loading-content">
          <div className="loading-logo-container">
            <div className="loading-logo">IE</div>
            <div className="loading-circle"></div>
          </div>
          <div className="loading-text">DÉVELOPPEUR FULL STACK</div>
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
        </div>
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
          <div id="site-navigation" className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#accueil" onClick={() => scrollToSection('accueil')} className={activeSection === 'accueil' ? 'active' : ''}>Accueil</a>
            <a href="#apropos" onClick={() => scrollToSection('apropos')} className={activeSection === 'apropos' ? 'active' : ''}>À propos</a>
            <a href="#competences" onClick={() => scrollToSection('competences')} className={activeSection === 'competences' ? 'active' : ''}>Compétences</a>
            <a href="#services" onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</a>
            <a href="#projets" onClick={() => scrollToSection('projets')} className={activeSection === 'projets' ? 'active' : ''}>Projets</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <button className="menu-btn" type="button" aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isMenuOpen} aria-controls="site-navigation" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Section Accueil */}
      <section id="accueil" className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="eyebrow">Disponible pour de nouveaux projets</p>
            <h1 className="hero-title">Je conçois des produits web <span>utiles et performants.</span></h1>

            <h2 className="hero-subtitle">Développeur Web Full Stack</h2>
            <p>Développeur Web Full Stack, je transforme des besoins métier en applications claires, robustes et responsives.</p>
            <div className="cta-buttons">
              <a href="#projets" className="btn btn-primary">Voir mes projets</a>
              <a href="#contact" className="btn btn-secondary">Me contacter</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Idriss Elba Kapata, développeur Web Full Stack" className="profile-image" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="about">
        <div className="container">
          <h2 className="section-title">À propos de moi</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Je suis Idriss Elba Kapata, développeur Web Full Stack. Je conçois des interfaces modernes et des applications métier qui rendent les processus plus simples, plus fiables et plus faciles à utiliser.</p>
              <p>Mon approche combine une attention particulière à l’expérience utilisateur, une architecture maintenable et une communication claire du besoin jusqu’à la mise en ligne.</p>
              <div className="about-highlights"><span>Applications métier</span><span>Tableaux de bord</span><span>Interfaces responsives</span></div>
              <div className="social-links">
                <a href="https://github.com/mkmathiasgmail" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/idriss-matondo-2652102b2/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn"><FaLinkedin /></a>
                <a href="mailto:elbamatondo12@gmail.com" aria-label="Envoyer un email"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="skills">
        <div className="container">
          <h2 className="section-title">Compétences techniques</h2>
          <p className="section-intro">Une stack choisie pour construire des expériences rapides, maintenables et adaptées aux usages réels.</p>
          <div className="skills-container">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="skill-card-square"
                data-aos="fade-up"
              >
                <div className="skill-card-content">
                  <div className="skill-icon-large" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-card-title">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Ce que je peux construire</h2>
          <p className="section-intro section-intro-light">Des solutions concrètes, de la première idée jusqu’à la mise en production.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaDesktop />
              </div>
              <h3>Développement Web</h3>
              <p>Création de sites web modernes et responsives avec les dernières technologies.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaServer />
              </div>
              <h3>Développement Full Stack</h3>
              <p>Solutions complètes du front-end au back-end avec bases de données robustes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3>Applications Responsives</h3>
              <p>Interfaces adaptées à tous les appareils pour une expérience utilisateur optimale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="projects">
        <div className="container">
          <h2 className="section-title">Projets sélectionnés</h2>
          <p className="section-intro">Quelques réalisations qui illustrent mon approche du produit, du design et du développement.</p>
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
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-impact"><strong>Valeur :</strong> {project.impact}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={closeProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" type="button" aria-label="Fermer le projet" onClick={closeProjectModal}>✕</button>
            <div className="project-modal-image-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="project-modal-info">
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <p className="project-impact"><strong>Valeur :</strong> {selectedProject.impact}</p>
              <div className="project-modal-tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                {selectedProject.github ? <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir le code</a> : <span className="private-project">Projet privé — démo sur demande</span>}
                {selectedProject.demo && <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Voir la démo</a>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Me Contacter</h2>
          <div className="contact-container">
            <div className="contact-info">
              <form onSubmit={handleSubmit} className="contact-form">
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
                <p className="form-note">Le formulaire prépare un message dans votre email ou WhatsApp ; aucune donnée n’est stockée sur ce site.</p>
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
                  <a className="text-gray-700 contact-email" href="mailto:elbamatondo12@gmail.com">elbamatondo12@gmail.com</a>
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
            <a href="#services">Services</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
