# Dropout

With Droput we try to solve the problem of ovefitting. During training we randomly deactivate neurons. The goal of this is that each piece of information is propagated through all neurons. We do not want specific singular neurons to be responsible for some more complex tasks, but distribute them throughout the network

<img src="https://miro.medium.com/v2/resize:fit:1044/1*iWQzxhVlvadk6VAJjsgXgg.png" alt="Dropout in (Deep) Machine learning | by Amar Budhiraja | Medium" style="zoom:67%;" />

# Monte Carlo Dropout

Paper: [Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning (arxiv.org)](https://arxiv.org/abs/1506.02142)

Usually we do the following: During training we apply Dropout as a regularization technique. During infrence/testing we of course disable dropout. This is because it decreases model performance and essentially makes our network smaller and probabilistic instead of fully deterministic.

Monte Carlo Dropout actually has the idea that we **use Dropout during inference**. The purpose is that we can view this as a probabilistic ensemble model. We use multiple different randomized Dropouts to predict for a single input. Then we can measure the uncertainty of the model by 