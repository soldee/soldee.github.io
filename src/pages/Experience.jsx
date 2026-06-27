import React from 'react';
import { ArrowDownIcon } from '../components/Icons';

const experienceData = [
  {
    id: "bcn-emotorsport",
    date: "Sep 2025 - Present",
    company: "BCN eMotorsport",
    role: "Perception Engineer",
    isCurrent: true,
    desc: `
    Built a perception evaluation pipeline from scratch for the team's autonomous vehicle stack. The ground truth extraction tool processes 
    ROS bags through SLAM, removes ground points, accumulates a single point cloud, runs clustering and a lightweight classification pass, 
    and uploads the result to Xtreme1 for human revision — making what would otherwise be a fully manual labeling task semi-automatic. 
    The evaluation tool runs the perception pipeline against that ground truth and produces interpretable metrics: mean cone detection distance, 
    mean distance to track limits, precision and recall. 
    Separately, replaced the heuristic-based cluster classifier with a family of trained ML models, significantly improving robustness to noise 
    in the point cloud — a problem where heuristics had hit their ceiling.
    `,
    accentPill: null,
    pills: ["ROS", "Formula Student", "Autonomous Vehicles"]
  },
  {
    id: "minsait-senior",
    date: "Jul 2025 - Sep 2025",
    company: "Minsait, Indra",
    role: "Senior Data Consultant",
    isCurrent: false,
    desc: `
    Led the migration of the MDM system to the new event-driven model using Scala and MongoDB. The most significant work here was rethinking how data 
    flowed through the platform entirely. The existing architecture treated a Spark data warehouse as ground truth — files were ingested, processed 
    through heavy business rules, and eventually surfaced in MongoDB for the frontend. 
    Users who needed to correct a record had to wait for the full batch process to complete, sometimes days, just to change a single field. I redesigned 
    it to work the other way around: MongoDB becomes the source of truth, changes propagate in real time, and the warehouse derives from it rather than 
    driving it. Manual changes that took days now happened in seconds, an entire class of sync failures between competing sources of truth disappeared, 
    and batch jobs that existed solely to paper over the architectural mismatch were eliminated, reducing infrastructure cost significantly.
    `,
    accentPill: "↓ 90% latency",
    pills: ["Scala", "MongoDB"]
  },
  {
    id: "minsait-mid",
    date: "Jul 2024 - Jul 2025",
    company: "Minsait, Indra",
    role: "Data Engineer Consultant",
    isCurrent: false,
    desc: `
    Diagnosed and resolved critical performance bottlenecks in a Spark pipeline responsible for aggregating and publishing multi-source data. The core 
    issue was in how reads were being executed — by introducing predicate pushdown and replacing broad reads with readIsIn filters, I significantly reduced 
    the data scanned per job, cutting execution times and improving reliability for a pipeline that downstream teams depended on daily.
    `,
    accentPill: null,
    pills: ["Spark", "Hadoop", "Pipeline optimisation"]
  },
  {
    id: "minsait-junior",
    date: "Jul 2022 - Jul 2024",
    company: "Minsait, Indra",
    role: "Analyst",
    isCurrent: false,
    desc: `
    Scaled a document management system to handle 500k+ daily requests. Deployed ELK stack monitoring to track system performance and proactively catch 
    issues. Engineered ETL pipelines with Spark, MongoDB, and Hadoop. Designed RESTful APIs with Spring and managed CI/CD via Jenkins and Docker.
    `,
    accentPill: "500k+ req/day",
    pills: ["ETL", "Spring", "Docker"]
  },
  {
    id: "reby",
    date: "Nov 2021 - Jul 2022",
    company: "Reby",
    role: "Undergraduate Researcher",
    isCurrent: false,
    desc: `
    Worked within an international team to map urban air pollution via a fleet of electric scooters equipped with low-cost IoT CO₂/NO₂ sensors. The 
    challenge was that cheap sensors drift — they read differently depending on temperature, humidity, and age, and can't be trusted raw. Trained and 
    deployed ML models to calibrate their output against historical data from fixed reference stations, turning unreliable sensor readings into data you 
    could actually use. First real experience of the full loop: messy real-world data, a model that had to work in deployment, and a metric that mattered 
    beyond a held-out test set.
    `,
    accentPill: null,
    pills: ["ML", "IoT", "Sensor calibration"]
  }
];

const educationData = [
  {
    id: "msc-upc",
    date: "Feb 2025 - Present",
    title: "MSc Advanced Telecommunication Technologies",
    sub: "Universitat Politècnica de Catalunya · Specialising in Deep Learning"
  },
  {
    id: "bsc-upc",
    date: "Sep 2018 - Jul 2022",
    title: "BSc Telecommunications Technologies & Services Engineering",
    sub: "Universitat Politècnica de Catalunya · Specialising in Telematic Systems"
  }
];

const skillsData = [
  {
    category: "ML / DL",
    tags: ["PyTorch", "Sklearn"]
  },
  {
    category: "Languages",
    tags: ["English (Proficient)", "Catalan (Native)", "Spanish (Native)", "French (Basic)"]
  },
  {
    category: "Data & infrastructure",
    tags: ["Spark", "Kafka", "Polars", "MongoDB", "Hadoop", "Docker", "ROS"]
  },
  {
    category: "Programming Languages",
    tags: ["Python", "Go", "C", "C++", "Scala", "Java"]
  }
];

const Experience = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-label">Professional experience</p>

        {/* Experience Timeline */}
        <div className="timeline">
          {experienceData.map((exp) => (
            <div className="tl-item" key={exp.id}>
              
              <div className="tl-meta">
                <span className="tl-date">{exp.date}</span>
              </div>
              
              <div className="tl-body">
                <h3 className="tl-company" style={{ fontSize: '1.1rem', margin: '0 0 4px 0' }}>
                  {exp.company}
                </h3>
                
                <p className="tl-role">
                  {exp.role} 
                  {exp.isCurrent && <span className="tl-current">Current</span>}
                </p>
                
                <p className="tl-desc">{exp.desc}</p>
                
                <div className="pill-row">
                  {exp.accentPill && (
                    <span className="pill pill-accent">{exp.accentPill}</span>
                  )}
                  {exp.pills.map((pill, idx) => (
                    <span className="pill" key={`pill-${exp.id}-${idx}`}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="edu-list">
          <p className="section-label" style={{ marginTop: '3rem' }}>Education</p>
          {educationData.map((edu) => (
            <div className="edu-item" key={edu.id}>
              <span className="edu-date">{edu.date}</span>
              <div>
                <p className="edu-title">{edu.title}</p>
                <p className="edu-sub">{edu.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <p className="section-label" style={{ marginTop: '3rem' }}>Skills</p>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div className="skill-group" key={`skill-group-${index}`}>
              <span className="skill-cat">{skillGroup.category}</span>
              <div className="skill-tags">
                {skillGroup.tags.map((tag, idx) => (
                  <span className="stag" key={`stag-${index}-${idx}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;