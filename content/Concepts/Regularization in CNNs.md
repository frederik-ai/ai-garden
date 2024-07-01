There exist different regularization techniques for CNNs.

# Cutouts

Another approach is two just nullify random patches from the input image. The idea is that the CNN therefore cannot rely on only identifiying small parts of an image, but it must rather look at broader shapes and concepts.

---

![Reading: Cutout — Improved Regularization of Convolutional Neural Networks  (Image Classification) | by Sik-Ho Tsang | Medium](https://miro.medium.com/v2/resize:fit:742/1*C31NdL-GI6-eL9V8EbAPnA.png)

*Visualization of image cutouts. The cutouts are shown as gray rectangles. ([Source](https://sh-tsang.medium.com/reading-cutout-improved-regularization-of-convolutional-neural-networks-image-classification-d39ff4ec3c76))*

---

# Dropout

The technique of [Dropout](Dropout.md) als works for CNNs. Here some entries in the resulting feature map will be nullified (set to zero). Therefore Dropout is applied after the convolutional layer and after the activation function.

## Dropblock

A problem is that this process is completely random, but some neighboring pixels can be spatially correlated. Therefore, there for example also exists *Dropblock* which randomly nullifies neighboring blocks of output activations.

---

![img](https://miro.medium.com/v2/resize:fit:700/1*WQOc7jJ0N9uMsdo2i46M6g.png)

*Visualization of Dropblock ([Source](https://medium.com/@sunnykumar1516/why-you-should-stop-using-dropout-in-cnn-6b7dc936215d))*

## Shake-Shake Regularization

This is basically a modified version of dropout for CNNs. Suppose we have two subsequent layers in our CNN. One layer receives the input $x_i$ and the later layer receives the input $x_{i+1}$ which is the ouput from the previous layer. We have a skip connection between these and also two branches of independent convolutional operations. This can look like this:

---

![Shake-Shake Regularization Explained | Papers With Code](https://production-media.paperswithcode.com/methods/Screen_Shot_2020-06-06_at_1.00.02_PM.png)

*Visualization of Shake-Shake Regularization ([Source](https://paperswithcode.com/method/shake-shake-regularization))*

---

The input to our second layer is:
$$
x_{i+1} = x_i + \mathcal{F}(x_i, W_i^{(1)}) + \mathcal{F}(x_i, W_i^{(2)})
$$
This is the unchanged input two the first layer plus the result of the first convolutional path plus the result of the second convolutional path. The idea now is that we randomly deactivate some of these two convolutional paths. 

# References

X. Gastaldi, "Shake-Shake regularization," *arXiv preprint arXiv:1705.07485*, 2017. [Online]. Available: https://arxiv.org/abs/1705.07485

G. Ghiasi, T.-Y. Lin, and Q. V. Le, "DropBlock: A regularization method for convolutional networks," *arXiv preprint arXiv:1810.12890*, 2018. [Online]. Available: https://arxiv.org/abs/1810.12890



