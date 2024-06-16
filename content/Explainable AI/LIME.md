LIME is one of the simplest and most popular methods of explainability. The main idea is the following: When trying to explain the prediction of an input $x$ we sample inputs which are similar to $x$ and then observe what the model will predict for them. We then train a linear classifier to learn a decision boundary between these predictions. We now have a so-called surrogate model which linearly approximates our complex model in the local area around $x$.

Using this decision boundary, we can observe how much pertubation of a feature is necessary in order to change its prediction. An example for a local surrogate model is given in the next figure. The figure shows that the feature on the x-axis is more important than the feature on the y-axis for this particular prediction. If we slightly move our point to the right, we already get a different prediction. If we instead move along the y-axis, large pertubations are necessary to change the class.

---

<img src="https://i2.wp.com/blog.ephorie.de/wp-content/uploads/2019/12/lime.png?w=450" alt="Explainable AI (XAI)… Explained! Or: How to whiten any Black Box with LIME  | R-bloggers" style="zoom:150%;" />

*Example local explanation model of LIME ([Source](https://www.r-bloggers.com/2020/01/explainable-ai-xai-explained-or-how-to-whiten-any-black-box-with-lime/))*

---

LIME can be applied to different kinds of data. Tabular data, images and others. For images LIME does not consider single pixels as features. This would make the feature space too high-dimensional and it could be hard to identify larger, important regions in an image. Instead, the authors combine pixels to “megapixels” based on their statistical properties. They then use these megapixels as features for LIME.

---

![Explainable Artificial Intelligence (XAI) | GA-CCRi](https://www.ga-ccri.com/images/BlogFeaturedImages/dogguitar2.png)

*LIME applied to an image to explain different classes. Less important parts of the image are gray whereas more important parts are colored. ([Source](https://www.ga-ccri.com/explainable-artificial-intelligence-xai))*

---
