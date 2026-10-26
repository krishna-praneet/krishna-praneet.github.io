---
layout: default
title: Research
---

## Research Summary

I'm excited about tackling systems challenges in ML/AI lifecycles, advancing techniques in scheduling, placement, and failure resiliency. Specifically, I have worked on post-training and inference of Foundation Models, adaptive failover systems, and edge computing & IoT.

*Please find my CV here:* [Download (PDF)](/resume.pdf){:target="_blank"}
{: #cv}

---

## Foundation Models

Foundation models are general-purpose, but adapting and deploying them is expensive, especially outside the datacenter. This line of work looks at how to make the full lifecycle of these models, from post-training to serving, efficient and dependable across cloud and edge hardware.

### Post-training Benchmarks and Efficiency

Choosing how to adapt and deploy a foundation model involves trade-offs that are rarely measured side by side. These works study those costs systematically: how post-training methods, from full fine-tuning and parameter-efficient methods to preference optimization, compare in data, compute and accuracy, and how serving choices such as batching and quantization play out across models, hardware and runtimes. A study of foundation models for the edge [1] showed when general-purpose models can replace task-specific ones at a fraction of the adaptation cost, and is being extended into a broader benchmarking suite.

![Spectrum from narrow, application-specific models (low memory, compute and energy) to foundation models with adapters (efficient adaptation, minimal data, faster training), with micro foundation models in between](/assets/fms_edge.png){: .figure}

[1] Gudipaty, K. P. et al. "Foundation Models for the Edge: Opportunities and Trade-offs", IEEE MILCOM, 2026 ([Link](https://drive.google.com/file/d/1zWwSRMR3osIy1-XITA-2bAvL3GGaQSDE/view?usp=sharing))
{: .refs}

### Inference-time Adaptation

Deployed models face changing conditions: failures, shifting resources and new latency targets. Rather than retraining or keeping full replicas, these works explore treating models as compositions of reusable components that can be reassembled at runtime. This includes stitching model structures together to build lightweight backups for adaptive failover.

![Adaptive foundation model: a backbone B produces features, a stitching layer S maps them into the feature space of decoder A, which produces labels; S is solved in closed form as a least-squares fit](/assets/structural_resilience.png){: .figure}

---

## Failure Resiliency for Model Serving

Edge devices fail more often than cloud servers, and conventional fault tolerance, such as cloud failover, full replicas or compressed backups, costs latency, accuracy or resources that edge deployments cannot spare. This work first measures these overheads in real ML pipelines [3], and then introduces HYDRA [2], which turns spare capacity across edge nodes into a collective backup: an ensemble of small models that matches a larger model and degrades gracefully as nodes fail.

![HYDRA: two model instances whose representations are combined by a lightweight aggregator for higher combined performance](/assets/hydra.png){: .figure}

[2] Gudipaty, K. P. et al. "HYDRA: Multi-Level Ensemble Learning for Failure-Resilient Edge Inference", ACM/IEEE SEC, 2026 ([Link](https://lass.cs.umass.edu/papers/pdf/sec26-hydra.pdf))<br>
[3] Gudipaty, K. P. et al. "Practical Considerations for Failure Resilient ML Systems at the Edge", IEEE MILCOM, 2025 ([Link](https://lass.cs.umass.edu/papers/pdf/milcom2025-practical.pdf))
{: .refs}

---

## Quantum Computing

These works build software for quantum error correction and networking: LDPCDecoders.jl [4], an open-source Julia library of fast decoders for quantum LDPC codes in the QuantumSavory ecosystem, and an API layer that gives programmatic access to a distributed quantum network simulator for reproducible research.

[4] https://github.com/QuantumSavory/LDPCDecoders.jl ([Link](https://github.com/QuantumSavory/LDPCDecoders.jl))
{: .refs}

---

## Computation in Materials Science

These works apply computing to problems in metallurgy and materials science: using machine learning to accelerate ab-initio molecular dynamics simulations of platinum nanoclusters at IIT Madras, and building image-processing pipelines to detect defects in aircraft components at Boeing.

<!--
---

## Publications

1. **Gudipaty, Krishna Praneet**, W. A. Hanafy, N. Ng, et al., "[HYDRA: Multi-level ensemble learning for failure-resilient edge inference](https://lass.cs.umass.edu/papers/pdf/sec26-hydra.pdf)," in *ACM/IEEE Symposium on Edge Computing (SEC)*, 2026

2. **Gudipaty, Krishna Praneet**, W. A. Hanafy, T. Abdelzaher, et al., "[Foundation models for the edge: Opportunities and trade-offs](https://drive.google.com/file/d/1zWwSRMR3osIy1-XITA-2bAvL3GGaQSDE/view?usp=sharing)," in *IEEE MILCOM Internet of Things for Adversarial Environments (IoTAE) Workshop*, 2026

3. **Gudipaty, Krishna Praneet**, W. A. Hanafy, L. Wu, et al., "[Practical considerations for failure resilient ml systems at the edge](https://lass.cs.umass.edu/papers/pdf/milcom2025-practical.pdf)," in *IEEE MILCOM Internet of Things for Adversarial Environments (IoTAE) Workshop*, 2025

4. **Gudipaty, Krishna Praneet**, W. A. Hanafy, K. Ozkara, et al., "Mel: Multi-level ensemble learning for resource-constrained environments," *arXiv preprint arXiv:2506.20094*, 2025

5. A. Micciche, **Gudipaty, Krishna Praneet**, and S. Krastanov, "Quantum ldpc error correcting codes for use on 1d quantum dot arrays," in *APS March Meeting Abstracts*, vol. 2024, S46–010
-->
