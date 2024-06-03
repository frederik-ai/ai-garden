> Originally written in German. Translated from English to German using ChatGPT due to laziness

# Problem Statement

The goal of training neural networks is to solve an optimization problem for the parameter configuration $\vec{\theta}$. We seek the parameters of the network that cause the minimal cost $J$ on the test data.

For this, [Gradient Descent](https://www.notion.so/Gradient-Descend-dcfe4d6cf4ba44dc893aa92fbad2c6c9?pvs=21) is traditionally used. This algorithm iteratively approximates the global minimum of the cost function and finds the corresponding parameter configuration $\vec{\theta}$.

---

![Visualization of the Gradient Descent Algorithm ([Source](https://blog.paperspace.com/intro-to-optimization-in-deep-learning-gradient-descent/))](../assets/backprop.gif)

*Visualization of the Gradient Descent Algorithm ([Source](https://blog.paperspace.com/intro-to-optimization-in-deep-learning-gradient-descent/))*

---

Backpropagation is a necessary algorithm to use Gradient Descent. Here, we determine how much each individual parameter $[\vec{\theta}]_i$ contributes to the current error of the model. The stronger this contribution, the greater the change of the respective parameter.

# Algorithm

Backpropagation consists of three steps:

1. *Forward Pass*
2. Error Calculation
3. *Backward Pass*

## Forward Pass

In the Forward Pass, our model gives us a prediction $\hat{y}$ for a certain input $x$ from the training data. We thus use our model for inference and observe an output.

## Error Calculation

In the next step, we compare the model's prediction $\hat{y}$ with our *Ground Truth Label* $y$. Here, we apply our chosen error metric and thereby obtain a value for the cost function $J$.

## Backward Pass

We are now at a certain point of the cost function. We seek the gradient of the cost function to iteratively reduce the costs in the next step. The Backward Pass is used to calculate the gradient.

The gradient of the cost function is obtained by the partial derivative with respect to all parameters.

$$
\Delta_{\vec{\theta}} J=[\frac{\partial J}{\partial [\vec{\theta}]_1}, \frac{\partial J}{\partial [\vec{\theta}]_2}, ...]^T
$$

These partial derivatives cannot be calculated directly, as our neurons are arranged in layers. The output value of Layer 2 does not directly depend on the input $x$, but on the output of Layer 1.

This propagation of output values from one layer as input values for later layers can be represented as a chain of functions.

To calculate the partial derivatives, we can use the chain rule.

To change a single parameter, we do not need to differentiate $f$ with respect to all parameters but with respect to each parameter individually. Just like the cost function $J$, $f$ is a chain of multiple functions. Assuming we use *Stochastic Gradient Descent* with the *Mean Squared Error* as the *Loss Function*, the value of the cost function is calculated as follows:

$$
J(\theta) = \frac{1}{2}(f(x; \theta) - y)^2 
$$

Here, $f(x;\theta)$ is our model that gives a prediction for a given input value $x$. If we want to partially differentiate this function with respect to the parameters, we encounter the following problem: $f(x;\theta)$ is a chained function. The function value of the last layer depends on the function value of the previous layer, which in turn depends on the function value of the layer before that. We can use the chain rule to our advantage.

### Chain Rule

In general, for chained functions:

$$
u(v(x))' = u'(v(x)) \cdot v'(x)
$$

For our purposes, it is useful to formulate this term as:

$$
\frac{\mathrm{d}}{\mathrm{d}x}u(v(x)) = \frac{\mathrm{d}}{\mathrm{d}v(x)}u(v(x)) \cdot \frac{\mathrm{d}}{\mathrm{d}x}v(x)
$$

Or with partial derivatives:

$$
\frac{\partial u}{\partial x} = \frac{\partial u}{\partial v}\cdot \frac{\partial v}{\partial x}
$$

### Chain Rule Applied to the Cost Function

We first apply the chain rule to our cost function:

$$
\frac{\partial J}{\partial \theta} = \frac{\partial J}{\partial f} \cdot \frac{\partial f}{\partial \theta}
$$

$$
\frac{\partial J}{\partial \theta} = (f(x;\theta) - y) \cdot \frac{\partial f}{\partial \theta}
$$
