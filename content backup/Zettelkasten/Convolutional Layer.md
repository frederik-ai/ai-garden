---
ID: "071220231734"
tags:
  - computer-vision
---
Convolves the input tensor with one or multiple filters.

![[Pasted image 20231212230223.png]]

> [!tip] Why does the number of channels increase after a conv layer?
> Suppose I have an image of size $256x256x3$ and my convolutional layer has 3 filters. This means that I apply 3 different kernels to each of the 3 color channels. Thereby I get 9 convolutions which yield their own result. The output tensor shrinks in its width and height, but it has more channels.
