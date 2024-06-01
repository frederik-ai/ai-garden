---
tags: [Deep Learning]
title: Vanishing Gradient Problem
created: '2024-04-26T19:32:29.905Z'
modified: '2024-04-26T19:36:59.815Z'
---
This is the problem that during gradient descend, the gradients of our loss-function approach zero. If this happens, the weights will not be significantly updated. The model is stuck in a parameter configuration.

## How does this happen?

The vanishing gradient problem can occur if we have an activation function with a non-linear derivative. Take the sigmoid function for example:

[[Activation Functions#Sigmoid]]
