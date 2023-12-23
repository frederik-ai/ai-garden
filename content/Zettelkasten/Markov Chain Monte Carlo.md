---
aliases:
  - MCMC
---
081220232338
Tags: #cognitive-computing #sampling 
# Motivation
Markov Chain Monte Carlo is used to sample from a given multivariate distribution.
Why do we need this?

Let's look at the simplest way to sample from a distribution:
- We have a distribution $p(x_1, x_2, x_3, x_4)$ and we would like to sample from this
- However, it is difficult to integrate $p$, therefore we cannot calculate the cumulative distribution
- So we randomly pick a set of states $(x_1, x_2, x_3, x_4)$
	- For example: $(0, 1, 1, 1)$, $(1, 1, 1, 1)$, $(0, 0, 1, 1)$
	- Each of these state sequences is a sample
- Accept a sample with the probability that the given states occur
	- Example: Accept sample $(0, 1, 1, 1)$ with probability $p(x_1=0, x_2=1, x_3=1, x_4=1)$
What we have described is the easiest form of [[Rejection Sampling]]

What is the problem with this primitive form of rejection sampling?
- We have to discard a lot of samples, because we generate many samples that are unlikely
- In the example we had binary values for our variables, for continuous values this is even more the case

MCMC sampling can solve this problem
# Idea
With MCMC we do not create samples arbitrarily. Instead, create more likely samples with a higher probability.

How do we do this?
- We create a random sample
- We assume that the next sample only depends on the previous sample
	- Markov property $p(x_t|x_{t-1}, x_{t-2},... ,x_0) = p(x_t|x_{t-1})$
- Create a new sample based on this previously sample
- If we do this for enough iterations, we converge to the actual distribution and the initial sample $x_0$ is negligible
# Algorithms
There are different algorithms to implement MCMC:
[[Gibbs Sampling]]
[[Metropolis (Random Walk) Sampling]]
[[Metropolis-Hastings Sampling]]