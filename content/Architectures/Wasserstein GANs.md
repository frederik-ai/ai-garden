This is an extension of the traditional [Generative Adversarial Networks](Generative Adversarial Networks.md) (GANs). Wasserstein GANs are also abbreviated as WGANs.

The motivation is the following:

- Normal GANs are hard to optimize. They often summer from the problem of modal collapse, where the generator procudes the same output image, no matter what latent vector $z$ we feed into it
- Also, traditional GANs have a cost-function that is difficult to interpret. Due to the min-max game between the discriminator and the generator, the losses should converge to some value. They are thus not monotonic and usually decrease at first, but then increase again before reaching a stable point

# Idea

The loss-function we want to model is that the estimated data distribution $\hat{p}(x)$ and the true distribution of the training data $p(x)$ are as similar as possible. This way we can have a monotonic loss.

The idea is that we use a metric which can calculate the distance between two probability distributions. An example is the Kullback-Leibler divergence.

The problem with the existing metrics is the following: Suppose that we have two distributions $\hat{p}(x)$ and $p(x)$ for which we calculate a distance via KL-divergence. If we modify the parameters of the generator, the generated distribution $\hat{p}(x)$ will change slightly. Because the difference between $\hat{p}(x)$ and $p(x)$ changed only a tiny bit, we expect that the loss will also only be marginally different. This is however not the case. The error will most likely change substantially.

Therefore, the KL-divergence and similar metrics are not suitable.

# Wasserstein Distance

Instead, the authors of the WGAN paper use the Wasserstein Distance which is also known as the Earth Movers Distance. It essentially models what amount of *earth* or *mass* we would have to move in order to change on probability distribution into another. The following figure illustrates this a bit:

---

![Schematic of the L 2 -Wasserstein distance. We here consider optimal... |  Download Scientific Diagram](https://www.researchgate.net/publication/349704621/figure/fig1/AS:996752224161799@1614655657970/Schematic-of-the-L-2-Wasserstein-distance-We-here-consider-optimal-transport-from-the.png)

*Visualitation of the Wasserstein Distance ([Source](https://www.researchgate.net/figure/Schematic-of-the-L-2-Wasserstein-distance-We-here-consider-optimal-transport-from-the_fig1_349704621))*

---

A more friendly illustration might be the next one. Here we see that for the Wasserstein Distance we actually compare at each point of the distribution what amount of mass we would have to add or remove to make it similar to the target distribution.

---

![Measuring dataset similarity using optimal transport - Microsoft Research](https://www.microsoft.com/en-us/research/uploads/prod/2020/09/OTDD_Shovel-Figure.png)

*Another visualization ([Source](https://www.microsoft.com/en-us/research/blog/measuring-dataset-similarity-using-optimal-transport/))*

---

# In Practise

In reality, the Wasserstein Distance is too costly to calculate. A few tricks are applied by the authors to approximate the Wasserstein Distance such that it is simpler to obtain.