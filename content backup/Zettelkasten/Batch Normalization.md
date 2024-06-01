---
ID: "221220231736"
tags:
  - ai
  - computer-vision
aliases:
  - Batch Norm
---
# Idea
We want the output of each neuron to be normalized.
This way, no neuron outputs significantly larger values than other neurons.
# Approach
Normalize each activation function over our batch such that the values follow a normal distribution.

![[Pasted image 20231207171146.png]]
# Why it is used
The model converges faster during training and achieves a higher accuracy
![[Pasted image 20231207171820.png]]
The activation functions fluctuate less
![[Pasted image 20231207171706.png]]

---
Implementation of Batch Norm: [batchnorm_pytorch/batch_normalization_in_pytorch.ipynb at main · Johann-Huber/batchnorm_pytorch (github.com)](https://github.com/Johann-Huber/batchnorm_pytorch/blob/main/batch_normalization_in_pytorch.ipynb) 
Rough Explanation: [Batch Normalization (“batch norm”) explained - YouTube](https://www.youtube.com/watch?v=dXB-KQYkzNU&t=39s)
Thorough Explanation: [Batch normalization in 3 levels of understanding | by Johann Huber | Towards Data Science](https://towardsdatascience.com/batch-normalization-in-3-levels-of-understanding-14c2da90a338#b93c)