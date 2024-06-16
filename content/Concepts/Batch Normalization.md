# Use Case

In neural networks, an *Internal Covariance Shift* can occur, especially during mini-batch training. *Internal Covariance Shift* means that the values of activations strongly depend on the parameters of the model.

**Example**: Consider the sigmoid activation function. If the parameter values of a neuron change, the distribution of activations also changes. Oversaturation may occur, where most output values of the neuron are near the maximum or minimum value of the activation function.

**Problem:** The derivative of the $\sigma$ function is **small** for oversaturated values. As a result, this neuron hardly changes its weights during backpropagation, leading to the vanishing gradient problem.

---

![img](https://miro.medium.com/v2/resize:fit:400/0*wJnwYi8AVJnaT0IK)

*Sigmoid Activation Function ([Source](https://medium.com/analytics-vidhya/internal-covariate-shift-an-overview-of-how-to-speed-up-neural-network-training-3e2a3dcdd5cc))*

---

![img](https://miro.medium.com/v2/resize:fit:512/0*XT_wNAgbgaZu4srM)

*Derivative of the Sigmoid Activation Function ([Source](https://medium.com/analytics-vidhya/internal-covariate-shift-an-overview-of-how-to-speed-up-neural-network-training-3e2a3dcdd5cc))*

---

# Solution

Batch Normalization ensures that activations always move around a constant mean with a certain standard deviation. For this purpose, Batch Normalization has two learnable parameters that scale the output values of the neuron before they are fed into the activation function.

# Sources

[Internal Covariate Shift: An Overview of How to Speed up Neural Network Training](https://medium.com/analytics-vidhya/internal-covariate-shift-an-overview-of-how-to-speed-up-neural-network-training-3e2a3dcdd5cc)

[Batch Normalization: Accelerating Deep Network Training by...](https://arxiv.org/abs/1502.03167)
