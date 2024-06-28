> Good video by Andrew Ng about Batchnorm: https://www.youtube.com/watch?v=nUUqwaxLnWs&t

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

Now suppose that we know about this problem and therefore use a non-saturating activation function such as ReLU. We can still have this problem of internal covariance shift. If we look at some hidden layer, it receives input activations and computes its own outputs from this. If the activations of the previous layer change a lot during training, our hidden layer will have a hard time adjusting its parameters to do meaningful calculations on these fluctuating activation values. 

We basically want a way to stabilize the input values of our hidden layers. Training a neural network can kind of be seen as a game of "telephone". If the earlier layers have a lot of fluctuation and unstable behaviour the concurrent layers need many more training examples to learn a stable mapping to our output value $y$. This fluctuation in the earlier layers of course also just happens because of normal training behaviour. 

# Solution

Batch Normalization ensures that activations always move around a constant mean with a certain standard deviation. For this purpose, Batch Normalization has two learnable parameters that scale the output values of the neuron before they are fed into the activation function. Batch Normalization is basically calculated as follows:

## 1. Step: Standardization

$$
\hat{x} = \frac{x-\mathrm{mean}(x)}{\mathrm{std(x)}}
$$

With the variable $x$ we denote the input values to our current layer. So these are the output activations of the previous layer. We standardize them such that they have a mean of zero and unit variance.

We only do this for our current training batch. Not the whole training set.

## 2. Step: Shifting the values

Batch Normalization has to trainable parameters: $\gamma$ and $\beta$.

We shift the activations according to these parameters with the following formula:
$$
\mathrm{BN}_{\gamma, \beta}(\hat{x}) = \hat{x}\cdot \gamma + \beta
$$
The parameters therefore have the following purposes:

- $\gamma$ scales our activations to some value
- $\beta$ shifts our activations to some value

The question is: Why don't we just use zero mean and unit variance, but instead scale to learnable parameters? *(I still don't understand this fully and will therefore leave it blank for now)*

# Effects of Batch Normalization

Batch Normalization actually has multiple positive effects on training.

Firstly, it reduces training time because of the increased stability of gradients. The authors of the original Batch Normalization show that their model achieves the same accuracy as a control model without Batch Normalization with 14 fewer training steps.

Secondly, it leads to some form of regularization. This is because in the [standardization](##1. Step Standardization) we compute the mean and variance of our mini batch. Not of our whole training data. Therefore, the mean and variance are a bit noisy each time which has slight regularization effects. Batch normalization is usually not used together with [Dropout](Dropout.md).

Other effects:

- We can train with a higher learning rate
- The network activations have a more uniform distribution (purpose of Batch Normalization)
- Better generalization ability, because the parameters $\gamma$ and $\beta$ are initialized randomly

Batch Normalization of course also has some disadvantages. One of them is that it does not work well for sequenced data and for small batch sizes. The latter is the case, because we standardize our data over a single mini batch. If the batch size is small, the mean and variance will be highly noisy and therefore not a good approximator for the mean and variance of the whole dataset.

# Sources

[Internal Covariate Shift: An Overview of How to Speed up Neural Network Training](https://medium.com/analytics-vidhya/internal-covariate-shift-an-overview-of-how-to-speed-up-neural-network-training-3e2a3dcdd5cc)

[Batch Normalization: Accelerating Deep Network Training by...](https://arxiv.org/abs/1502.03167)
