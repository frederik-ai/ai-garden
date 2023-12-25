---
ID: "23122023125030"
tags:
  - machine-learning
---
The goal of linear regression is to fit a line/plane/hyperplane to our data $D$ such that each data point $x$ best describes the expected output value $y$.
![[Pasted image 20231223220609.png]]
# Form of our Model
We simply model the function $\hat{y}=w^T\cdot X$
Note that $w$ hereby incorporates the bias and the matrix $X$, which contains all input vectors, has zeroes on the 0th dimension.
# Optimization
There are two possibilities to train a linear regression model. In some cases we can analytically compute the optimal $w$. This is done using the following formula: $w = (X^T X)^{-1} X^T y$. This only works, if we can calculate the so-called peuso-inverse which is defined as $\mathrm{pinv}(X)=(X^T X)^{-1}X^T$.

Otherwise we simply use gradient descend.