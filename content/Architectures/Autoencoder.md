# Classic Autoencoder

An Autoencoder (AE) consists of three parts: The **Encoder**, the **Bottleneck Layer** and the **Decoder**.

---

![img](https://www.researchgate.net/publication/352703131/figure/fig2/AS:1038132996763648@1624521602141/An-example-autoencoder-model-architecture-with-symmetrical-encoder-and-decoder-networks.ppm)

*Architecture of an Autoencoder ([Source](https://www.mdpi.com/1424-8220/21/13/4294))*

---

## Encoder

The Encoder takes the input of our model. Suppose we are working with image data. Then the encoder receives the input image. This part of the NN successively encodes the relevant information of this image onto fewer latent variables. This takes place until we reach the **Bottleneck Layer**.

## Bottleneck Layer

 This is the layer with the fewest neurons in our NN. Here is the latent space where we encode our input and later reconstruct it from. If we want to use our AE for image compression than the values of the neurons make up our compressed representation of the image. 

## Decoder

The Decoder tries to reconstruct our input from the Bottleneck Layer. In normal autoencoders it is only used for training and not for inference. The purose of this part of the network is the following: To make sure that the encoder really selects the most important information from our input, we try to infer the input image from the latent variables. The Decoder has this very task.

## Optimization

The main objective is to minimize the error between the input $x$ and the reconstructed input $\hat{x}$​. This can be formalized as $\mathcal{L}_{\mathrm{VAE}} = ||x-\hat{x}||_2^2$.

---

<img src="https://www.researchgate.net/profile/Noam-Koenigstein-4/publication/339945889/figure/fig1/AS:869554846695424@1584329439701/An-autoencoder-example-The-input-image-is-encoded-to-a-compressed-representation-and.ppm" alt="img" style="zoom: 80%;" />

*Autoencoder for image compression ([Source](https://www.researchgate.net/publication/339945889_Autoencoders))*

---

# Variational Autoencoder

AEs cannot be used for image generation. This is because the output for any given input is deterministic. Variational Autoencoders (VAEs) should solve this. Here we make the latent space probabilistic. We basically sample a set of latent variables and then use the decoder to turn this into a new image. Inversely to the default AE therefore the encoder is only used for training and the decoder is used for inference.

We assume that our latent variables $z$ follow a normal distribution: $p(z) \sim \mathcal{N}(\mu,\sigma)$. Our decoder then models a probability distribution $p(x|z)$. This means that the decoder learns to create an example from the distribution of our training data $x$ when given a random $z$.

For the encoder we introduce a distribution $q(z|x)$​. It learns a mapping from our input data space to the distribution of our latent variables.

---

![img](https://www.mdpi.com/diagnostics/diagnostics-12-02569/article_deploy/html/images/diagnostics-12-02569-g001.png)

*Variational Autoencoder ([Source](https://www.mdpi.com/2075-4418/12/11/2569))*

---

## Optimization

### General Idea

What we actually want to optimize is $\max_\theta \sum_i \log{p_\theta(x_i)}$. We want to find those parameters $\theta$ for which the decoder yields a high probability of generating our input images. The problem is that in order to optimize this we need to know the values of $p_\theta(x_i)$. In our VAE those would be calculated via:
$$
p(x) = \int p(x|z)\cdotp(z) \,\mathrm{d}z
$$
Here we just use the continuous case of the basic law of probability that $P(B)=\sum_A P(B|A) \cdot P(A)$. The problem is this integral that we get in $p(x)$ is absolutely infeasible. We would have to sample a lot of values from the latent space to approximate this integral.

### Actual Optimization Objective

The problem in the previous section shows that we need our encoder for efficient optimization. It learns to know the likelihood of latent values given a specific input example.

The objective is defined as:
$$
\min -\mathbb{E}_{z\sim q_\phi(z|x)}\log p_\theta(x|z) + \mathrm{KL}(q_\phi(z|x)||p_\theta(z))
$$
Firstly $\mathbb{E}_{z\sim q_\phi(z|x)}$ tells us that we want to know the expectation of something when we sample a random $z$ from our distribution $q_\phi(z|x)$ for an input image $x$. By sampling from $q_\phi(z|x)$ we will mostly get latent variables that are actually likely to have been produced by our encoder for the given input $x$. What we then want to maximize the expectation over is $\log p_\theta(x|z)$. This simply means the following: We have now sampled a $z$ for a given $x$ and we want our decoder $p_\theta$ to be likely to produce the datapoint $x$ if it is given our sampled $z$. If this is the case, the decoder has correctly learned what parts of the latent space correspond to which type of output image.

In order to ensure that this latent space is smooth and that neighboring latent values also result in similar outputs, we add a KL-divergence term. It just ensures that if the encoder says that specific latent values $z$ are likely, the decoder should also say that they are likely. Therefore we want those distributions to be similar. This is a **regularization term**.

### Reparametrization Trick

There actually is one problem left. Doing the sampling of $z$ directly is inefficient and it is not differentiable. The latter aspect is necessary in order to do backpropagation.

We assume that $z$ is distributed as a multivariate Gaussian via $q_\phi(z|x)$. Our encoder therefore has to learn the parameters $\mu$ and $\sigma$ that make up our Gaussian $\mathcal{N}(\mu,\sigma)$. Here we now see the problem that we optimize the parameters of the distribution from which we sample. We would have to do backpropagation through this sampling process. To avoid this, we can use the reparametrization trick. 

In the reparamatrization trick we firstly always sample some $\epsilon$ from a standard Gaussian $\mathcal{N}(0,1)$. Then, we use the learned parameters $\mu$ and $\sigma$ to calculate our $z$ as:
$$
z = \mu + \sigma \odot \epsilon \, ,\quad \epsilon \sim \mathcal{N}(0,1)
$$
The parameters are now used in a standard arithmetic operation to obtain our $z$ instead of directly using them in a sampling function. This way, it is possible to od backprop.

What we also see is what the encoder will actually predict. Given an input image $x$ it learns to predict the mean and std of each entry in $z$. This way the encoder gives us a Gaussian distribution which tells us in what areas this image is likely to be contained in our latent space. Thus fulfilling the task of modeling our probability distribution $q_\phi(z|x)$.
