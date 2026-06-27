# Oriol Soldevila Gargallo

**Data & ML Engineer · Barcelona**

3+ years building high-throughput data pipelines and distributed systems at scale. 
Currently completing an MSc in Deep Learning at UPC, applying that rigor to computer vision, NLP, and speech.

[GitHub](https://github.com/soldee) · [LinkedIn](https://linkedin.com/in/oriol-soldevila-gargallo) · [oriol.soldevilag@gmail.com](mailto:oriol.soldevilag@gmail.com) · [CV](#)

---

## By the numbers

| | | |
|---|---|---|
| **90%** latency reduction in MDM system migration to event-driven architecture | **500k+** daily requests handled after scaling a document management system | **3 yrs** production data engineering across Spark, Kafka, MongoDB, and Hadoop |

---

## Experience

### Perception Engineer — BCN eMotorsport
*Sep 2025 – Present*

Designed a telemetry processing engine to evaluate AV perception algorithms — automated ground truth generation, Parquet storage with Polars, and a continuous spatial metric tuning framework to replace manual benchmarking.

`Polars` `Parquet` `ROS` `Autonomous vehicles`

---

### Senior Data Consultant — Minsait, Indra
*Jul 2025 – Sep 2025*

Led migration of a legacy MDM system to a real-time event-driven model using Scala and MongoDB. Significantly improved operational efficiency and user autonomy.

**↓ 90% data synchronisation latency.**

`Scala` `MongoDB` `Event-driven architecture`

---

### Data Engineer Consultant — Minsait, Indra
*Jul 2024 – Jul 2025*

Identified and resolved bottlenecks in a critical Spark pipeline responsible for aggregating and publishing multi-source data, improving execution time and reliability at scale.

`Spark` `Hadoop` `Pipeline optimisation`

---

### Analyst — Minsait, Indra
*Jul 2022 – Jul 2024*

Scaled a document management system handling **500k+ daily requests**. Deployed ELK stack monitoring and engineered ETL pipelines with Spark, MongoDB, and Hadoop. Designed RESTful APIs with Spring and managed CI/CD via Jenkins and Docker.

`ELK` `ETL` `Spark` `Spring` `Jenkins` `Docker`

---

### Undergraduate Researcher — Reby
*Nov 2021 – Jul 2022*

Trained and deployed ML models to calibrate low-cost IoT CO₂/NO₂ sensors on electric scooters for urban air pollution mapping, as part of an international team.

`ML` `IoT` `Sensor calibration`

---

## Education

**MSc Advanced Telecommunication Technologies** — Universitat Politècnica de Catalunya
*Feb 2025 – Present · Specialising in Deep Learning*

**BSc Telecommunications Technologies & Services Engineering** — Universitat Politècnica de Catalunya
*Sep 2018 – Jul 2022 · Specialising in Telematic Systems*

---

## Technical work — MSc projects

### F2000 — Automated brain vein segmentation
*Biomedical imaging · Python · Streamlit*

End-to-end SWI MRI pipeline: Otsu brain extraction, high-pass background suppression, Frangi multiscale vesselness filtering, dual-criterion adaptive thresholding, and atlas-based regional mapping across 32 anatomical sub-territories. Interactive Streamlit dashboard with 3D inspection and automated PDF report generation.

**Manual segmentation ~10 hours → fully automated in under 5 minutes.**

[GitHub](#) <!-- replace with actual URL -->

---

### LoRA fine-tuning for speech command recognition
*Speech · wav2vec 2.0 · PyTorch*

Low-Rank Adaptation (rank 8, α=16) applied to all four attention projections across all 12 transformer layers of wav2vec 2.0 — training only 0.83% of total parameters. Full waveform augmentation pipeline (noise injection, time shift, speed perturbation, volume jitter). Layer selection via linear probes, with confusion matrix and noise-robustness analysis across models.

**Kaggle score: 98.85% · Baseline: 94.49%**

[GitHub](#)

---

### Language identification — 235 languages
*NLP · BiLSTM · BPE · PyTorch*

Evolved from a character-level RNN baseline through 8 model iterations. Best model: bidirectional LSTM (512 units/direction) with BPE tokenisation (8k vocabulary), attention pooling, data augmentation (random truncation + token dropout), and best-checkpoint saving. Includes per-language error analysis and confusion taxonomy.

**Submission accuracy: 95.86% · Baseline: 93.51%**

[GitHub](#)

---

### Spoken digit recognition — DTW & wav2vec 2.0
*ASR · Signal processing · Python*

Systematic comparison of classical DTW with MFCC features against frozen wav2vec 2.0 representations. Full sweep of all 12 transformer layers, cepstral normalisation strategies, and distance metrics. Key finding: CMVN normalisation + cosine DTW on layer 6 reduces error from 57.7% to 15.8%.

**Validation error: 15.8% · Baseline: 57.7%**

[GitHub](#)

---

### Non-causal language modelling
*NLP · Transformer · Catalan*

6-model comparative study for masked word prediction on Catalan text. Best model: 6-layer pre-norm transformer, 8-head attention, embedding dimension 512, shared input/output embeddings, AMP training, LR warmup + ReduceLROnPlateau, and separate dropout rates per component (MLP 0.3, attention 0.1). Trained on Wikipedia and El Periódico corpora.

**Submission accuracy: 38.9% · Baseline: 33.4%**

[GitHub](#)

---

### Word embeddings — CBOW on Catalan
*NLP · Word2Vec · PyTorch*

CBOW implementation with three position-weighting strategies (fixed scalar, learned scalar, learned vector). 100k-token Catalan vocabulary. Intrinsic evaluation via cosine similarity, word analogy tasks, gender bias analysis, and t-SNE visualisation of the embedding space.

**100k token vocabulary**

[GitHub](#)

---

### Computer vision labs
*CV · OpenCV · PyTorch · Epipolar geometry*

Series of 5 labs covering the core CV curriculum: line and edge detection, feature correspondences, fundamental matrix estimation from point matches, transfer learning for image classification, and semantic segmentation with deep networks.

[GitHub](#)

---

## Systems projects — Codecrafters

Building well-known infrastructure from scratch, in low-level languages. These exist to keep systems thinking sharp alongside the ML work.

### Redis — Go
*In-memory data store · Go*

Implemented core Redis from scratch: RESP protocol parsing, key-value store, TTL expiry, RDB persistence, and replication. Currently extending to Redis Cluster with hash slot sharding.

`Go` `TCP` `RESP protocol` `Persistence` `Replication`

[GitHub](https://github.com/soldee/codecrafters-redis-go)

---

### DNS server — Go
*Networking · Go*

Built a recursive DNS resolver from scratch: binary DNS message parsing, question/answer/authority sections, UDP socket handling, and iterative resolution across authoritative nameservers.

`Go` `UDP` `DNS protocol` `Binary parsing`

[GitHub](https://github.com/soldee/codecrafters-dns-server)

---

### HTTP server — C++
*Networking · C++*

HTTP/1.1 server from scratch in C++: TCP socket management, request parsing, response building, static file serving, and concurrent connection handling.

`C++` `TCP` `HTTP/1.1` `Sockets`

[GitHub](https://github.com/soldee/http-server-cpp)

---

### Shell — C
*Systems · C*

POSIX shell implementation in C: command parsing, built-in commands (cd, echo, pwd, type, exit), PATH resolution, process forking with execve, and I/O redirection.

`C` `POSIX` `Process management` `System calls`

[GitHub](https://github.com/soldee/codecrafters-shell-c)

---

## Skills

**ML / DL** — PyTorch · Transformers · LoRA · LSTM · CNN · CTC

**Computer vision** — OpenCV · ROS · Semantic segmentation · Medical imaging

**Data & infrastructure** — Spark · Kafka · Polars · MongoDB · Hadoop · Docker · ELK · Kudu

**Languages** — Python · Go · C · C++ · Scala · Java

---

## Contact

Open to ML engineering roles, research collaborations, and interesting problems at the boundary of production systems and deep learning.

- **Email:** [oriol.soldevilag@gmail.com](mailto:oriol.soldevilag@gmail.com)
- **GitHub:** [github.com/soldee](https://github.com/soldee)
- **LinkedIn:** [linkedin.com/in/oriol-soldevila-gargallo](https://linkedin.com/in/oriol-soldevila-gargallo)