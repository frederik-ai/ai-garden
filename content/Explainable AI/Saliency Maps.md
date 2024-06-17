Saliency Maps follow a pretty simple idea. Consider we are given a data point $x_0$ for which we want to explain the prediction of the model $h(x_0)$. According to the Taylor approximation we can write:
$$
h(x) \approx h(x_0) + \nabla_x h(x_0)^t\cdot (x-x_0)
$$
Which means that we can approximate the prediction of our model for a new data point $x$ if we know the prediction for $x_0$ and the gradient of the model  at $x_0$.

We are interested to know which features contribute mostly to the difference between $h(x)$ and $h(x_0)$. So we are essentially interested in the gradient $\nabla_x h(x_0)$. The question is: With a fixed (infinitesimally small) change in our input, which features have the highest contribution in the new output being different than the previous one?

We therefore do backpropagation in order to calculate the gradient $\nabla_x h(x_0)$ for the example we would like to explain. Then the features are ranked based on their magnitude in this vector.

Especially for image data we can then visualize these importance values as a heat map.

---

![How Could Saliency Map Help to Improve Model Performance | by Cynthia  (Xinyue) Wang | Institute for Applied Computational Science | Medium](https://miro.medium.com/v2/resize:fit:1400/1*-1vHQC4MondvB_ZBLqu7sw.png)

*Example Saliency Map (right) for an input image (left). The brighter the pixel in the Saliency Map the higher the feature importance. We can use this to do a sanity check on our model for whether it generally takes the correct features into account. This is the case here. We can, however, not use it to do a fingrained differentiation which parts of the shark where the most important ones for the prediction ([Source](https://medium.com/institute-for-applied-computational-science/how-could-saliency-map-help-to-improve-model-performance-29c2979a51ed))*

---