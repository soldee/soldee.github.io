import React from 'react';

const Experience = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-label">Professional experience</p>

        <div className="stats-grid">
          <div className="stat-cell">
            <p className="stat-num">90<span>%</span></p>
            <p className="stat-desc">Data synchronisation latency reduced in MDM migration to event-driven architecture</p>
          </div>
          <div className="stat-cell">
            <p className="stat-num">500<span>k+</span></p>
            <p className="stat-desc">Daily requests handled after scaling a document management system</p>
          </div>
          <div className="stat-cell">
            <p className="stat-num">3<span> yrs</span></p>
            <p className="stat-desc">Production data engineering across Spark, Kafka, MongoDB, and Hadoop</p>
          </div>
        </div>

        <div className="timeline">
          <div className="tl-item">
            <div className="tl-meta">
              <span className="tl-date">Sep 2025 - Present</span>
              <span className="tl-company">BCN eMotorsport</span>
            </div>
            <div className="tl-body">
              <p className="tl-role">Perception Engineer <span className="tl-current">Current</span></p>
              <p className="tl-desc">
                {/* Designed a telemetry processing engine to evaluate AV perception algorithms - automated ground truth generation, Parquet storage with Polars, and a continuous spatial metric tuning framework that eliminated manual benchmarking. */}
                Built a perception evaluation pipeline from scratch for the team's autonomous vehicle stack. The ground truth extraction tool processes ROS bags through SLAM, removes ground points, accumulates a single point cloud, runs clustering and a lightweight classification pass, and uploads the result to Xtreme1 for human revision — making what would otherwise be a fully manual labeling task semi-automatic. The evaluation tool then runs the perception pipeline against that ground truth and produces interpretable metrics: mean cone detection distance, mean distance to track limits, precision and recall. On top of this, replaced the heuristic-based cluster classifier with a family of trained ML models, significantly improving robustness to noise in the point cloud.
              </p>
              <div className="pill-row">
                <span className="pill">ROS</span><span className="pill">Formula Student</span><span className="pill">Autonomous Vehicles</span>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-meta">
              <span className="tl-date">Jul 2025 - Sep 2025</span>
              <span className="tl-company">Minsait, Indra</span>
            </div>
            <div className="tl-body">
              <p className="tl-role">Senior Data Consultant</p>
              <p className="tl-desc">
                Led migration of a legacy MDM system to a real-time event-driven model using Scala and MongoDB, significantly 
                improving operational efficiency and user autonomy.
              </p>
              <div className="pill-row">
                <span className="pill pill-accent">↓ 90% latency</span>
                <span className="pill">Scala</span><span className="pill">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-meta">
              <span className="tl-date">Jul 2024 - Jul 2025</span>
              <span className="tl-company">Minsait, Indra</span>
            </div>
            <div className="tl-body">
              <p className="tl-role">Data Engineer Consultant</p>
              <p className="tl-desc">
                Identified and resolved bottlenecks in a critical Spark pipeline responsible for aggregating and publishing multi-source 
                data, improving execution time and reliability at scale.
              </p>
              <div className="pill-row">
                <span className="pill">Spark</span><span className="pill">Hadoop</span><span className="pill">Pipeline optimisation</span>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-meta">
              <span className="tl-date">Jul 2022 - Jul 2024</span>
              <span className="tl-company">Minsait, Indra</span>
            </div>
            <div className="tl-body">
              <p className="tl-role">Analyst</p>
              <p className="tl-desc">
                Scaled a document management system handling 500k+ daily requests. Deployed ELK stack monitoring and built ETL pipelines 
                with Spark, MongoDB, and Hadoop. Designed RESTful APIs with Spring; managed CI/CD via Jenkins and Docker.
              </p>
              <div className="pill-row">
                <span className="pill pill-accent">500k+ req/day</span>
                <span className="pill">ETL</span><span className="pill">Spring</span><span className="pill">Docker</span>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-meta">
              <span className="tl-date">Nov 2021 - Jul 2022</span>
              <span className="tl-company">Reby</span>
            </div>
            <div className="tl-body">
              <p className="tl-role">Undergraduate Researcher</p>
              <p className="tl-desc">
                Trained and deployed ML models to calibrate low-cost IoT CO₂/NO₂ sensors on electric scooters for urban air pollution mapping across an international team.
              </p>
              <div className="pill-row">
                <span className="pill">ML</span><span className="pill">IoT</span><span className="pill">Sensor calibration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="edu-list">
          <p className="section-label" style={{ marginTop: '3rem' }}>Education</p>
          <div className="edu-item">
            <span className="edu-date">Feb 2025 - Present</span>
            <div>
              <p className="edu-title">MSc Advanced Telecommunication Technologies</p>
              <p className="edu-sub">Universitat Politècnica de Catalunya · Specialising in Deep Learning</p>
            </div>
          </div>
          <div className="edu-item">
            <span className="edu-date">Sep 2018 - Jul 2022</span>
            <div>
              <p className="edu-title">BSc Telecommunications Technologies &amp; Services Engineering</p>
              <p className="edu-sub">Universitat Politècnica de Catalunya · Specialising in Telematic Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;