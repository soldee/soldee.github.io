import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon, ArrowDownIcon } from '../components/Icons';

const mottoSlides = [
  {
    id: "engineer",
    eyebrow: "Engineer",
    title: "I build systems that don't fall over.",
    desc: `
      Three years in, I redesigned a data pipeline that was making users wait days to change a single field — not 
      because anyone had made a bad decision, but because the system had been built with the wrong thing as ground truth. 
      Spark processed files, ran checks, populated a data warehouse, and MongoDB sat at the end as a read-only view. 
      Users edited the "view." I flipped it: MongoDB becomes the source of truth, changes propagate in real time, and the 
      warehouse derives from it rather than driving it. The result was immediate — processing times that used to span days 
      dropped to seconds for manual changes, reliability improved because we eliminated an entire class of sync failures 
      between two competing sources of truth, and the infrastructure cost dropped significantly by removing batch jobs that 
      existed solely to paper over the architectural mismatch. 
      That's the kind of problem I look for — not the one that's technically hard, but the one where understanding how data 
      actually flows changes everything downstream.
    `,
    image: "oriol_soldevila.jpg"
  },
  {
    id: "ml-practitioner",
    eyebrow: "ML Practitioner",
    title: "I train models and understand why they work.",
    desc: `
      Good models fail quietly, and most people don't notice until it's too late. My MSc in Deep Learning taught me to 
      measure everything — not just accuracy on a held-out set, but failure modes, edge cases, and what the model actually 
      learned versus what you hoped it learned. I implement from first principles (LoRA, attention pooling, Frangi filtering) 
      because if you can't rebuild it, you can't debug it. 
      At BCN eMotorsport I applied the same rigour to a real constraint: replacing a heuristic-based cluster classifier for LiDAR 
      point clouds with a family of trained ML models, significantly improving robustness to noise — in a system where a misclassified 
      cone at speed has real consequences. Data in, decisions out — and you need to trust every step of that chain.
    `,
    image: "cat17x.JPG"
  },
  {
    id: "field-engineer",
    eyebrow: "Field Engineer",
    title: "I deploy systems where there's no safety net.",
    desc: `
      This one I wanted for a long time. Being able to take skills I'd built in data infrastructure and networking and apply them 
      somewhere they genuinely mattered — not to optimize a dashboard metric, but to help a hospital run better — was something I'd been 
      looking for. I lived in Yassa, Cameroon for a month, working with the team at St John of God Hospital to design and deploy their 
      network infrastructure from scratch and implement a Hospital Management System. The technical constraints were real, the workarounds 
      were creative, and the people I met made it one of the most rewarding things I've done.
    `,
    image: "field_engineer.jpg"
  },
  {
    id: "builder",
    eyebrow: "Builder",
    title: "I build things from scratch, for the sake of it.",
    desc: `
      I build things from scratch to understand what's actually happening inside them. A Redis server teaches you more about data 
      persistence than any documentation. A DNS resolver teaches you more about network data flow than any diagram. Shell, HTTP 
      server, Go, C, C++ — not to add lines to a CV, but because the abstractions only make sense once you've seen what they're hiding.
    `,
    image: "CIAC_0607.png"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === mottoSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 40000);
  };

  const activeData = mottoSlides[currentSlide];

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Data &amp; ML Engineer · Barcelona</p>
          <h1>Production engineer,<br />now building with deep learning.</h1>
          <p className="hero-sub">
            3+ years designing high-throughput data pipelines and distributed systems at scale. Currently completing an MSc in Deep Learning at UPC — applying that same engineering rigour to computer vision, NLP, and speech.
          </p>
          <div className="hero-ctas">
            <a href="https://github.com/soldee" className="clink" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              Github
            </a>
            <a href="https://linkedin.com/in/oriol-soldevila-gargallo" className="clink" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href="/CV_OriolSoldevila.pdf" className="clink">CV <ArrowDownIcon /></a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">Core Principles</p>
          
          <div className="motto-carousel-wrapper">
            
            <div className="motto-eyebrow-nav">
              {mottoSlides.map((slide, index) => (
                <button 
                  key={index} 
                  onClick={() => handleDotClick(index)}
                  className={`motto-eyebrow-btn ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`View ${slide.eyebrow} principle`}
                >
                  {slide.eyebrow}
                </button>
              ))}
            </div>

            <div className="motto-slide" key={currentSlide}>
              <img 
                src={activeData.image} 
                alt={activeData.eyebrow} 
                className="motto-slide-image" 
              />
              <div className="motto-slide-content">
                <h3 className="motto-title">{activeData.title}</h3>
                <p className="motto-desc">{activeData.desc}</p>
              </div>
            </div>

            <div className="carousel-dots">
              {mottoSlides.map((_, index) => (
                <span 
                  key={index} 
                  onClick={() => handleDotClick(index)}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Home;