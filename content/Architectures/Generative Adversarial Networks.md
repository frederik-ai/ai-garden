> Originally written in German. Translated from English to German using ChatGPT due to laziness

Generative Adversarial Networks (GANs) utilize unsupervised learning to generate novel samples from the probability distribution of the training data.

These are generative models that do not explicitly model the underlying probability distribution of the data. Instead, they sample directly from the approximated distribution of the training data.

# Idea

A GAN consists of two components: the Generator and the Discriminator. The Generator creates an image from a random input vector. The Discriminator receives an image as input and assesses whether the image is real or artificially generated. Both components are Convolutional Neural Networks (CNNs). The training objective is for the Generator to produce images that the Discriminator cannot distinguish from real training images. As training progresses, the Generator improves in generating images, while the Discriminator improves in distinguishing them. As the Generator's quality improves, the Discriminator must learn more features to recognize artificial images, and vice versa. Thus, the Generator and Discriminator act as direct opponents trying to outwit each other.

The quality of the Generator is determined by how similar the probability distribution it generates ($\hat{p}$) is to the distribution $p$ of the training data. The Discriminator is evaluated on how accurately it can determine whether a given image comes from $\hat{p}$ or $p$. The interaction between the Generator and Discriminator during training is illustrated in the following figure.

---

![Visualisierung der Pipeline eines GAN ([Quelle](https://sthalles.github.io/intro-to-gans/))](../assets/GANs.jpg)

*Visualization of a GAN pipeline ([Source](https://sthalles.github.io/intro-to-gans))*

---

# Training

The cost function for GANs is derived from this interaction. It is called $V(D,G)$

$$
\min_G \max_D V(D,G) = \mathbb{E}_x[\log(D(x))]+ \mathbb{E}_x[\log(1-D(G(z)))]
$$

Training involves a min-max problem. The Generator tries to minimize $V(D,G)$ while the Discriminator tries to maximize it. The goal of training is not, as with traditional neural networks, to approach a function value of 0. Instead, the function should converge to a value greater than 0 over the course of training. At this point, neither the Generator nor the Discriminator can improve further, ideally having optimal parameters. This state is known as a Nash equilibrium, a concept from game theory, appropriate because a GAN can be described as a game between the Generator and Discriminator.

The function $V(D,G)$ is based on a logarithmic loss function. The following term from the cost function represents the error rate of the Discriminator on the real training data:

$$
\mathbb{E}_x[\log(D(x))]
$$

The question is: If I draw a random image $x$ from the training data, how likely is it that the Discriminator classifies it as real? The value for $\log⁡(D(x))$ should be close to 0 because for each real training image $x$ we expect $D(x)$ to output a value close to 1.

The second term describes how many generated images the Discriminator classifies as real. Random $z$ values are drawn from the probability distribution of the input vectors, which can be defined arbitrarily. If the Discriminator is better trained than the Generator, $D(G(z))$ is expected to be close to 0, making the logarithm close to 0. In the opposite case, the logarithm takes on a negative value, with its magnitude increasing as $D(G(z))$ approaches 1.
$$
\mathbb{E}_x[\log(1-D(G(z)))]
$$

The first term of the cost function is not dependent on the Generator but only on $D$ and $x$. The Generator has no influence here and thus cannot be trained by this part of the cost function. The Discriminator has two terms training it, while the Generator has only one. Therefore, the Discriminator is typically shown twice as many fake images as real training data to counteract unequal training of the two GAN components. The optimal state of a GAN is when the Discriminator can identify whether a given image comes from $p(x)$ as well as possible, while the Generator can still fool the Discriminator. Training GANs is sensitive to the chosen hyperparameters and network architecture, with small changes potentially significantly affecting the quality of the generated images.

In practical applications, only the Generator of the GAN is used. The Discriminator is solely used to make $p(G(z))$ approximate $p(x)$ as closely as possible, so the generated images are indistinguishable from real training data.

# Limitations

The previously described architecture of GANs is also known as Vanilla GAN. Researchers and practitioners have identified various limitations and problems with Vanilla GANs, especially concerning specific use cases. One frequently encountered term is Mode Collapse, where the Generator generates the same image for any input. It learns that a particular image can fool the Discriminator and thus generates it every time, regardless of the input.

# References

[Generative adversarial networks | Communications of the ACM](https://dl.acm.org/doi/abs/10.1145/3422622)

[Deep Learning: A Visual Approach](https://nostarch.com/deep-learning-visual-approach)