>  A very good explanation of diffusion models is available here: [Step by Step visual introduction to Diffusion Models. - Blog by Kemal Erdem](https://erdem.pl/2023/11/step-by-step-visual-introduction-to-diffusion-models)

The general idea of diffusion models is the following:

- Take an image and gradually apply gaussian noise to it until the image is not recognizable anymore
- Use a model that can gradually reverse this process, using multiple (e..g. 100) inferences to gradually remove noise until we come back to the original image
- This can then be used to generate new images from random noise

<img src="https://media.licdn.com/dms/image/D5612AQEB79ydygAGQQ/article-cover_image-shrink_720_1280/0/1702188892689?e=2147483647&v=beta&t=FNe58VxLRLkeSQqVJZV4WuwukU16_0fSAA9HgWa0-RM" alt="Diffusion Model for Generative Image Synthesis" style="zoom:80%;" />

# Mathematical Foundation

Diffusion models implement a Markov Chain. Each denoising process only depends on the previous one. We can therefore decompose our joint probability distribution of all denoising stages into a multiplication of conditional probabilities:
$$
p(x_{0:T}) = p(x_T)\cdot \prod_{t=1}^{T} p(x_{t-1}|x_t)
$$
The probabilities $p$ are estimated by the model --> depend on the parameters $\theta$.

## Forward Process

Our forward process is where we add noise. It is modeled by a function $q$:
$$
q(x_{1:T}|x_0) = \prod^{T}_{t=1} q(x_t|x_{t-1})
$$
We get some input image $x_0$. Each forward process $q(x_t|q_{t-1})$ then adds a bit of noise to it. A single forward process is defined as follows:
$$
q(x_t|x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t}\cdot x_{t-1}, \beta_t\cdot I)
$$
To get from a timestep $t-1$ to $t$ we take a Gaussian centered around the pixel-values of the previous step. The forward process can actually be calculated in a single step. We don’t need an iterative procedure for this. For simplicity I will not mention here how it works.

## Backward process

A single step in the backward process is defined as follows:
$$
p_\theta(x_{t-1}|x_{t}) = \mathcal{N}(x_{t-1}; \mu_{\theta}(x_{t}, t), \Sigma_\theta(x_t, t))
$$
Here we remove a little bit of noise from our noisy image $x_t$. This is also modeled as a Gaussian distribution. We essentially assume that given a noisy input, the images that we can retrieve from this noise are also distributed as a Gaussian.

> [!NOTE] 
>
> Our model does not predict a denoised image $x_{t-1}$. Given an input $x_t$ our model instead predicts the **entire noise** in the image. So if we would subtract this noise from the noisy image, we should directly get to our original image $x_0$. However, while the image is very noisy our model cannot know what $x_0$ should look like. We therefore add a schedule that at the beginning only subtracts a small amount of the predicted noise. In each time step the model newly predicts the total noise in the image and we remove this noise with an increasing amount until we reach our approximate of $x_0$.

In reality we use the reparamatrization trick to make the backward process differentiable. This is similar to the approach used in  [Variational Autoencoders](Autoencoder.md).

The following image shows for different denoising steps what noise the model predicts and what the output would look like if we were to completely remove the noise from the input $x_t$.

<img src="https://erdem.pl/static/90207efb3cb80cde5f359b2205b0303a/0f840/sample_full_noise_removal.jpg" alt="process with full noise removal" style="zoom:67%;" />

# Optimization

What we basically want to optimize is the NLL of 
