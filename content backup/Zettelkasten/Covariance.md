---
ID: "30122023103539"
tags:
  - statistics
---
Suppose I have two random variables $X$ and $Y$. What I am now interested in: How do these variables relate?
# Intuition
Example: $X$ is the *per capita consumption of chicken* and $Y$ represents the *total US crude oil imports*. We would like to know if there is a linear relationship between the two. If people do not consume much chicken, are there also little oil imports? Likewise, if people eat more chicken, is generally more oil imported? This would result in a positive covariance. A negative covariance would be if high values of $X$ generally appear together with low values of $Y$ and vice versa.

The following figure demonstrates this idea:
![[Pasted image 20231230104049.png]]
# Mathematical Idea
The covariance calculates the following: If $X$ is smaller than its mean, how does $Y$ differ from its mean? Also, if $X$ is greater than its mean, what does this mean for $Y$?

$$\mathrm{cov}(X, Y) = \frac{1}{n-1}\sum (\bar{x}-x_i)(\bar{y}-y_i)$$
If both values are simultaneously smaller than their mean the product $(\bar{x} - x_i)(\bar{y} - y_i)$ is always positive. If they are also simultaneously greater than their mean, the product is positive as well. Therefore the sum yields a positive value.

If $Y$ is greater than its mean whenever $X$ is smaller than its mean **and** $Y$ is also smaller than its mean when $X$ is greater than its mean, we get a negative covariance.
# References
[Spurious Correlations (tylervigen.com)](http://www.tylervigen.com/spurious-correlations)
[Covariance in Statistics (Definition and Examples) (byjus.com)](https://byjus.com/maths/covariance/)