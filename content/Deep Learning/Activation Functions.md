**Activation Functions**

The purpose of activation functions is to introduce non-linearity into our models. Otherwise we would just do a fancy linear regression. This is because in an MLP the output of the last layer could be expressed as a linear combination of the input.

# Sigmoid

The sigmoid activation function maps real numbered inputs to the range $[0;1]$​. Its outputs can be interpreted as probabilities although they are usually no real probabilities.
$$
\sigma(x) = \frac{1}{1+e^{-x}}
$$

<img src="https://miro.medium.com/v2/resize:fit:970/1*Xu7B5y9gp0iL5ooBj7LtWw.png" alt="Activation Functions in Neural Networks | by SAGAR SHARMA | Towards Data  Science" style="zoom:80%;" />

<center>Sigmoid function (<a href="https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6">Source)</a></center>

# ReLU

$$
\mathrm{ReLU}(x) = \max{(0, x)}
$$

# Swish

Discovered by Google during [Neural Architecture Search (NAS)](Neural Architecture Search (NAS).md). 

