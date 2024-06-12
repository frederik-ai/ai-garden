The long name of this method is Fast Gradient Sign Method. The gist of it is the following: We look into the gradient of our cost function $J$ for the correct class. During training of our neural network we would do gradient descent w.r.t. to our parameters $\theta$ to reduce the value of the cost function. Here we do gradient ascent w.r.t. to the input $x$ in order to modify the input in such a way that the cost of the NN is increased.

We are not interest in the magnitude of the gradient, but only in its direction. We then take a step of size $\varepsilon$ in the direction of the gradient in order to increase the cost:
$$
x_\mathrm{attack} = x + \varepsilon\cdot \mathrm{sgn}(\Delta_x J(x, y_{true}))
$$
Note that we pass $y_{true}$ as a parameter of $J$. This way we increase the cost for the true label.

We can instead also do a targeted attack. In the previous attack we increased the cost of our true label. This means that we increase the probability of getting some arbitrary other label for $y$. In a targeted attack we try to increase the probability that the model predicts a specific, wrong label $y_{target}$:
$$
x_{attack}  =x - \varepsilon\cdot \mathrm{sgn}(\Delta_x J(x, y_{target}))
$$
Because we only modify our input by a small amount $\varepsilon$, the attacks are hard to identify. Which is what an attacker wants.

The following image shows the effectiveness of the FGSM attack:

![Adversarial example using FGSM | TensorFlow Core](https://www.tensorflow.org/static/tutorials/generative/images/adversarial_example.png)

