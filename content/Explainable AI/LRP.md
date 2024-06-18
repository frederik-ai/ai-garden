LRP stands for Layer Wise Relevance Propagation. Other techniques for computing feature relevances in XAI usually directly make use of gradients. We for example propagate the gradients of our output layer through the whole network back to the input. We can then use this to assign each feature an importance based on this gradient. The main problem is that the gradients are highly noisy. For instance, the existence of adversarial examples shows: Small changes in the input can completely change the output of a model.

LRP does not directly use gradients. It instead propagates relevance scores through the neural network. The relevance score for a neuron $j$ is given as follows:
$$
R_j^{(l)} = \sum_k \frac{z_{jk}}{\sum_j z_{jk}} \cdot R_k^{(l+1)}
$$
In simple terms this means the following: We are looking for the relevance of the neuron $j$ at layer $l$. This is denoted as $R_j^{(l)}$. The relevances between two layers do not get lost. They are just redistributed. So if we know the relevances of the consecutive layer we just need to know with what amount of activation the neurons in the layer $l+1$ are connected to our current neuron. We then multiply these two and sum the result up for all neurons in the consecutive layer. This is essentially what the formula calculates. The activations between the two neurons are given by $z_{jk}$. We normalize this activation to a range $[0,1]$ by dividing it by the total sum of activations from layer $l$ to this single neuron in layer $l+1$.

This formula is applied repeatedly until we reach the input layer. We then get the relevance scores for our input features. The question now is: To start calculating we need the relevance scores for the output layer. How are they determined? They are actually just given by the predictions of our model. For example the [Softmax](../Concepts/Softmax.md) values for our classification problem.

The property that relevances are conserved during the backward pass and are therefore just redistributed to the neurons is shown by the following figure:

---

![https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-030-28954-6_10/MediaObjects/487370_1_En_10_Fig2_HTML.png](https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-030-28954-6_10/MediaObjects/487370_1_En_10_Fig2_HTML.png)

*Backward redistribution of relevance values. ([Source](https://link.springer.com/chapter/10.1007/978-3-030-28954-6_10))*

---

A predicted Saliency Map of LRP can look as follows:

---

![Overview of Explainable AI and Layer wise relevance propagation (LRP) | by  Praveen | Medium](https://miro.medium.com/v2/resize:fit:599/1*XOMn3Cm_1lW4gb8eNLGlhA.png)

*Example relevance map generated with LRP ([Source](https://praveenkumar2909.medium.com/overview-of-explainable-ai-and-layer-wise-relevance-propagation-lrp-cb2d008fec57))*

---

# References

Montavon, G., Binder, A., Lapuschkin, S., Samek, W., Müller, KR. (2019).  Layer-Wise Relevance Propagation: An Overview. In: Samek, W., Montavon, G., Vedaldi, A., Hansen,  L., Müller, KR. (eds) Explainable AI: Interpreting, Explaining and  Visualizing Deep Learning. Lecture Notes in Computer Science(), vol  11700. Springer, Cham. https://doi.org/10.1007/978-3-030-28954-6_10

https://www.youtube.com/watch?v=PDRewtcqmaI