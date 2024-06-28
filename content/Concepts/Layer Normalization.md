Layer Normalization is highly related to [Batch Normalization](Batch Normalization.md). It basically works in the same way, but we do not normalize the values of single features along our batch. Instead, we normalize over all features of a single datapoint.

So the main difference is:

- Batch Norm normalizes each feature independently across mini-batches
- Layer Norm normalizes each datapoint independently across all features

---

![NeurIPS 2019: Online Normalization for Training Neural Networks - Cerebras](https://cerebras.net/wp-content/uploads/2021/03/1ETvcPhYH1lCfXndMiKW-jQ.png)

*Comparison of different normlization techniques ([Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Fcerebras.net%2Fblog%2Fneurips-2019-online-normalization-for-training-neural-networks%2F&psig=AOvVaw1rNXo3Cv0GZV1uQN4WeeRD&ust=1719653848628000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjV5_f__YYDFQAAAAAdAAAAABBA))*

---

Batch Norm is mainly used for vision tasks whereas Layer Norm is mostly used for NLP tasks.

# Ressources

https://www.youtube.com/watch?v=2V3Uduw1zwQ