---
ID: "23122023121659"
tags:
  - machine-learning
  - classification
---
# Main idea
Suppose we have our features $x_1, x_2, ..., x_n$ and the class label $y$. The naive Bayes classifier assumes that all of these features are [[Independent and Identically Distributed|i.i.d.]] For this reason we can write:
$$P(y|x)=\prod_i P(y|x_i)$$
This is a strong assumption, because can we really know that all features are totally independent of each other? Of course not, but for tasks such as spam classification Naive Bayes still seems to work quite well.
# How to train
We first have to pick the distribution that we take our $x_i$ from. For continuous values (e.g. body weight) we could use a Gaussian distribution. In this case each feature $x_i$ follows a bell-curve. For true/false features (e.g. unemployed) we could use a Bernoulli distribution.

Each distribution for each feature has trainable parameters. The Gaussian distribution depends on $\mu$ and $\sigma$ whereas the Bernoulli distribution depends on a probability $\theta$. We choose those parameters for an $x_i$ that best fit the relationship between $x_i$ and $y$.

The following image shows and example of the Gaussian distributions for the features $x_1$ and $x_2$ given a two-class classification dataset. The absolute values of the distributions don't make sense, because they are scaled. Important is what these curves look like.
![[Pasted image 20231223123454.png]]
source: Own figure
# How to classify
