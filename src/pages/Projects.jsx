import React, { useState, useEffect } from 'react';

const mlProjects = [
  {
    title: "F2000 — Brain vein segmentation",
    lang: "Python",
    desc: `
    End-to-end SWI MRI pipeline that won our team first place in the BioMedical Imaging hackathon: Frangi multiscale vesselness filtering, dual-criterion adaptive thresholding, 
    atlas-based regional mapping across 32 sub-territories. 
    Streamlit dashboard with 3D inspection and automated PDF reports.
    `,
    metric: <><strong>~10 hrs</strong> manual work down to <strong>&lt;5 min</strong></>,
    link: "https://www.linkedin.com/posts/josep-munuera-89943463_biomedicalimaging-medicalimaging-ai-ugcPost-7465864348255703040-asnk/",
    images: ["/F2000_vein_segmentator_1.png", "/F2000_vein_segmentator_2.png", "/F2000_vein_segmentator_3.png", "/F2000_vein_segmentator_4.png"] 
  },
  {
    title: "LoRA fine-tuning — speech commands",
    lang: "PyTorch",
    desc: "Low-Rank Adaptation (rank 8) across all attention projections of wav2vec 2.0 - training only 0.83% of parameters. Waveform augmentation pipeline, layer selection via linear probes, confusion and noise-robustness analysis.",
    metric: <>Kaggle <strong>98.85%</strong> · baseline <strong>94.49%</strong></>,
    link: "",
    images: ["wav2vec.png"]
  },
  {
    title: "Language identification — 235 languages",
    lang: "PyTorch",
    desc: "BiLSTM with BPE tokenisation and attention pooling. Evolved through 8 model iterations with data augmentation and early stopping. Includes per-language error analysis and confusion taxonomy.",
    metric: <>Acc <strong>95.86%</strong> · baseline <strong>93.51%</strong></>,
    link: ""
  },
  {
    title: "Spoken digit recognition — DTW & wav2vec",
    lang: "Python",
    desc: "Classical DTW with MFCC vs. frozen wav2vec 2.0 features. Full sweep of all 12 transformer layers, cepstral normalisation strategies, and distance metrics. Best: CMVN + sqEuclidean DTW on layer 6.",
    metric: <>Val error <strong>15.8%</strong> · baseline <strong>57.7%</strong></>,
    link: ""
  },
  {
    title: "Non-causal language modelling",
    lang: "PyTorch",
    desc: "6-model study for masked word prediction in Catalan. Best: 6-layer pre-norm transformer, 8-head attention, dim 512, shared embeddings, AMP training, and LR warmup on Wikipedia + El Periódico.",
    metric: <>Acc <strong>38.9%</strong> · baseline <strong>33.4%</strong></>,
    link: ""
  },
  {
    title: "Word embeddings — CBOW on Catalan",
    lang: "PyTorch",
    desc: "CBOW with three position-weighting strategies on a 100k-token Catalan corpus. Analogy tasks, gender bias analysis, and t-SNE visualisation of the learned embedding space.",
    metric: "100k token vocabulary",
    link: ""
  },
  {
    title: "Computer vision labs",
    lang: "Python",
    desc: "5 labs: line detection, feature correspondences, fundamental matrix estimation, transfer learning for image classification, and semantic segmentation with deep networks.",
    metric: "5 labs · OpenCV + PyTorch",
    link: ""
  }
];

const systemProjects = [
  {
    title: "Redis",
    lang: "Go",
    desc: "RESP protocol parsing, key-value store, TTL expiry, RDB persistence, and replication. Currently extending to Redis Cluster with hash slot sharding.",
    metric: "TCP · RESP · Persistence · Replication",
    link: "https://github.com/soldee/codecrafters-redis-go"
  },
  {
    title: "DNS server",
    lang: "Go",
    desc: "Recursive DNS resolver from scratch: binary message parsing, question/answer/authority sections, UDP socket handling, and iterative resolution across authoritative nameservers.",
    metric: "UDP · Binary parsing · Recursive",
    link: "https://github.com/soldee/codecrafters-dns-server"
  },
  {
    title: "HTTP server",
    lang: "C++",
    desc: "HTTP/1.1 server in C++: TCP socket management, request parsing, response building, static file serving, and concurrent connection handling.",
    metric: "TCP · HTTP/1.1 · Concurrency",
    link: "https://github.com/soldee/http-server-cpp"
  },
  {
    title: "Shell",
    lang: "C",
    desc: "POSIX shell in C: command parsing, built-in commands (cd, echo, pwd, type, exit), PATH resolution, process forking with execve, and I/O redirection.",
    metric: "POSIX · execve · I/O redirection",
    link: "https://github.com/soldee/codecrafters-shell-c"
  }
];

const volunteerProjects = [
  {
    title: "Hospital Management System — Yassa (Douala), Cameroon",
    lang: "Infra",
    desc: `
    Led a digital transformation project for St John of God Hospital under AUCOOP (Associació d'Universitaris per a la Cooperació). 
    Designed and installed a hospital-wide network architecture from scratch and configured core infrastructure deployments on-site.
    `,
    metric: "AUCOOP",
    link: "https://aucoop.upc.edu/sant-joan-de-deu-a-camerun-26/",
    images: ["/stjeandieu_1.jpeg"]
  },
  {
    title: "XPRIZE Rainforest: Aerial Relay Communication System (BSc Thesis)",
    desc: `
    Engineered a remote communication architecture for the XPRIZE Rainforest competition to establish reliable data links 
    between deep-forest sensors and base camps. Conducted a comparative empirical analysis of LoRa and IEEE 802.11ah, selecting 
    802.11ah to overcome throughput bottlenecks. Designed and built a drone-mounted relay prototype to bypass canopy attenuation 
    via line-of-sight, providing critical field-test insights into cross-channel interference in dense environments.
    `,
    metric: "LoRa · IEEE 802.11ah · Networking",
    link: "https://upcommons.upc.edu/entities/publication/ce199590-ff50-4616-9cdc-56fa8c457888",
    images: ["xprize1.png", "xprize2.png", "xprize3.png", "xprize4.png", "xprize5.png"]
  }
];


const ProjectCard = ({ project, langClass }) => {
  const hasLink = Boolean(project.link && project.link.trim() !== "");
  const CardWrapper = hasLink ? "a" : "div";
  
  const imagesArray = Array.isArray(project.images) 
    ? project.images 
    : project.image 
    ? [project.image] 
    : [];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  const [isDelayed, setIsDelayed] = useState(false);

  
  useEffect(() => {
    if (imagesArray.length <= 1) return;

    const waitTime = isDelayed ? 9000 : 4500;

    const timer = setTimeout(() => {
      setCurrentImgIndex((prevIndex) => 
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
      
      if (isDelayed) {
        setIsDelayed(false);
      }
    }, waitTime); 

    return () => clearTimeout(timer);
  }, [imagesArray, currentImgIndex, isDelayed]);


  const handleDotClick = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    
    setCurrentImgIndex(index);
    setIsDelayed(true);
  };


  const wrapperProps = hasLink ? {
    href: project.link,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};


  return (
    <CardWrapper 
      className="proj-card" 
      {...wrapperProps}
      style={!hasLink ? { cursor: 'default' } : {}}
    >
      
      <div className="proj-window-bar">
        <div className="mac-dots">
          <span></span><span></span><span></span>
        </div>
      </div>

      {imagesArray.length > 0 && (
        <div className="proj-img-container">
          <img 
            key={currentImgIndex}
            src={imagesArray[currentImgIndex]} 
            className="proj-img animation-fade" 
            alt={`${project.title} screenshot`} 
          />
          
          {imagesArray.length > 1 && (
            <div className="proj-img-dots">
              {imagesArray.map((_, index) => (
                <span
                  key={index}
                  onClick={(e) => handleDotClick(e, index)}
                  className={`p-dot ${currentImgIndex === index ? 'active' : ''}`}
                  aria-label={`Show screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="proj-content">
        <div className="proj-card-head">
          <h3 className="proj-title">{project.title}</h3>
          {project.lang && (
            <span className={langClass}>
              {project.lang}
            </span>
          )}
        </div>
        <p className="proj-desc">{project.desc}</p>
      </div>

      <div className="proj-footer">
        <span className="proj-metric">{project.metric}</span>
        {hasLink && <span className="proj-link-text">VIEW &rarr;</span>}
      </div>

    </CardWrapper>
  );
};


const Projects = () => {
  const [activeSection, setActiveSection] = useState('volunteer');

  // Track scroll position to update the active index
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' } 
    );

    const sectionIds = ['volunteer', 'ml', 'systems'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <aside className="projects-index-fixed">
        <button
          onClick={() => handleNavClick('volunteer')}
          className={`index-item ${activeSection === 'volunteer' ? 'active' : ''}`}
        >
          Field Engineering
        </button>
        <button
          onClick={() => handleNavClick('ml')}
          className={`index-item ${activeSection === 'ml' ? 'active' : ''}`}
        >
          ML & DL
        </button>
        <button
          onClick={() => handleNavClick('systems')}
          className={`index-item ${activeSection === 'systems' ? 'active' : ''}`}
        >
          Systems
        </button>
      </aside>

      <section id="volunteer" className="section" >
        <div className="section-inner">
          <p className="section-label">Field engineering &amp; volunteer work</p>
          <div className="projects-grid">
            {volunteerProjects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} langClass="proj-lang" />
            ))}
          </div>
        </div>
      </section>

      <section id="ml" className="section" style={{ paddingTop: "0px" }}>
        <div className="section-inner">
          <p className="section-label">MSc projects — machine learning &amp; deep learning</p>
          <div className="projects-grid">
            {mlProjects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} langClass="proj-lang" />
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="section" style={{ paddingTop: "0px" }}>
        <div className="section-inner">
          <p className="section-label">Systems projects — built from scratch</p>
          <div className="projects-grid">
            {systemProjects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} langClass="sys-lang" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;