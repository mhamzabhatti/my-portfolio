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
      image: '/certifications/crash-course-on-python.png'
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
      image: '/certifications/ai-for-everyone.png'
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
      title: 'AI Resume Analyzer & Career Assistant',
      desc: 'AI-powered system that analyzes resumes against job descriptions, generates ATS scores, and delivers professional career reports via email.',
      stack: 'n8n, OpenRouter, NVIDIA Nemotron 3 Super 120B, JavaScript, PDF Processing, HTML/CSS, Gmail',
      impact: 'Automated end-to-end resume screening with ATS scoring, skill gap analysis, and personalized career feedback for candidates and recruiters.',
      image: '/projects/ai-resume-analyzer.jpg'
    },
    {
      title: 'n8n Text to Image Generation',
      desc: 'AI workflow that turns chat prompts into images using a self-hosted n8n pipeline.',
      stack: 'n8n (Self-Hosted), HTTP Request Nodes, OpenRouter, Hugging Face Inference Router, FLUX.1-schnell (via fal-ai), REST APIs',
      impact: 'Built an end-to-end prompt-to-image pipeline with OpenRouter and FLUX.1-schnell.',
      image: '/projects/n8n-text-to-image.png'
    },
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
      title: 'FizzPop',
      desc: 'Modern soda brand ordering website with flavor selection, dark-themed UI, and smooth interactive ordering flow.',
      stack: 'HTML, CSS, JavaScript, Responsive Design',
      impact: 'Delivered a polished e-commerce concept with engaging product presentation and intuitive checkout experience.',
      image: '/projects/fizzpop-website.png'
    },
    {
      title: 'NEXUS Voice Assistant',
      desc: 'Desktop voice assistant application with AI-powered responses, quick actions panel, and voice recording capabilities.',
      stack: 'Python, Speech Recognition, AI Integration, GUI',
      impact: 'Built a fully functional voice-controlled assistant with real-time conversational AI and system automation.',
      image: '/projects/nexus-voice-assistant.png'
    },
    {
      title: 'CityMind',
      desc: 'Intelligent city management simulation OS with 3D visualization, crime heatmaps, and emergency route planning.',
      stack: 'Python, Data Visualization, Simulation, 3D Rendering',
      impact: 'Developed an interactive urban planning tool with real-time statistics, risk analysis, and multi-layer city views.',
      image: '/projects/citymind-management-os.png'
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

  const experiences = [
    {
      title: 'KDD Lab FAST NUCES',
      org: 'Knowledge Discovery & Data Science Lab',
      domain: 'Digital Image Processing',
      duration: '6 Weeks',
      image: '/experiences/kdd-lab-fast-nuces.png'
    },
    {
      title: 'Arch Technologies',
      org: "Pakistan's Digital AI Training Platform",
      domain: 'Python Developer',
      duration: '8 Weeks',
      image: '/experiences/arch-technologies.png'
    },
    {
      title: 'Software Productivity Strategists',
      org: 'NSTP',
      domain: 'Frontend Web Development',
      duration: '4 Weeks',
      image: '/experiences/sps-nstp.png'
    }
  ];

  const skills = [
    'n8n',
    'Automation',
    'AI Agents',
    'Python',
    'Machine Learning',
    'C++',
    'Java',
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
    { value: '16+', label: 'Completed Projects' },
    { value: '5', label: 'Certifications Earned' },
    { value: '17+', label: 'Tech Skills' },
    { value: '5+', label: 'Languages & Frameworks Mastered' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const staggerContainerFast = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07
      }
    }
  };

  return (
    <div className="portfolio-shell">
      <div className="neon-orb neon-orb-cyan" />
      <div className="neon-orb neon-orb-pink" />

      <main className="portfolio-content">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            • Computer Scientist • Software Engineer • AI Builder • FAST NUCES
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
          >
            Muhammad Hamza Bhatti
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Building robust software, immersive games, and intelligent systems with a product mindset.
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/muhammad-hamza-bhatti-5b9913303/recent-activity/all/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map(function (stat) {
            return (
              <motion.article
                key={stat.label}
                className="card glow-border"
                variants={scaleIn}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h2 className="stat-value">{stat.value}</h2>
                <p className="muted-text">{stat.label}</p>
              </motion.article>
            );
          })}
        </motion.section>

        <motion.section
          className="split-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.article
            className="card about-card glow-border"
            variants={fadeLeft}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2>About</h2>
            <p>
              I am currently in my 5th semester of a Computer Science degree at FAST NUCES Islamabad, focused on modern web apps, AI-driven products, and performance-oriented systems. I enjoy turning ideas into usable products that look sharp and scale well. Through rigorous coursework and hands-on projects, I have developed a strong foundation in full-stack development and intelligent systems. I am always eager to adopt emerging technologies and deliver impactful digital experiences that solve real-world problems.
            </p>
          </motion.article>

          <motion.article
            className="card skills-card glow-border"
            variants={fadeRight}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <h2>Core Skills</h2>
            <motion.div
              className="chip-wrap"
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map(function (skill) {
                return (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    variants={scaleIn}
                    transition={{ duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.article>
        </motion.section>

        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="section-head">
            <h2>Featured Projects</h2>
          </div>
          <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {projects.map(function (project) {
              return (
                <motion.article
                  key={project.title}
                  className="card project-card glow-border"
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
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
          </motion.div>
        </motion.section>

        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="section-head">
            <h2>Experience</h2>
          </div>
          <motion.div
            className="cert-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map(function (exp) {
              return (
                <motion.article
                  key={exp.title}
                  className="card cert-card glow-border"
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="exp-image-wrap">
                    <img className="exp-image" src={exp.image} alt={exp.title} loading="lazy" />
                    <span className="cert-badge">Experience</span>
                  </div>
                  <h3>{exp.title}</h3>
                  <p className="cert-org">{exp.org}</p>
                  <p className="muted-text">{exp.domain}</p>
                  <div className="cert-meta">
                    <span>{exp.duration}</span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.section>

        <motion.section
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="section-head">
            <h2>Certifications</h2>
          </div>
          <motion.div
            className="cert-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {certifications.map(function (cert) {
              return (
                <motion.article
                  key={cert.title}
                  className="card cert-card glow-border"
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
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
          </motion.div>
        </motion.section>

        <motion.section
          className="cta-band glow-border"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>Let us build something exceptional</h2>
          <p className="muted-text">Available for internships, freelance work, and high-impact collaborations.</p>
        </motion.section>

        <motion.footer
          className="footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>Made by Muhammad Hamza Bhatti</span>
          <span>mhb786.tech@gmail.com</span>
        </motion.footer>
      </main>
    </div>
  );
}

export default Portfolio;