import React from 'react';
import { LinkedInIcon, GitHubIcon, MailIcon } from '../components/Icons.jsx'

const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="section-inner" style={{ width: '100%' }}>
        <p className="section-label">Contact</p>
        <h2 className="contact-headline">Open to Data/ML engineering roles and interesting hard problems.</h2>
        <p className="contact-sub">
          Especially interested in roles at the intersection of production systems and deep learning - where the model is only part of the challenge.
        </p>
        <div className="contact-links">
          <a href="mailto:oriol.soldevilag@gmail.com" className="clink">
            <MailIcon />
            oriol.soldevilag@gmail.com
          </a>
          <a href="https://github.com/soldee" className="clink" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            github.com/soldee
          </a>
          <a href="https://linkedin.com/in/oriol-soldevila-gargallo" className="clink" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            linkedin.com/in/oriol-soldevila-gargallo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;