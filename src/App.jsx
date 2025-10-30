import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import './App.css';
import profileImage from './assets/449188700_1241909323445078_6589457566887089535_n.jpg';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

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
      title: 'Application E-commerce',
      description: 'Une application e-commerce complète avec panier, authentification et paiement en ligne.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: 'https://github.com/yourusername/ecommerce-app',
      demo: 'https://ecommerce-demo.example.com'
    },
    {
      id: 2,
      title: 'Réseau Social',
      description: 'Un réseau social avec partage de publications, commentaires et notifications en temps réel.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      github: 'https://github.com/yourusername/social-network',
      demo: 'https://social-network-demo.example.com'
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

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Mon Portfolio</div>
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
            <h1>Bonjour, je suis <span>Idriss elba kapata</span></h1>
            <h2>Développeur Full Stack</h2>
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
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                      Voir la démo
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contactez-moi</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Parlons de votre projet</h3>
              <p>N'hésitez pas à me contacter pour discuter de votre projet ou pour toute question.</p>
              <div className="contact-details">
                <p><FaEnvelope /> elbamatondo12@gmail.com</p>
                <p><FaLinkedin /> linkedin.com/in/votreprofil</p>
                <p><FaGithub /> github.com/mkmathiasgmail</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Votre email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Sujet" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Votre message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Votre Nom. Tous droits réservés.</p>
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