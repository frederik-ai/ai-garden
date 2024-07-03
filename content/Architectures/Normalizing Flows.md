---

![Flow-based models for Data generation(Normalizing Flows) | by Sthanikam  Santhosh | Medium](https://miro.medium.com/v2/resize:fit:1400/1*ApB1BaAy1lYu2ZTp2gpkqQ.png)

*Visualization of Normalizing Flow Procedure ([Source]([Flow-based models for Data generation(Normalizing Flows) | by Sthanikam Santhosh | Medium](https://medium.com/@sthanikamsanthosh1994/flow-based-models-for-data-generation-normalizing-flows-f6db41ac513a)))*

---

The idea of these kinds of models is the following:

- We have an input $x$
- We have a composition of multiple transformations that map this $x$ to a unique point $z$ in the latent space. Note that the latent space has the same dimension as the input
- These transformations are given by the function $f$. This means $z = f(x)$
- Our function $f$ is composed of lots of small transformations $f_1, f_2, f_3,...$ which are applied one after another. All of these transformations are invertible, which makes $f(x)$ invertible
- We can therefore use this to reconstruct the individual input when given some latent values $z$

This is used as a generative model. We are therefore actually not interested in reconstructing inputs, but we want to generate novel samples given Gaussian distributed latent values $z$. The idea is that we take these Gaussian distributed values and step by step apply our inverted transformations. This successively turns the data distribution into a more complex one. Up until the distribution is complex enough to model the high complexity of our problem domain (e.g. natural image generation).

---

![The Expressive Power of Normalizing Flow Models | UCSD Machine Learning  Group](https://ucsdml.github.io/assets/2020-11-16-nf/nf_model.png)

*Illustration of successive generation of more complex data distributions using Normalizing Flows. In each step an inverse transformation is applied to $z$. We do this until we get a distribution from which we can actually sample an $x$ ([Source](https://ucsdml.github.io/jekyll/update/2020/11/16/expressive-power-normalizing-flows.html))*

---

What we want to get in the end is $p(x)$. This is the true distribution of our training data. It is given as follows:
$$
z \sim \pi(z)
$$

$$
z = f_K \circ \, ... \, \circ f_3 \circ f_2 \circ f_1(x)
$$

$$
p(x) = \pi(z) \cdot |\det(\frac{\partial z}{\partial x})|
$$

