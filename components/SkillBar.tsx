'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="py-24 bg-surface"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            Über mich
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full bg-accent"
          ></div>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-text opacity-70">
            Integration trifft Effizienz: Daten, Prozesse und Systeme – intelligent
            verbunden.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <Image
                  src="/images/dn.jpg"
                  alt="Dominik Notzon"
                  width={320}
                  height={320}
                  className="object-cover rounded-2xl relative z-10 border-4 border-white shadow-lg"
                />
                <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white bg-opacity-15 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-text">
                Erfahrung & Expertise
              </h3>
              <p className="text-xl leading-relaxed mb-8 text-text opacity-80">
                Über 10 Jahre Projekterfahrung in internationalen Integrations-,
                APEX- und Cloud‑Umgebungen. Fokus auf API‑Architekturen,
                Boomi/MuleSoft‑Integrationen und datenbankzentrierte
                Webanwendungen mit Oracle APEX.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold mb-2 text-accent">
                  10+
                </div>
                <div className="text-sm font-medium text-text">
                  Jahre Erfahrung
                </div>
              </div>
              {/* Add more stats cards here as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay?: number;
}

const ContactItem = ({ icon, title, content, delay = 0 }: ContactItemProps) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center"
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-accent">
      {icon}
    </div>
    <div>
      <p className="font-medium text-text">{title}</p>
      <p className="text-text">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-text"
            id="contact-title"
          >
            Kontakt
          </h2>
          <div className="w-20 h-1 mx-auto rounded bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-text">
              Lassen Sie uns sprechen
            </h3>
            <p className="text-lg mb-8 text-text">
              Projektidee oder Beratungsbedarf? Ich freue mich auf Ihre Nachricht.
            </p>
            <div className="space-y-4">
              <ContactItem
                icon={
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="E‑Mail"
                content="dn@notzon-it.de"
                delay={0.3}
              />
              <ContactItem
                icon={
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                title="Standort"
                content="Unna, Deutschland"
                delay={0.4}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-lg bg-surface"
          >
            <a
              href="mailto:dn@notzon-it.de"
              className="w-full py-3 px-6 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center block bg-accent"
            >
              E-Mail schreiben
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <p>© {currentYear} Dominik Notzon – IT Consulting. Alle Rechte vorbehalten.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/dominik-notzon-20570a185/"
              target="_blank"
              className="text-white hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.xing.com/profile/Dominik_Notzon4"
              target="_blank"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Xing
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-block p-1 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 15.9 11 17 11V20C17 21.1 16.1 22 15 22H9C7.9 22 7 21.1 7 20V11C8.1 11 9 10.1 9 9V7H3V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Dominik Notzon
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8 font-light tracking-wide"
            >
              Senior IT Consultant · Integration (Boomi & MuleSoft) · Oracle APEX
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light opacity-95"
            >
              Ich verbinde Systeme, Daten und Prozesse – mit skalierbaren
              Integrationen und maßgeschneiderten APEX‑Applikationen, die produktiv
              machen.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="#contact"
                className="group px-10 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                <span className="flex items-center justify-center">
                  Kontakt aufnehmen
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="#portfolio"
                className="px-10 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Projekte ansehen
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Über mich' },
    { href: '#services', label: 'Leistungen' },
    { href: '#portfolio', label: 'Projekte' },
    { href: '#publications', label: 'Publikationen' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-primary">
            Dominik Notzon
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-white border-t`}
      >
        <div className="px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
  hoverColor: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  icon,
  gradient,
  hoverColor,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
        <div
          className={`h-56 ${gradient} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10 text-white">{icon}</div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-white bg-opacity-15 rounded-full"></div>
        </div>
        <div className="p-8">
          <h3
            className={`text-2xl font-bold mb-4 text-text group-hover:${hoverColor} transition-colors`}
          >
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium rounded-full bg-accent text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Legacy‑ERP → SAP Migration',
      description:
        'Großhandel: APEX‑gestützte Aufbereitung & Verteilung der Daten via REST an Umsysteme.',
      tags: ['SAP', 'Oracle APEX', 'REST'],
      gradient: 'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700',
      hoverColor: 'text-blue-600',
      icon: (
        <svg
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Insurance Integration Hub',
      description:
        'Salesforce, SAP & Oracle über Boomi verbunden. MDM‑Hub und API‑Management.',
      tags: ['Boomi', 'Salesforce', 'MDM'],
      gradient: 'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700',
      hoverColor: 'text-green-600',
      icon: (
        <svg
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
    {
      title: 'Biometrie Border Control',
      description:
        'Einreise‑Kontrollsystem mit Gesicht & Fingerabdruck, REST‑Anbindungen an Drittsysteme.',
      tags: ['APEX', 'REST', 'Biometrie'],
      gradient: 'bg-gradient-to-br from-purple-500 via-violet-600 to-pink-700',
      hoverColor: 'text-purple-600',
      icon: (
        <svg
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-text"
            id="portfolio-title"
          >
            Projekte
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-accent"></div>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-text opacity-70">
            Ausgewählte Referenzen aus Großhandel, Versicherung, Biometrie &
            Retail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PublicationCardProps {
  title: string;
  description: string;
  year: string;
  gradient: string;
  hoverBorder: string;
  hoverText: string;
  icon: React.ReactNode;
  delay?: number;
}

const PublicationCard = ({
  title,
  description,
  year,
  gradient,
  hoverBorder,
  hoverText,
  icon,
  delay = 0,
}: PublicationCardProps) => {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer"
    >
      <div
        className={`${gradient} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-gray-100 ${hoverBorder}`}
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-accent">
            {icon}
          </div>
          <span className="text-sm font-medium text-accent">
            {year}
          </span>
        </div>
        <h3
          className={`text-xl font-bold mb-3 text-text group-hover:${hoverText} transition-colors`}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center text-sm font-medium text-accent">
          Artikel lesen
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </motion.article>
  );
};

const Publications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const publications = [
    {
      title: 'API‑Led Integration Patterns',
      description:
        'Best Practices für skalierbare Integrationsarchitekturen mit Boomi & MuleSoft.',
      year: '2025',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      hoverBorder: 'group-hover:border-blue-200',
      hoverText: 'text-blue-600',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'APEX Performance Tuning',
      description:
        'Von ORDS bis SQL‑Plan: pragmatische Schritte für schnelle APEX‑Apps.',
      year: '2025',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
      hoverBorder: 'group-hover:border-green-200',
      hoverText: 'text-green-600',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
    {
      title: 'RPA im Mittelstand',
      description:
        'Wie UiPath wiederkehrende Aufgaben abnimmt – mit Fokus auf ROI und Governance.',
      year: '2024',
      gradient: 'bg-gradient-to-br from-purple-50 to-violet-50',
      hoverBorder: 'group-hover:border-purple-200',
      hoverText: 'text-purple-600',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="publications" className="py-16 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="publications-title"
            className="text-3xl md:text-4xl font-bold mb-4 text-text"
          >
            Neueste Publikationen
          </h2>
          <p className="text-lg text-text opacity-70">
            Insights zu Integration, APEX und API‑Architektur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <PublicationCard key={pub.title} {...pub} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="card-hover p-6 rounded-lg border bg-surface border-[#e5e7eb]"
    >
      <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-text">{title}</h3>
      <p className="text-text">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: 'Integrationsarchitektur',
      description:
        'API‑Design (REST/SOAP), Datenflussmodellierung, Boomi & MuleSoft, Master‑Data‑Hub.',
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2z"
          />
        </svg>
      ),
    },
    {
      title: 'Oracle APEX Development',
      description:
        'Datenbankzentrierte Web‑Apps, PL/SQL, Reporting, Performance‑Tuning, ORDS.',
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
    {
      title: 'RPA & Workflow',
      description:
        'UiPath‑Automatisierung, digitale Genehmigungen, Monitoring & Audit.',
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: 'Security & Performance',
      description:
        'APEX‑ & DB‑Tuning, Anwendungssicherheit, Observability und Best Practices.',
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Beratung & Schulung',
      description:
        'Architektur‑Reviews, Enablement für Fachbereiche, Workshops zu Boomi/APEX.',
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-text"
            id="services-title"
          >
            Leistungen
          </h2>
          <div className="w-20 h-1 mx-auto rounded bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = requestAnimationFrame(() => {
        setWidth(percentage);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [inView, percentage]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg" ref={ref}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-lg text-text">
          {name}
        </span>
        <span className="font-bold text-accent">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
