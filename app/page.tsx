"use client";

import { motion } from "framer-motion";

const portfolioUrl = "https://sumityadavportfolio1.netlify.app/";
const githubUrl = "https://github.com/sumityadav292";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Sumit Yadav home">
          SY<span>.</span>
        </a>
        <span className="nav-note"><span className="status-dot" /> Official personal website</span>
        <a className="nav-link" href={portfolioUrl} target="_blank" rel="noreferrer">
          View portfolio <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="home" aria-labelledby="main-heading">
        <motion.div
          className="orb-stage"
          initial={{ opacity: 0, scale: 0.82, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="orb-halo" />
          <div className="orb">
            <div className="orb-shine" />
            <div className="orb-line orb-line-one" />
            <div className="orb-line orb-line-two" />
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="orb-spark spark-one" />
          <span className="orb-spark spark-two" />
        </motion.div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="eyebrow"><span /> A PERSONAL INTRODUCTION</p>
          <h1 id="main-heading">Sumit <span>Yadav</span></h1>
          <p className="hero-subtitle">Web Developer · Creator · Lifelong Learner</p>
          <p className="hero-description">
            Welcome to my official website. I build modern web experiences with
            React.js and JavaScript, and enjoy turning ideas into useful digital products.
          </p>

          <div className="actions">
            <a className="button button-primary" href={portfolioUrl} target="_blank" rel="noreferrer">
              Explore My Portfolio <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub Profile <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="skill-row" aria-label="Areas of focus">
            <span>React.js</span><i />
            <span>JavaScript</span><i />
            <span>MERN Stack</span>
          </div>
        </motion.div>
      </section>

      <section className="identity-strip" aria-label="About Sumit Yadav">
        <div>
          <span className="strip-label">ABOUT</span>
          <p>Computer Science & Engineering graduate, 2026</p>
        </div>
        <div>
          <span className="strip-label">FOCUS</span>
          <p>Frontend and full-stack web development</p>
        </div>
        <div>
          <span className="strip-label">DESTINATION</span>
          <p>Your next stop is my portfolio</p>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-name" href="#home">Sumit Yadav<span>.</span></a>
        <p>Official personal website · Built for the web</p>
        <a href={portfolioUrl} target="_blank" rel="noreferrer">Visit portfolio ↗</a>
      </footer>
    </main>
  );
}
