In Transfer Learning we try to take a trained model and fit it to a different task. Suppose for example we have a model that is very well at detecting motorbikes in an image. Now for a different project we need to detect bicycles. We could just use the motorbike model, freeze most of its layers and retrain the classification head on images of bicycles. Freezing a layer means to make its parameter untrainable. The idea is that most layers responsible for feature extraction can already detect features that are also important for bicycles. We do not have to retrain those layers. This speeds up training and can also decrease the amount of new training data we need.

We can also use this approach to transfer our model to a quite different task. For example if we assume that the features extracted by the model apply universally. An example is that we can take a model trained on ImageNet and then apply it to some very specific classification task that is not at all modeled by ImageNet dataset. This is also used for large language models where we assume that the model has learned to understand and produce language so well that it can transfer this knowledge to instead be used to summarize text or to do text classification.

# Deep Adaptation Network

This is a further enhancement of classic transfer learning. The idea is the following:

- We freeze the first few layers of the model
- We retrain the following layers as usual (except the last few layers)
- For the last few layers we also do a retraining, but we make sure that the output activations in these layers always follow a similar distribution as in the original network

---

<img src="https://www.researchgate.net/publication/335764948/figure/fig1/AS:857681032138753@1581498501429/Deep-Adaptation-Network-figure-from-44.png" alt="Deep Adaptation Network, figure from [44] | Download Scientific Diagram" style="zoom:150%;" />

*Deep Adaptation Network. The first three layers are frozen here. The subsequent two layers are retrained. Then we have tje upper path where we learn new parameters for our new task. The bottom path contains the parameters for the original task. For each of these last layers we apply a regularization where we compare the distribution of the activations. This is denoted by MK-MMD. ([Source](https://www.researchgate.net/figure/Deep-Adaptation-Network-figure-from-44_fig1_335764948))*

---

This is helpful if the task we want to solve with transfer learning is pretty similar to what the original model was trained to do.