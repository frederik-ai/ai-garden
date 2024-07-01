# Adam

The Adam optimizer achieves better performance the higher we set the batch size (at least this is what all of my experiments have shown so far).

Adam can cope with plateaus and local minima. For Adam it is also possible to take different step sizes for the parameters of the model.

A single optimization step is basically calculated as follows:
$$
\theta_{t+1} = \theta_{t} - \alpha\cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t}+\epsilon}
$$

- $\alpha$: initial learning rate
- $\hat{m}_t$: average gradient (calculated as moving average)
- $\sqrt{\hat{v}_t}$: average magnitude of gradients
- $\epsilon$: some very small number for numerical stability (no division by zero)

The term $\hat{m}_t$ basically smoothens our updates, because it takes the previous gradients into account. The adaptive learning rate is implement by the term:
$$
\frac{\alpha}{\sqrt{\hat{v}_t}+\epsilon}
$$
which is part of the previously given formula. We scale our initial learning rate by the average magnitude of our gradients.
