The purpose of a convolutional layer is the following: Encode the input into a lower-dimensional feature space while increasing the amount of information stored per spatial location (depth). It has been shown that this approach is kind of similar to how humans process vision.

One of the main ideas is also that we want to achieve spatial invariance. We would like to recognize an object in an input image, no matter where it is. Therefore we use the same parameters at different locations to compute our activations.

Suppose we have an input in matrix form. The convolutional layer has a kernel with trainable parameters which we slide over this input step by step. At each position we compute the dot-product between the kernel and the values of the input which are beneath the kernel. The result is then written at the current center position of the kernel. Depending on the sice of the kernel, the output will have a smaller dimension than the input.

---

<img src="https://miro.medium.com/v2/resize:fit:1400/1*Fw-ehcNBR9byHtho-Rxbtw.gif" alt="Intuitively Understanding Convolutions for Deep Learning | by Irhum Shafkat  | Towards Data Science" style="zoom:35%;" />

*Visualization of a convolution without specific values ([Source](https://towardsdatascience.com/intuitively-understanding-convolutions-for-deep-learning-1f6f42faee1))*

---

---

<img src="https://miro.medium.com/v2/resize:fit:1052/1*ZCjPUFrB6eHPRi4eyP6aaA.gif" alt="Convolution, Padding, Stride, and Pooling in CNN | by Abhishek Kumar Pandey  | Analytics Vidhya | Medium" style="zoom:80%;" />

*Visualization of a convolution with specific values ([Source](https://medium.com/analytics-vidhya/convolution-padding-stride-and-pooling-in-cnn-13dc1f3ada26))*

---

# Increasing the Depth

The previously shown inputs have a single channel. If we feed an image into our convolution, we usually get three channels (red, green, blue). Also, the goal of a convolution also is to increase the number of channels in the output. How can we achieve this?

In Convolutional Neural Networks we actually do not use a single kernel per convolutional layer. We instead use multiple so-called “filters”. The number of filters determines the depth of the output. Each filter has a kernel for every input channel. To calculate the result of a single filter, we convolve each of its kernels with the respective input channels. We then sum up the results of the convolutions to obtain a single feature map.

---

<img src="https://miro.medium.com/v2/resize:fit:1400/1*BSLjlJf31gj98ABJMCt3-g@2x.png" alt="Applied Deep Learning - Part 4: Convolutional Neural Networks | by Arden  Dertat | Towards Data Science" style="zoom: 55%;" />

*Convolution for a single filter with a 3-channel input. In this convolutional layer, the output has the same width and height as the input. The filter uses a different kernel for each of the three input channels ([Source](https://towardsdatascience.com/applied-deep-learning-part-4-convolutional-neural-networks-584bc134c1e2))*

---

Using different filters, we can therefore use our convolution to retrieve multiple semantic meanings from our input. This means that some feature maps will yield high activations when specific edges are present. In later layers this then corresponds to different parts of objects (mouth, nose, ...). 

The following image for example shows what features leads to high activations after the convolution in specific layers. Early layers pay attention to fine-grained shapes while later layers learn more general concepts. Note, however, that this is kind of a toy example. In reality the learned representations are often not so visually meaningful to humans.

---

<img src="https://ujjwalkarn.me/wp-content/uploads/2016/08/screen-shot-2016-08-10-at-12-58-30-pm.png?w=242&h=256" alt="An Intuitive Explanation of Convolutional Neural Networks – Ujjwal Karn's  blog" style="zoom:150%;" />

*Visualization of the learned features by different CNN layers ([Source](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/))*

---