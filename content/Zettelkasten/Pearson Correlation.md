---
ID: "30122023110541"
tags:
  - statistics
---
The Pearson correlation basically calculates the normalized [[Covariance]]. The problem with the covariance is, that its results are hard to interpret. We get absolute values that are either negative or positive, but we cannot interpret the amount of correlation without knowing the underlying data.

The Pearson correlation normalizes the covariance such that it is bound to the range $[0; 1]$.

$$\mathrm{corr}(X, Y) = \frac{\mathrm{cov(X, Y)}}{\sqrt{\mathrm{var}(X)\mathrm{var}(Y)}}$$
