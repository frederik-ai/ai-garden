This is the problem that during gradient descend, the gradients of our loss-function approach zero. If this happens, the weights will not be significantly updated. The model is stuck in a parameter configuration.

# How does this happen?

The vanishing gradient problem can occur if we have an activation function with a non-linear derivative. Take the sigmoid function for example:

![Derivative of the Sigmoid function | by Arc | Towards Data Science >](https://miro.medium.com/v2/resize:fit:1400/1*6A3A_rt4YmumHusvTvVTxw.png)

For $x < -2.5$ and $x > 2.5$ the derivative of the sigmoid function begins to approach zero. If our activations are in these saturated regions, our network will hardly learn anything.

# How to mitigate it?

We can use [Batch Normalization](Batch Normalization.md) to move our activation values to a particular mean value. In the sigmoid function we could for example use a mean of $0$ and an std of $2.5$​.
