**PULSE**

<img src="https://production-media.paperswithcode.com/methods/Screen_Shot_2021-08-04_at_5.45.56_PM.png" alt="PULSE Explained | Papers With Code" style="zoom: 80%;" />

In PULSE we take a trained Generator from a GAN and try to use it to generate images that downscale properly to the given low-res input image.

We have the manifold $\mathcal{M}$ which contains all realistic looking images. Here we want to find the part of the manifold $\mathcal{M}\cap\mathcal{R}$ that contains all high-res images that downscale properly to a given low-res input image.

The question is: How do we find this subspace?

We take a model that can generate realistic images (from the manifold) and then we force it to generate images that also downscale properly to our input -> Via exploring the latent space. We define a loss which measures how similar our downscaled generated image is to the low-res input. We can then nudge the latent space in the direction of the gradient 😊
