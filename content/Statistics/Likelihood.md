>  Originally written in German. Translated from English to German using ChatGPT due to laziness

# Difference from Probability

An example of a probability distribution is the Gaussian function. It is given by:

$$
p(x|\mu, \sigma) = \frac{1}{\sqrt{2\pi \sigma^2}}\cdot e^{-\frac{(x-y)^2}{2\sigma^2}}
$$

Let's assume the parameters $\mu$ and $\sigma$ are fixed. If we take a dataset of points $x$, we are interested in determining the probability values of these points. By using the same function, we can try different datasets and determine the probability of the dataset.

Likelihood analysis takes a different perspective. Considering the given Gaussian function, in likelihood analysis, $\mu$ and $\sigma$ are unknown, while our dataset is fixed. We thus consider a likelihood function $L(\mu, \sigma|x)$.

> [!tip]
>
> 1. In a probability function, the parameters are fixed. Thus, we have a fixed distribution, and we can vary the data to evaluate their probability.
> 2. In the likelihood function, the data are fixed, while the parameters of our probability distribution can vary. This allows us to assess how well a distribution represents the given data.

# Maximum Likelihood Method

Ultimately, the Maximum Likelihood Method means the following: By maximizing $p(x|\mu, \sigma)$ for a fixed dataset, we attempt to find the optimal parameters for our probability distribution.

For easier computation, we typically maximize $\log(p(x|\mu, \sigma))$ instead of $p(x|\mu, \sigma)$.

Our goal is thus to compute:

$$
arg\,max_{\mu, \sigma} \log(p(x|\mu, \sigma))
$$

# Negative Log-Likelihood

Optimization algorithms usually aim to minimize an objective function. As described, our problem is to maximize the likelihood of our data. Ideally, we convert our maximization problem into a minimization problem.

What we can simply do instead is to minimize the so-called Negative Log-Likelihood (NLL). The NLL is given by:

$$
\mathrm{NLL} = -\log(p(x|\mu, \sigma))
$$
