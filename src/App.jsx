import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function Portfolio() {
  const certifications = [
    {
      title: 'Programming for Everybody (Getting Started with Python)',
      org: 'University of Michigan',
      date: 'Jul 25, 2025',
      desc: 'Built a strong base in Python fundamentals and problem-solving.',
      credential: 'Q2HGZF0S3QSI',
      image: '/certifications/programming-for-everybody.png'
    },
    {
      title: 'AI for Everyone',
      org: 'DeepLearning.AI',
      date: 'Jul 3, 2025',
      desc: 'Understood AI product thinking and practical adoption strategy.',
      credential: 'JUUBTLVTS36L',
      image: '/certifications/ai-for-everyone.png'
    },
    {
      title: 'AI Python for Beginners',
      org: 'DeepLearning.AI',
      date: 'Jul 10, 2025',
      desc: 'Created hands-on AI projects with Python workflows.',
      credential: 'WRFZ72P0D2FX',
      image: '/certifications/ai-python-for-beginners.png'
    },
    {
      title: 'Crash Course on Python',
      org: 'Google',
      date: 'Jul 19, 2025',
      desc: 'Practiced automation scripts and production-oriented coding habits.',
      credential: '9JQ4FC0COLM',
      image: '/certifications/crash-course-on-python.png'
    },
    {
      title: 'Python for Data Analysis: Pandas & NumPy',
      org: 'Coursera Project Network',
      date: 'Jul 2, 2025',
      desc: 'Worked with data pipelines using NumPy and Pandas.',
      credential: 'EX8YVWWKS4FB',
      image: '/certifications/python-data-analysis.png'
    }
  ];
  
  const projects = [
    {
      title: 'AI Doctor Recommendation',
      desc: 'Smart medical recommendation concept powered by AI decision logic.',
      stack: 'Python, AI Models, Data Processing',
      impact: 'Prototyped explainable recommendation flows for health-related queries.',
      image: '/projects/ai-doctor-recommendation.png'
    },
    {
      title: 'Jarvis Assistant',
      desc: 'Python voice assistant for command execution, reminders, and productivity tasks.',
      stack: 'Python, Speech Recognition, Automation',
      impact: 'Reduced repetitive workflows by automating desktop actions.',
      image: '/projects/jarvis-assistant.png'
    },
    {
      title: 'Student Registration System',
      desc: 'Desktop app with Tkinter and CustomTkinter for streamlined student workflows.',
      stack: 'Python, Tkinter, CustomTkinter',
      impact: 'Enabled faster student record operations through an intuitive GUI.',
      image: '/projects/student-registration-system.png'
    },
    {
      title: 'Community Healthcare Hub',
      desc: 'Responsive platform delivering local healthcare information and service discovery.',
      stack: 'HTML, CSS, JavaScript, Responsive UI',
      impact: 'Improved usability for mobile-first access to healthcare resources.',
      image: '/projects/community-healthcare-hub.png'
    },
    {
      title: 'Sonic Classic Heroes',
      desc: 'Advanced gameplay prototype with physics, checkpoints, and level progression.',
      stack: 'C++, SFML, Game Physics',
      impact: 'Designed modular systems for movement, maps, and interactive entities.',
      image: '/projects/sonic-classic-heroes.png'
    },
    {
      title: 'Buzz Bomber Game',
      desc: '2D C++ SFML game featuring collisions, enemy states, and smooth animations.',
      stack: 'C++, SFML, OOP',
      impact: 'Implemented state-driven gameplay logic and polished sprite interactions.',
      image: '/projects/buzz-bomber-game.png'
    },
        
    {
  title: 'Super Mario (x86 Assembly)',
  desc: 'Low-level implementation of a classic side-scrolling platformer using x86 Assembly, focusing on direct hardware interaction and memory control.',
  stack: 'x86 Assembly, NASM/MASM, VGA Graphics, Interrupts',
  impact: 'Demonstrated deep understanding of low-level programming, game loops, sprite rendering, and keyboard input handling without high-level abstractions.',
  image: '/projects/super-mario-assembly.png'
}
  ];

  const skills = [
    'Python',
    'C++',
    'Java',
    'Machine Learning',
    'Tkinter',
    'CustomTkinter',
    'React',
    'JavaScript',
    'SFML',
    'Assembly x86',
    'Data Analysis',
    'Data Cleaning',
    'Prompt Engineering',
    'UI Engineering'

  ];

  const stats = [
    { value: '12+', label: 'Completed Projects' },
    { value: '5+', label: 'Professional Certifications' },
    { value: '4+', label: 'Core Technical Domains' },
    { value: '14+', label: 'Production-Ready Skills' },
  ];

  return (
    <div className="portfolio-shell">
      <div className="neon-orb neon-orb-cyan" />
      <div className="neon-orb neon-orb-pink" />

      <main className="portfolio-content">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">• Computer Scientist • Software Engineer • AI Builder • FAST NUCES</div>
          <h1 className="hero-title">Muhammad Hamza Bhatti</h1>
          <p className="hero-subtitle">
            Building robust software, immersive games, and intelligent systems with a product mindset.
          </p>

          <div className="hero-cta-row">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/muhammad-hamza-bhatti-5b9913303/recent-activity/all/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.section>

        <section className="stats-grid">
          {stats.map(function(stat) {
            return (
              <article key={stat.label} className="card glow-border">
                <h2 className="stat-value">{stat.value}</h2>
                <p className="muted-text">{stat.label}</p>
              </article>
            );
          })}
        </section>

        <section className="split-layout">
          <article className="card about-card glow-border">
            <h2>About</h2>
            <p>
              I am currently a 4th semester Computer Science student at FAST NUCES Islamabad, focused on modern web apps, AI-driven products, and performance-oriented systems.
              I enjoy turning complex technical ideas into usable products that look sharp and scale well.
            </p>
          </article>

          <article className="card skills-card glow-border">
            <h2>Core Skills</h2>
            <div className="chip-wrap">
              {skills.map(function(skill) {
                return <span key={skill} className="skill-chip">{skill}</span>;
              })}
            </div>
          </article>
        </section>

        <section className="section-block">
          <div className="section-head">
            <h2>Featured Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map(function(project) {
              return (
                <motion.article
                  key={project.title}
                  className="card project-card glow-border"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className="project-image-wrap">
                    <img className="project-image" src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="muted-text">{project.desc}</p>
                    <p className="detail-line"><span>Stack:</span> {project.stack}</p>
                    <p className="detail-line"><span>Impact:</span> {project.impact}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <h2>Certifications</h2>
          </div>
          <div className="cert-grid">
            {certifications.map(function(cert) {
              return (
                <motion.article
                  key={cert.title}
                  className="card cert-card glow-border"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="cert-image-wrap">
                    <div className="cert-image" style={{ backgroundImage: `url(${cert.image})` }}>
                      <span className="cert-badge">Certificate</span>
                    </div>
                  </div>
                  <h3>{cert.title}</h3>
                  <p className="cert-org">{cert.org}</p>
                  <p className="muted-text">{cert.desc}</p>
                  <div className="cert-meta">
                    <span>{cert.date}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="cta-band glow-border">
          <h2>Let us build something exceptional</h2>
          <p className="muted-text">Available for internships, freelance work, and high-impact collaborations.</p>
        </section>

        <footer className="footer">
          <span>Made by Muhammad Hamza Bhatti</span>
          <span>mhb786.tech@gmail.com</span>
        </footer>
      </main>
    </div>
  );
}

export default Portfolio;