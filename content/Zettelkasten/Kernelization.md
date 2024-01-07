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
Imagine that the x-axis shows the single input feature $x$ and the y-axis shows the expected output $y$. Because the relationship between $x$ and $y$ is not linear a linear regression model cannot make accurate predictions on this dataset.

# Solution
We can solve this by adding new dimensions to our input data. The following image shows what we want to achieve (here for classification, not regression; but it works for both):
![[Pasted image 20231225210656.png]]
## Simple approach (Polynomial Processing)
The simple approach would be to apply polynomial processing to our data. We add one dimension to our input vector. For the following generalization we assume that our data points have $n$ features instead of just one.
Previously an input vector looked like this: $x = [x_1, ..., x_n]$
Now we add the square of each feature. We get a new input vector with additional polynomial features: $\tilde{x}=[x_1, {x_1}^2, ..., x_n, {x_n}^2]$
For a degree of 3 the new input vector would look like this: $\tilde{x}=[x_1, {x_1}^2, {x_1}^3, ..., x_n, {x_n}^2, {x_n}^3]$

This way, our regression problem becomes $y=w^T\cdot \tilde{x} + b$

The main problem of this approach is its performance. We artificially add many new features to our data which increases the number of parameters our model has to learn.
## Better approach 👍 (Kernel Trick)

We can instead use the **kernel trick**. The main advantage is that we do not have to explicitly calculate the transformation of our data.
### Basics
We write our model parameters $\theta$ as a combination of the training data. Each $a$ can be seen as a weight that we assign to the feature:
$\hat{\theta} = \sum_{n}a_n\cdot x^n$
Our model prediction for an input $x$ therefore becomes:
$\hat{y}= \hat{\theta}^Tx = \sum_{n}a_n \langle x, x^n \rangle$
Note that $\langle x, x^n \rangle$ is the inner product of two vectors. In the euclidean space this is the same as the dot product.

--> This is what we refer to as kernelization. We reformulate our learning problem such that the input data only appears in the form $\langle x, x^n \rangle$.
### Usage of a kernel function
How to use this to model non-linearity?
Replace $\langle x, x^n \rangle$ with a kernel function $k(x, x^n)=\langle \phi(x), \phi(x^n) \rangle$. A kernel function calculates the dot product between two pre-processed data points. Whereas $\langle x, x^n \rangle$ measures the distance between two samples in our original space, the kernel measures the distance between the samples in the transformed space.

The trick now is the following: The kernel function does not compute the preprocessing $\phi(\cdot)$. Instead, it uses a function that is equal to explicitly calculating $\langle \phi(x), \phi(x^n) \rangle$. The difference being, that the kernel function is faster to calculate. Also, it can be infinite-dimensional.
### Examples of kernels
#### Linear Kernel
$\phi(x) = x$

$k(x, x^n)= x\cdot x^n$
#### Polynomial Kernel with Degree 2
$\phi(x) = [x, x^2]$

$k(x, x^n)= (x\cdot x^n + 1)^2$
#### RBF Kernel
Infinite-dimensional kernel

$k(x, x^n)=\exp{(-\frac{||x-x^n||^2}{2\sigma^2})}$
# References
Kernel trick: [Lecture03_kernel.pdf (purdue.edu)](https://engineering.purdue.edu/ChanGroup/ECE595/files/Lecture03_kernel.pdf)