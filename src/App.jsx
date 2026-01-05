import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Users,
  Globe,
  ChevronRight
} from 'lucide-react';
import './App.css';
import logoHorizontal from './assets/logo-horizontal.png';
import heroImage from './assets/hero-keyboard.jpg';

const Navbar = () => (
  <nav className="navbar glass">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <img src={logoHorizontal} alt="BowTieLabs Logo" style={{ height: '24px', filter: 'invert(var(--logo-invert))' }} />
      <div style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--text-xs)', fontWeight: 400 }}>
        <a href="#services">Services</a>
        <a href="#facts">Facts</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="heading-xl">Engineering the Future of Technology.</h1>
        <p style={{ fontSize: 'var(--text-xl)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
          Passion-driven solutions for software development, mobile apps, and technical consulting.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-5)', justifyContent: 'center' }}>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-link">
            Learn more <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}
    />
  </section>
);

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
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>What We Do.</h2>
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

const Facts = () => (
  <section id="facts" className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Built on Excellence.</h2>
      <div className="stats-grid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="stat-number">4000+</div>
          <div className="stat-label">Programming hours / month</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-number">250+</div>
          <div className="stat-label">Projects delivered</div>
        </motion.div>
      </div>
    </div>
  </section>
);

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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-10)' }}>
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
            <li onClick={() => window.location.href = '/catalog'}>Style Guide</li>
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Facts />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
