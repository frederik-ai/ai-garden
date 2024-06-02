**Autoencoder**

# Classic Autoencoder

An Autoencoder (AE) consists of three parts: The **Encoder**, the **Bottleneck Layer** and the **Decoder**.

![img](https://www.researchgate.net/publication/352703131/figure/fig2/AS:1038132996763648@1624521602141/An-example-autoencoder-model-architecture-with-symmetrical-encoder-and-decoder-networks.ppm)

*Architecture of an Autoencoder ([Source](https://www.mdpi.com/1424-8220/21/13/4294))*

---

<img src="https://www.researchgate.net/profile/Noam-Koenigstein-4/publication/339945889/figure/fig1/AS:869554846695424@1584329439701/An-autoencoder-example-The-input-image-is-encoded-to-a-compressed-representation-and.ppm" alt="img" style="zoom: 80%;" />

*Autoencoder for image compression ([Source](https://www.researchgate.net/publication/339945889_Autoencoders))*

---

## Encoder

The Encoder takes the input of our model. Suppose we are working with image data. Then the encoder receives the input image. This part of the NN successively encodes the relevant information of this image onto fewer latent variables. This takes place until we reach the **Bottleneck Layer**.

## Bottleneck Layer

 This is the layer with the fewest neurons in our NN. Here is the latent space where we encode our input and later reconstruct it from. If we want to use our AE for image compression than the values of the neurons make up our compressed representation of the image. 

## Decoder

The Decoder tries to reconstruct our input from the Bottleneck Layer. In normal autoencoders it is only used for training and not for inference. The purose of this part of the network is the following: To make sure that the encoder really selects the most important information from our input, we try to infer the input image from the latent variables. The Decoder has this very task.

## Optimization

The main objective is to minimize the error between the input $x$ and the reconstructed input $\hat{x}$​.

# Variational Autoencoder

AEs cannot be used for image generation. This is because the output for any given input is deterministic. Variational Autoencoders (VAEs) should solve this. Here we make the latent space probabilistic. We basically sample a set of latent variables and then use the decoder to turn this into a new image. Inversely to the default AE therefore the encoder is only used for training and the decoder is used for inference.

We assume that our latent variables $z$ follow a normal distribution: $p(z) \sim \mathcal{N}(\mu,\sigma)$. Our decoder then models a probability distribution $p(x|z)$. This means that the decoder learns to create an example from the distribution of our training data $x$ when given a random $z$.

For the encoder we introduce a distribution $q(z|x)$. It learns a mapping from our input data space to the distribution of our latent variables.

![img](https://www.mdpi.com/diagnostics/diagnostics-12-02569/article_deploy/html/images/diagnostics-12-02569-g001.png)

*Variational Autoencoder ([Source](https://www.mdpi.com/2075-4418/12/11/2569))*

## Optimization
