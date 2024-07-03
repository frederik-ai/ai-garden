> Originally written in German. Translated from English to German using ChatGPT due to laziness

Suppose I have two random variables $X$ and $Y$. The question arises: How are these variables related to each other? One way to explore this relationship is through covariance.

# Intuition

Example: $X$ is the per capita consumption of chicken, and $Y$ represents the total import amount of crude oil in the USA. We want to know if there is a linear relationship between the two. If people consume less chicken, is there also less oil imported? Conversely, if people eat more chicken, is more oil generally imported? This would lead to a positive covariance. A negative covariance would exist if high values of $X$ are generally associated with low values of $Y$, and vice versa.

The following figure illustrates this idea. Here, *cov* stands for *Covariance*.

---

![Visualization of different covariances of $X$ and $Y$ ([Source](https://byjus.com/maths/covariance/))](../../assets/covariance-2.png)

*Visualization of different covariances of $X$ and $Y$​ ([Source](https://byjus.com/maths/covariance/))*

---

Note: The seemingly absurd example of chicken consumption and the amount of crude oil imports in the USA actually shows a covariance (or correlation) between the two variables.

# Mathematical Idea

Covariance calculates the following: If $X$ is less than its mean, how does $Y$ differ from its mean? Similarly, if $Y$ is greater than its mean, what does that mean for $X$?

$$
\mathrm{cov}(X, Y) = \frac{1}{n-1}\sum (\bar{x}-x_i)(\bar{y}-y_i)
$$

If both values are simultaneously less than their mean, the product $(\bar{x} - x_i)(\bar{y} - y_i)$ is always positive. If they are both simultaneously greater than their mean, the product is also positive. Therefore, the sum results in a positive value.

If $Y$ is greater than its mean whenever $X$ is less than its mean, and $Y$ is also less than its mean whenever $X$ is greater than its mean, we get a negative covariance.

# Sources

[Spurious Correlations](http://www.tylervigen.com/spurious-correlations)

[Covariance in Statistics (Definition and Examples)](https://byjus.com/maths/covariance/)
