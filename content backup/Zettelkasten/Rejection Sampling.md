---
ID: "13012024213729"
tags:
  - cognitive-computing
---
We want to sample from a complex probability distribution. We can easily calculate $p(x)$, but calculating the inverse of the integral of $p(x)$ might be difficult.

> [!tldr] Basic Idea of Rejection Sampling
> Use a simpler proposal distribution $q(x)$ to generate samples. Accept or reject samples based on how likely it is that this sample came from the actual distribution $p(x)$
