import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rocket,
  ServerCog,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'mulletilokesh.m@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mulletilokesh.m@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 7095498739',
    href: 'tel:+917095498739',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/lokesh-mulleti',
    href: 'https://www.linkedin.com/in/lokesh-mulleti',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Lokesh-mulleti',
    href: 'https://github.com/Lokesh-mulleti',
    icon: Github,
  },
];

const navItems = ['Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const skillGroups = [
  { title: 'Languages', icon: Code2, items: ['Python', 'JavaScript', 'Java', 'C++', 'HTML5', 'CSS3'] },
  { title: 'Frameworks', icon: ServerCog, items: ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'React Native'] },
  { title: 'Databases', icon: Database, items: ['MongoDB', 'MySQL'] },
  { title: 'Cloud & DevOps', icon: Cloud, items: ['AWS EC2', 'AWS S3', 'Lambda', 'Azure', 'Google Cloud', 'Git', 'Jenkins', 'CI/CD'] },
  { title: 'ML & AI', icon: Sparkles, items: ['Scikit-learn', 'NLTK', 'Pandas', 'NumPy', 'Deep Learning', 'Computer Vision', 'Logistic Regression', 'SVM'] },
];

const projects = [
  {
    name: 'NailAI',
    type: 'Nail Disease Detection App',
    meta: 'Team Project',
    tech: ['React Native', 'Python', 'Deep Learning', 'MySQL'],
    summary:
      'Android application that detects nail diseases from photos using a custom CNN model, with a React Native frontend, Flask API, and MySQL result storage.',
  },
  {
    name: 'Student Skill Finder',
    type: 'Developer Portal',
    meta: 'Team Project',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API'],
    summary:
      'Full-stack portal for searching and filtering students by technical skills, project domains, and availability using indexed MongoDB queries.',
  },
  {
    name: 'Sentiment Analysis',
    type: 'ML Model',
    meta: 'Individual Project',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF'],
    summary:
      'Compared Logistic Regression and SVM classifiers across text datasets, using cross-validation, precision, recall, F1, and confusion matrices.',
  },
  {
    name: 'Netflix Clone',
    type: 'Streaming UI',
    meta: 'Individual Project',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    summary:
      'Responsive streaming interface with dynamic carousels, search, content modals, hooks, context state, and third-party movie API integration.',
  },
  {
    name: 'Personal Portfolio',
    type: 'Responsive Developer Portfolio',
    meta: 'Individual Project',
    tech: ['React.js', 'Vite', 'CSS3', 'Responsive Design'],
    summary:
      'Built a modern, device-friendly portfolio website from resume content with polished sections for skills, experience, projects, education, contact links, theme switching, and resume download.',
  },
];

const certifications = [
  'AWS Academy Cloud Foundations - Amazon Web Services',
  'Data Analytics Essentials - Cisco Networking Academy',
  'Certified System Administrator - ServiceNow',
  'HTML, CSS, JavaScript & Bootstrap - Udemy',
];

const achievements = [
  'Finalist in Shastra 1.0 Coding Challenge among top competitive programming participants.',
  'Completed a 6-day Integrative AI in Web Application Development workshop by Mentorly.',
  'Volunteer for Kreya Fest, leading promotion and logistics coordination for a college-wide technical festival.',
];

function useTheme() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Lokesh Mulleti home">
        <span>LM</span>
      </a>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle color theme"
          title="Toggle color theme"
        >
          {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          title="Menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Developer workstation visual">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid">
        <div className="code-window">
          <span className="line wide" />
          <span className="line medium" />
          <span className="line small" />
          <span className="line medium accent" />
          <span className="line wide" />
        </div>
        <div className="metric-panel">
          <strong>AI</strong>
          <span>model pipeline</span>
          <div className="signal-bars">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="phone-panel">
          <span />
          <b />
          <b />
          <b />
        </div>
        <div className="cloud-panel">
          <Cloud size={34} />
          <span>AWS / Azure / GCP</span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Developer / ML-AI Engineer / Cloud Learner</p>
            <h1>Lokesh Mulleti</h1>
            <p className="hero-summary">
              Final-year Computer Science student building scalable web, mobile, machine learning, and cloud
              applications with the MERN stack, Python frameworks, and deep learning pipelines.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View Projects <ChevronRight size={18} />
              </a>
              <a className="secondary-button" href="/Lokesh_Mulleti_Resume.pdf" download>
                <Download size={18} /> Resume
              </a>
            </div>
            <div className="hero-meta" aria-label="Location and availability">
              <span>
                <MapPin size={16} /> Eluru, Andhra Pradesh, India
              </span>
              <span>
                <Rocket size={16} /> Open to software, ML, full-stack, and cloud roles
              </span>
            </div>
            <div className="hero-stats" aria-label="Portfolio highlights">
              <span>
                <strong>5</strong>
                Featured projects
              </span>
              <span>
                <strong>5+</strong>
                Core tech areas
              </span>
              <span>
                <strong>7.9</strong>
                Current CGPA
              </span>
            </div>
          </div>
          <HeroVisual />
        </section>

        <section className="contact-strip" aria-label="Contact links">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon size={18} />
              <span>{value}</span>
            </a>
          ))}
        </section>

        <section id="skills" className="page-section">
          <SectionHeader eyebrow="Technical Skills" title="A practical stack for product-building">
            Comfortable across frontend, backend, ML workflows, cloud foundations, and deployment pipelines.
          </SectionHeader>
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article className="skill-card" key={title}>
                <div className="card-title">
                  <Icon size={21} />
                  <h3>{title}</h3>
                </div>
                <div className="tag-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="page-section band">
          <SectionHeader eyebrow="Experience" title="Machine learning internship">
            IBM SkillsBuild internship focused on sentiment analysis, model comparison, and performance reporting.
          </SectionHeader>
          <article className="timeline-item">
            <div className="timeline-marker">
              <BriefcaseBusiness size={22} />
            </div>
            <div>
              <div className="timeline-heading">
                <h3>Machine Learning Intern</h3>
                <span>IBM SkillsBuild / 2024</span>
              </div>
              <ul>
                <li>Designed sentiment analysis pipelines with Logistic Regression and SVM models on 100+ labelled datasets.</li>
                <li>Built preprocessing workflows with NLTK, TF-IDF vectorisation, tokenisation, stopword removal, and lemmatisation.</li>
                <li>Benchmarked Naive Bayes, Logistic Regression, and SVM to select stronger F1-score configurations.</li>
                <li>Documented evaluation metrics and deployment recommendations using Pandas, Matplotlib, and structured reporting.</li>
              </ul>
            </div>
          </article>
        </section>

        <section id="projects" className="page-section">
          <SectionHeader eyebrow="Projects" title="Selected builds">
            Project work across mobile AI, developer discovery, ML classification, and responsive React interfaces.
          </SectionHeader>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span>{project.meta}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{project.name}</h3>
                <p className="project-type">{project.type}</p>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="page-section split-section">
          <div>
            <SectionHeader eyebrow="Education" title="B.Tech in Computer Science & Engineering" />
            <article className="education-panel">
              <GraduationCap size={24} />
              <div>
                <h3>Ramachandra College of Engineering</h3>
                <p>2022 - 2026 / CGPA: 7.9 / 10</p>
                <p>Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Machine Learning, Software Engineering.</p>
              </div>
            </article>
          </div>
          <div>
            <SectionHeader eyebrow="Credentials" title="Certifications & activities" />
            <div className="compact-list">
              {certifications.map((item) => (
                <span key={item}>
                  <Award size={17} /> {item}
                </span>
              ))}
            </div>
            <div className="achievement-list">
              {achievements.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="closing-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let's build something useful.</h2>
            <p>
              I'm interested in software engineering, ML/AI engineering, full-stack development, and cloud architecture roles.
            </p>
          </div>
          <a className="primary-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=mulletilokesh.m@gmail.com">
            <Mail size={18} /> Send Email
          </a>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
