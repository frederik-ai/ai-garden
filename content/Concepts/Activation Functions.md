The purpose of activation functions is to introduce non-linearities into our model. There exist numerous activation functions for different purposes. They can be classified into saturating and non-saturating activation functions.

# Saturating

Saturating activation functions limit the output value to some upper and lower bound. They are not suitable to be used in many consecutive layers. This is because it can quickly lead to the  [Vanishing Gradient Problem](Vanishing Gradient Problem.md). These activation functions can for example be used in the output layer.

## Sigmoid

The sigmoid activation function maps our input space from $[-\inf, +\inf]$ to outputs in the range $[0,1]$.

It can be used to map our logits to a binary classification task. We then use the binary crossentropy loss for optimization.

---

![img](https://miro.medium.com/v2/resize:fit:400/0*wJnwYi8AVJnaT0IK)

*Sigmoid Activation Function ([Source](https://medium.com/analytics-vidhya/internal-covariate-shift-an-overview-of-how-to-speed-up-neural-network-training-3e2a3dcdd5cc))*

---

# Non-Saturating

These kind of activation functions allow for infinitely high activations in the positive direction. In the negative direction we ideally still have some form of saturation (something similar to a lower bound).

## ReLU

$$
\mathrm{ReLU}(z) = \max(0, z)
$$

The ReLU activation function is piece-wise linear. For inputs $z<0$ it yields the value $0$. For inputs $z\ge0$ it yields the identity $z$.

---

<img src="https://www.researchgate.net/publication/319235847/figure/fig3/AS:537056121634820@1505055565670/ReLU-activation-function.png" alt="ReLU activation function | Download Scientific Diagram" style="zoom: 120%;" />

*ReLU Activation Function ([Source]("https://www.researchgate.net/publication/319235847/figure/fig3/AS:537056121634820@1505055565670/ReLU-activation-function.png))*

---

This activation function is very popular. But, it technically has two issues:

1. For $z=0$ the gradient of the ReLU function is undefined.
2. Neuron weights will not receive any update if the pre-activation outputs of the neuron are negative (e.g. $z=w^T\cdot x < 0$). This is known as the “dying neuron” problem.

A good thing is that for all $z>0$ the derivative is one. This is what we ideally want. Plus, this activation function and its derivate are easy to compute. There are different similar activation functions which try to solve the issue that the neurons don’t learn anything for $z<0$.

### Leaky ReLU

This is essentially the same as the ReLU function, but it returns a scaled down version of the identity for $z<0$. This way we still get a gradient $\nabla_{\vec{w}} \neq 0$.
$$
\mathrm{LeakyReLU}(z) = max(\alpha \cdot z, z)
$$

---

<img src="https://production-media.paperswithcode.com/methods/Screen_Shot_2020-05-25_at_3.09.45_PM.png" alt="Leaky ReLU Explained | Papers With Code" style="zoom:60%;" />

*Leaky ReLU ([Source](https://production-media.paperswithcode.com/methods/Screen_Shot_2020-05-25_at_3.09.45_PM.png))*

---

## Swish

The Swish activation function is given as:
$$
\mathrm{Swish}(z) = z \cdot \sigma(\beta\cdot z)
$$
whereas $\sigma$ is the Sigmoid activation. Swish has a hyperparameter $\beta$. If we set it large, Swish as well as its derivative behave similarly to ReLU. For smaller values of $\beta$ the function becomes more smooth and the derivative has less of a cut-off at around $z=0$.

---

<img src="https://production-media.paperswithcode.com/methods/Screen_Shot_2020-05-27_at_2.02.25_PM.png" alt="Swish Explained | Papers With Code" style="zoom:67%;" />

*Swish for different values of $\beta$ ([Source](https://production-media.paperswithcode.com/methods/Screen_Shot_2020-05-27_at_2.02.25_PM.png))*

---

---

<img src="https://www.researchgate.net/publication/326367948/figure/fig1/AS:647797162377219@1531458287990/aReLU-and-Swish-Functions-bDerivative-of-ReLU-and-Swish.png" alt="a)ReLU and Swish Functions (b)Derivative of ReLU and Swish | Download  Scientific Diagram" style="zoom:80%;" />

*Comparison of ReLU and Swish for $\beta=1$. On the right image the derivatives of both activation functions are shown ([Source](https://www.researchgate.net/publication/326367948/figure/fig1/AS:647797162377219@1531458287990/aReLU-and-Swish-Functions-bDerivative-of-ReLU-and-Swish.png))*

---

