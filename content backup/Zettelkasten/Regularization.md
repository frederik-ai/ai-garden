---
ID: "23122023213237"
tags:
  - machine-learning
---
Regularization helps us constrain our model to how it should learn its parameters. Example: In [[Linear Regression]] the weight vector $w$ should have small values. We add a regularization term to the loss-function that punishes the model if it does not conform to this constraint.

# Effect on Loss-Function
For linear regression the new loss function could look like this:
$J(w)=\textrm{MSE} + \lambda\cdot||w||^2_2$ 
Whereas $\textrm{MSE}$ is the mean squared error which is a usual loss-function for linear regression. To keep the weights $w$ small we also add the term $\lambda\cdot||w||^2_2$ to the loss-function. It calculates the squared sum of vector values for $w$. The higher the values for $w$, the higher the loss-function. The influence of the regularization term is determined by the hyperparameter $\lambda$.
# A Bayesian Perspective
A regularization term can be considered an added **prior** term. Our prior assumption is for example that our model should keep its weights as small as possible.
This means now that we do not compute the **Maximum Likelihood Estimator**, but the **Maximum A-Posteriori Estimator**.

Maximum Likelihood:
$\theta_{ML} = \underset{\theta}{\operatorname{argmax}} P(x|y,\theta)$

Maximum A-Posteriori;
$\theta_{ML} = \underset{\theta}{\operatorname{argmax}} P(x|y,\theta)\cdot P(\theta)$
