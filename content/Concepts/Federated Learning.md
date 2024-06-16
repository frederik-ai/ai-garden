The main purpose of federated learning is to improve privacy. Especially when using user data for training our model. The idea is the following:

- On a server we initialize our AI model
- Each client device gets a copy of this model and generates its own dataset. This is for example based on the behaviour of the user on the given device
- The client device then uses this data to fine-tune the model
- Each client uploads the weights of the fine-tuned model to the server. The server can then use these weights to fine-tune the global model stored on the server
- This way our global model never sees the confidential training data



---

![How to Kick Start Your Federated Learning Research? | Weiming Zhuang](https://weiming.me/post/fl-research-starter/featured_hu9f88a8a2b7bda13e1638be9843f61ca5_123367_720x2500_fit_q75_h2_lanczos_3.webp)

*General Idea of Federated Learning ([Source](https://weiming.me/post/fl-research-starter/))*

---

# Resources

[Training AI Models with Federated Learning - YouTube](https://www.youtube.com/watch?v=zqv1eELa7fs)

