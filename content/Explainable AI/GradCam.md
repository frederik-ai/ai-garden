GradCam (Gradient-weighted Class Activation Mapping) is a way to create visual explanations for image data similar to [Saliency Maps](Saliency Maps.md). It only works on [CNNs](../Glossary.md#CNN).

In GradCam we don’t do backpropagation through the entire network. We instead focus on the activations of the last convolutional layer. More specifically, we calculate the derivative of these activations w.r.t. the output of our model for a specific class. 

The input to the convolutional layer consists of different feature maps. If we were to feed our raw RGB image into the conv layer this would for example have the three channels R, G and B. The first step is to assign each of these feature maps a weight. This is done via global average pooling. This means that we take the average derivative of all activations in a given feature map. The importance of a feature map $k$ for a specific class $c$ is denoted as $a_{c}^{k}$:
$$
a_{c}^{k} = \frac{1}{Z}\cdot \sum_i\sum_j \frac{\partial y^c}{\partial A_{ij}^{k}}
$$
We then use this to create our Saliency Map using the following formula:
$$
L_{\mathrm{Grad-CAM}}^{c} = \mathrm{ReLU}(\sum_k a_{k}^{c}\cdot A^k)
$$
The product $a_k^c \cdot A^k$​ just multiplies our activations with their respective weights. We then sum up these weighted activations along all feature maps to obtain a single value for each position in our feature maps. Afterwards we apply ReLU on this, because we are only interested in positive contributions to our prediction.

---

<img src="https://datascientest.com/de/wp-content/uploads/sites/8/2023/07/Original-Image.jpg" alt="img" style="zoom:150%;" />

*Example Saliency Map resulting from GradCam ([Source](https://datascientest.com/de/was-ist-die-grad-cam-methode))*

---

# References

[Gradient weighted Class Activation Map(Grad-CAM) | by Ninad Shukla | Medium](https://medium.com/@ninads79shukla/gradcam-73a752d368be)