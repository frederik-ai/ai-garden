The Pearson Correlation generally computes the normalized Covariance](Covariance.md). The problem with the covariance is that its results are difficult to interpret. The covariance yields values that are either negative or positive and we cannot identifiy the amount of correlation without knowing the underlying data.

The Perason Correlation normalizes the covariance such that falls into the inveral $[0,1]$.
$$
\mathrm{corr}(X, Y) = \frac{\mathrm{cov(X, Y)}}{\sqrt{\mathrm{var}(X)\mathrm{var}(Y)}}
$$