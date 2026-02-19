import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Users,
  Globe,
  ChevronRight,
  BrainCog,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X
} from 'lucide-react';
import './App.css';
import logoHorizontal from './assets/logo-horizontal.webp';
import heroImage from './assets/hero-keyboard.webp';
import CountUp from 'react-countup';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar glass">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%' }}>
        <img src={logoHorizontal} alt="BowTieLabs Logo" style={{ height: '24px', filter: 'invert(var(--logo-invert))' }} />

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          <a href="#home">Home</a>
          <a href="#wedo">What we do</a>
          <a href="#services">Services</a>
          <a href="#facts">Facts</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="nav-links-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#home" onClick={toggleMenu}>Home</a>
              <a href="#wedo" onClick={toggleMenu}>What we do</a>
              <a href="#services" onClick={toggleMenu}>Services</a>
              <a href="#facts" onClick={toggleMenu}>Facts</a>
              <a href="#clients" onClick={toggleMenu}>Clients</a>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = () => {
  const slides = [
    {
      heading: "Engineering the Future of Technology.",
      description: "Passion-driven solutions for software development, mobile apps, and technical consulting.",
      buttons: [
        { text: "Get Started", type: "primary" },
        { text: "Learn more", type: "link" },
      ],
    },
    {
      heading: "Innovate with Confidence.",
      description: "We deliver cutting-edge solutions tailored to your business needs.",
      buttons: [
        { text: "Our Services", type: "primary" },
        { text: "Contact Us", type: "link" },
      ],
    },
    {
      heading: "Your Vision, Our Expertise.",
      description: "Transforming ideas into reality with world-class technology solutions.",
      buttons: [
        { text: "Explore Projects", type: "primary" },
        { text: "Join Us", type: "link" },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // reanuda después de 8s
  };

  return (
    <motion.section id="home" className="hero"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >

      {/* Capa de transparencia para aclarar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Blanco semitransparente
          zIndex: 2,
        }}
      ></div>

      {/* Capa de contenedor */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="heading-xl">{slides[currentSlide].heading}</h1>
            <p style={{ fontSize: 'var(--text-xl)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
              {slides[currentSlide].description}
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-5)', justifyContent: 'center' }}>
              {slides[currentSlide].buttons.map((button, index) => (
                <button
                  key={index}
                  className={`btn btn-${button.type}`}
                  style={button.type === "primary" ? {} : { display: 'flex', alignItems: 'center' }}
                >
                  {button.text}
                  {button.type === "link" && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores del carrusel */}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 4, }}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? 'black' : 'grey', // Cambia el color aquí
              cursor: 'pointer',
              transition: 'background-color 0.3s ease', // Suaviza el cambio de color
            }}
          ></div>
        ))}
      </div>
    </motion.section>
  );
};

const WeDo = () => {
  const wedo = [
    {
      title: "Technology",
      description: "We leverage modern, scalable, and secure technologies — including AI and cloud solutions — to build high-performance systems that drive innovation and long-term growth.",
      icon: <Code2 size={32} />,
      color: "#0066cc"
    },
    {
      title: "Products",
      description: "We design and develop digital products focused on user experience, performance, and real business impact, transforming ideas into reliable and scalable solutions.",
      icon: <Smartphone size={32} />,
      color: "#32d74b"
    },
    {
      title: "Services",
      description: "From strategic consulting to full-cycle software development, we deliver tailored solutions that help businesses optimize processes and achieve their digital goals.",
      icon: <Users size={32} />,
      color: "#ff9f0a"
    },
    {
      title: "Team",
      description: "Our multidisciplinary team of engineers, designers, and innovators is driven by passion, collaboration, and a shared commitment to building smart digital experiences.",
      icon: <Globe size={32} />,
      color: "#af52de"
    },

  ];

  return (
    <section id="wedo" className="section">
      <div className="container">
        <h2>What We Do.</h2>
        <div className="grid-container-wedo">
          {wedo.map((wedo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card"
            >
              <div style={{ color: wedo.color, marginBottom: 'var(--space-5)' }}>{wedo.icon}</div>
              <div>
                <h3>{wedo.title}</h3>
                <p>{wedo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom enterprise solutions built with modern stacks and 15+ years of experience.",
      icon: <Code2 size={32} />,
      color: "#0066cc"
    },
    {
      title: "Mobile Apps",
      description: "Intuitive iOS and Android experiences that users love to engage with.",
      icon: <Smartphone size={32} />,
      color: "#32d74b"
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance to navigate complex technical challenges and scale your business.",
      icon: <Users size={32} />,
      color: "#ff9f0a"
    },
    {
      title: "Network Consulting",
      description: "Optimizing your infrastructure for performance, security, and global reach.",
      icon: <Globe size={32} />,
      color: "#af52de"
    },
    {
      title: "AI Integration",
      description: "We use AI to automate processes and create smarter digital experiences.",
      icon: <BrainCog size={32} />,
      color: "#9b9797"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services.</h2>
        <div className="grid-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card"
            >
              <div style={{ color: service.color, marginBottom: 'var(--space-5)' }}>{service.icon}</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Facts = () => {
  return (
    <section id="facts" className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Built on Excellence.</h2>
        <div className="stats-grid">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="stat-item"
          >
            <div className="stat-number">
              <span className="stat-prefix">+</span>
              <CountUp start={0} end={4000} duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <div className="stat-label">Programming hours / month</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="stat-item"
          >
            <div className="stat-number">
              <span className="stat-prefix">+</span>
              <CountUp start={0} end={10} duration={4} enableScrollSpy scrollSpyOnce />
            </div>
            <div className="stat-label">Apps released</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="stat-item"
          >
            <div className="stat-number">
              <span className="stat-prefix">+</span>
              <CountUp start={0} end={250} duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <div className="stat-label">Projects delivered</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => (
  <section id="clients" className="section">
    <div className="container">
      <p className="text-label" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
        TRUSTED BY LEADERS WORLDWIDE
      </p>
      <div className="logo-grid">
        {['Telefónica', 'IBM', 'YPF', 'RedHat', 'Cisco', 'Google'].map((client, index) => (
          <span key={index} style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: '#888' }}>{client}</span>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-10)' }}>
        <div className="footer-column" style={{ gridColumn: 'span 1' }}>
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <img src={logoHorizontal} alt="BowTieLabs Logo" style={{ height: '20px', filter: 'invert(var(--logo-invert))' }} />
          </div>
          <p className="text-caption">
            A passion-driven technology services company providing software and mobile application development.
          </p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-list">
            <li>Development</li>
            <li>Mobile</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Clients</li>
            <li>Contact</li>
            <li><Link to="/catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Style Guide</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect</h4>
          <ul className="footer-list">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">
        Copyright © 2026 BowTieLabs. All rights reserved.
      </div>
    </div>
  </footer>
);

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await import('@emailjs/browser').then(({ default: emailjs }) =>
        emailjs.sendForm(
          'service_nltqk9o',
          'template_vbp65fn',
          formRef.current,
          'b1CdEXmFxW5_BcszO'
        )
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-8)' }}>
      <div className="container" style={{ display: 'flex', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
        {/* Formulario */}
        <form ref={formRef} onSubmit={handleSubmit} style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Contact Us</h2>
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              style={{ width: '100%', padding: 'var(--space-3)', borderRadius: '4px', border: '1px solid var(--border-color)' }}
            />
          </div>
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              style={{ width: '100%', padding: 'var(--space-3)', borderRadius: '4px', border: '1px solid var(--border-color)' }}
            />
          </div>
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              style={{ width: '100%', padding: 'var(--space-3)', borderRadius: '4px', border: '1px solid var(--border-color)' }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'loading'}
            style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p style={{ marginTop: 'var(--space-4)', color: '#32d74b', textAlign: 'center', fontWeight: 500 }}>
              ✅ Message sent! We'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ marginTop: 'var(--space-4)', color: '#ff453a', textAlign: 'center', fontWeight: 500 }}>
              ❌ Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>

        {/* Bloque de información */}
        <div style={{ flex: 1, minWidth: '100px', padding: 'var(--space-5)', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: 'var(--space-2)' }}>Our Address Info</h3>
          <p style={{ marginBottom: 'var(--space-5)' }}>
            Eirlich 872 <br />
            Ituzaingo, Buenos Aires<br />
            B1714
          </p>
          <h3 style={{ marginBottom: 'var(--space-2)' }}>For Project Inquiries</h3>
          <p style={{ marginBottom: 'var(--space-5)' }}>
            <a href="mailto:info@bowtielabs.io" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              info@bowtielabs.io
            </a></p>
          <h3 style={{ marginBottom: 'var(--space-2)' }}>Work with Us</h3>
          <p style={{ marginBottom: 'var(--space-5)' }}>Send us your resume!<br />
            <a href="mailto:info@bowtielabs.io" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              info@bowtielabs.io
            </a>
          </p>
          <h3 style={{ marginBottom: 'var(--space-5)' }}>Follow Us</h3>
          <p style={{ display: 'flex', justifyContent: 'left', gap: 'var(--space-5)' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}><Facebook size={24} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}><Twitter size={24} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}><Linkedin size={24} /></a>
          </p>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WeDo />
      <Services />
      <Facts />
      <Clients />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
