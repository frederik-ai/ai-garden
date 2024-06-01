---
attachments: []
tags:
  - DeepLearning
title: Activation Functions
created: 2024-04-26T16:59:08.419Z
modified: 2024-04-26T19:37:46.707Z
---
The purpose of activation functions is to introduce non-linearity into our models. Otherwise we would just do a fancy linear regression. This is because in an MLP the output of the last layer could be expressed as a linear combination of the input.

## Sigmoid

The sigmoid activation function maps real numbered inputs to the range $[0;1]$. Its outputs can be interpreted as probabilities although they are usually no real probabilities.

$$\sigma(x) = \frac{e^{1}}{1+e^{x}}$$
## ReLU

$$\mathrm{ReLU}(x) = \max{(0, x)}$$

## Swish
Discovered by Google during [[Neural Architecture Search (NAS)]].

Swish 

