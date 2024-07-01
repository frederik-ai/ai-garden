This is a network architecture that was made for the task of image segmentation. It is a  [Fully Convolutional Neural Network](../Concepts/Fully Convolutional Neural Networks.md). The network is u-shaped. If firstly uses convolutional layers to downsample the input to a latent representation and then uses the resulting feature maps along with transposed convolutions to get the segmeneted image. Also, U-Net uses skip-connections between earlier and later layers such that more of the fine-grained spatial information from the input is retained after sampling the latent representation back up.

U-Net is however also heavily applied to image-to-image generation. Such as in  [Generative Adversarial Networks](Generative Adversarial Networks.md)  or [Diffusion Models](Diffusion.md). 

---

![U-Net: Convolutional Networks for Biomedical Image Segmentation](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/u-net-architecture.png)

*Visualization of the U-Net Architecture ([Source](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/))*

---

