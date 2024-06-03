---
title: "Multi Agent Path Finding Using Imitation Reinforcement Learning With Transformer"
---

In this paper the authors work in an environment where multiple robots should simulateously work on a path-planning task. The goal is that these robots coordinate their movements without communicating with each other

# Learning Framework

The paper uses Q-Learning to achieve this task. For each state $s_t$ we have multiple possible actions. One action per robot. Because this leads to an unfeasable Q-Table, the paper uses a deep neural network to learn the optimal Q-Function.

## Model Input

Each robot learns its own Q-function. Somehow the world state has to be encoded into a tensor that can be input into our model. Other robots are viewed as part of the observable environment. Once the environmet is encoded into a tensor it has the following properties:

- The tensor has six channels. Each channel has the size $l\times l$ whereas $l\times l$ is the field of view of the model.
- The first channel contains the position of all other robots. In the $l \times l$ grid each cell where there is a robot is marked with 1. All other cells are 0.
- The second channel is the same as the first, but the locations of the obstacles instead of other robots are marked with a 1.
