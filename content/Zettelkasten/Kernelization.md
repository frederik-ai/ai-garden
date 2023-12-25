---
ID: "24122023220721"
tags:
  - machine-learning
aliases:
  - Kernel Trick
---
# Problem
Suppose we have a linear regression model. The model should learn the following distribution:
![[Pasted image 20231224220843.png]]
Imagine that the x-axis shows the single input feature $x$ and the y-axis shows the expected output $y$.

Because the relationship between $x$ and $y$ is not linear a linear regression model cannot make accurate predictions on this dataset.

# Solution
## Simple approach (Polynomial Processing)
The simple approach would be to apply polynomial processing to our data. We add one dimension to our input vector. For the following generalization we assume that our data points have $n$ features instead of just one.
Previously an input vector looked like this: $x = [x_1, ..., x_n]$
Now we add the square of each feature. We get a new input vector with additional polynomial features: $\tilde{x}=[x_1, {x_1}^2, ..., x_n, {x_n}^2]$
For a degree of 3 the new input vector would look like this: $\tilde{x}=[x_1, {x_1}^2, {x_1}^3, ..., x_n, {x_n}^2, {x_n}^3]$

This way, our regression problem becomes $y=w^T\cdot \tilde{x} + b$

The main problem of this approach is its performance. We artificially add many new features to our data which increases the number of parameters our model has to learn.
## Better approach 👍 (Kernel Trick)

We can use the **kernel trick** to make this problem solvable with a linear function.