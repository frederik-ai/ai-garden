Suppose we have the raw outputs (logits) of our neural network. We have six output neurons where each neuron gives us the classification value for one of our classes. The problem is, these raw outputs are “arbitrary” values that do not represent any probabilities and than can even take on  negative values. The purpose of softmax is to turn these arbitrary values into probabilities.

Softmax is defined as:
$$
\sigma(x)_j = \frac{e^{z_j}}{\sum_{k=1}^Ke^{z_k}} \quad \mathrm{for} \quad j=1,\dots,k
$$
Whereas $K$ is the total number of classes we want to predict and $j$​ is the one class we currently want to compute the score for.

# Example 

We are given the output vector $(-0.4, 1.2, 0.5, 0.2, 0.01, -0.9)^T$ for our six class classification problem. First lets calculate $\sum^K_{k=1}e^{z_k}$​. This is:
$$
e^{-0.4}+e^{1.2}+e^{0.5}+e^{0.2}+e^{0.01}+e^{-0.9} = 7.06
$$
If we then calculate softmax we get the vector:
$$
(\frac{e^{-0.4}}{7.06}, \frac{e^{1.2}}{7.06}, \frac{e^{0.5}}{7.06}, \frac{e^{0.2}}{7.06}, \frac{e^{0.01}}{7.06}, \frac{e^{-0.9}}{7.06})^T \\ \\ = (0.09, 0.47, 0.23, 0.17, 0.14, 0.06)^T
$$
When we use $\arg\,max$ on this we get that we get the highest classification score for $j=2$ (if index starts at 1).