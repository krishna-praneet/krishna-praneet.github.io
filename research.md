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

Foundation models are general-purpose, but adapting and deploying them is expensive, especially outside the datacenter. My current work looks at how to make the full lifecycle of these models, from post-training to serving, efficient and dependable across cloud and edge hardware.

### Post-training Benchmarks and Efficiency

Choosing how to adapt and deploy a foundation model involves trade-offs that are rarely measured side by side. I study these costs systematically: how post-training methods, from full fine-tuning and parameter-efficient methods to preference optimization, compare in data, compute and accuracy, and how serving choices such as batching and quantization play out across models, hardware and runtimes. Our study of [foundation models for the edge](https://drive.google.com/file/d/1zWwSRMR3osIy1-XITA-2bAvL3GGaQSDE/view?usp=sharing) (MILCOM 2026) showed when general-purpose models can replace task-specific ones at a fraction of the adaptation cost, and we are extending it into a broader benchmarking suite.

### Inference-time Adaptation

Deployed models face changing conditions: failures, shifting resources and new latency targets. Rather than retraining or keeping full replicas, I explore treating models as compositions of reusable components that can be reassembled at runtime. This includes stitching model structures together to build lightweight backups for adaptive failover, and reusing LLM representations to build hybrid models that meet latency targets on constrained devices.

## Failure Resiliency for Model Serving

Edge devices fail more often than cloud servers, and conventional fault tolerance, such as cloud failover, full replicas or compressed backups, costs latency, accuracy or resources that edge deployments cannot spare. I began by measuring these overheads in real ML pipelines ([MILCOM 2025](https://lass.cs.umass.edu/papers/pdf/milcom2025-practical.pdf)), and then designed [HYDRA](https://lass.cs.umass.edu/papers/pdf/sec26-hydra.pdf) (SEC 2026), which turns spare capacity across edge nodes into a collective backup: an ensemble of small models that matches a larger model and degrades gracefully as nodes fail.

![HYDRA: two model instances whose representations are combined by a lightweight aggregator for higher combined performance](/assets/hydra.png){: .figure}


## Quantum Computing

During my Masters, I worked on software for quantum error correction and networking. I built [LDPCDecoders.jl](https://github.com/QuantumSavory/LDPCDecoders.jl), an open-source Julia library of fast decoders for quantum LDPC codes in the QuantumSavory ecosystem, and an API layer that gives programmatic access to a distributed quantum network simulator for reproducible research.

## Computation in Materials Science

My background before computer science was in metallurgy and materials science, where I first applied computing to physical problems: using machine learning to accelerate ab-initio molecular dynamics simulations of platinum nanoclusters for my undergraduate thesis at IIT Madras, and building image-processing pipelines to detect defects in aircraft components at Boeing.

<!--
---

## Publications

1. **Gudipaty, Krishna Praneet**, W. A. Hanafy, N. Ng, et al., "[HYDRA: Multi-level ensemble learning for failure-resilient edge inference](https://lass.cs.umass.edu/papers/pdf/sec26-hydra.pdf)," in *ACM/IEEE Symposium on Edge Computing (SEC)*, 2026

2. **Gudipaty, Krishna Praneet**, W. A. Hanafy, T. Abdelzaher, et al., "[Foundation models for the edge: Opportunities and trade-offs](https://drive.google.com/file/d/1zWwSRMR3osIy1-XITA-2bAvL3GGaQSDE/view?usp=sharing)," in *IEEE MILCOM Internet of Things for Adversarial Environments (IoTAE) Workshop*, 2026

3. **Gudipaty, Krishna Praneet**, W. A. Hanafy, L. Wu, et al., "[Practical considerations for failure resilient ml systems at the edge](https://lass.cs.umass.edu/papers/pdf/milcom2025-practical.pdf)," in *IEEE MILCOM Internet of Things for Adversarial Environments (IoTAE) Workshop*, 2025

4. **Gudipaty, Krishna Praneet**, W. A. Hanafy, K. Ozkara, et al., "Mel: Multi-level ensemble learning for resource-constrained environments," *arXiv preprint arXiv:2506.20094*, 2025

5. A. Micciche, **Gudipaty, Krishna Praneet**, and S. Krastanov, "Quantum ldpc error correcting codes for use on 1d quantum dot arrays," in *APS March Meeting Abstracts*, vol. 2024, S46–010
-->
