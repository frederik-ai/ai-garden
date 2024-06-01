---
ID: "091220231401"
tags:
  - statistical-nlp
---
Used for tagging contexts x of a sentence with tags y
-> Approximates probability $p(y|x)$
# Idea
We want our model to learn a distribution $p(y|x)$ while making sure that the expectations of all features match the **empirical expectation** while preserving the highest possible **entropy**.
## Features 
A feature either yields the value 0 or the value 1.
- 1, if x and y fulfill the feature f(x, y)
- 0, if x and y do not fulfill the feature f(x, y)

How do we get the empirical expectation of a feature?
- Marginalize over all x and y and their probability
- $E(f)=\sum_{(x,y)}f(x,y)\cdot p(x,y)$
## Expectations of features
We firstly have the empirical expectation $E(f_j)$. We can calculate this directly from the data.
Then, we have the expectation $E_{\theta}(f_j)$ that our model gives us.

What determines $E_{\theta}(f_j)$? -> How the MEM models the probability distribution $p(y|x)$
So by optimizing $E_{\theta}(f_j)$ via *gradient ascend* we also optimize $p(y|x)$.
# How do we optimize a MEM?
We estimate our parameters such that we maximize $p(D|\theta)$.
What exactly is $\theta$ for a MEM?
- $\theta$ is a vector that assigns each feature a weight

We define a lagrange multiplier
- Maximize the entropy
- With two conditions
	- Sum of all probabilities is 1: $\sum_{x}p(x)=1$
	- The expectation of all features is the same as in our dataset
