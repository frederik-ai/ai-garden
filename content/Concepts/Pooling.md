Pooling is usually used after a  [Convolution](Convolution.md) operation. It decreases the dimension of the input without using any learnable parameters. It therefore does not do any complex calculations.

Pooling also has some kind of kernel. There are different kinds of pooling such as Max-Pooling or Average-Pooling. In Max-Pooling we just slide our kernel over the input and write the maximum value of the input values into the output at the kernel position.

---

![Max Pooling Explained | Papers With Code](https://production-media.paperswithcode.com/methods/MaxpoolSample2.png)

*Visualization of Max-Pooling ([Source](https://paperswithcode.com/method/max-pooling))*

---

Advantages of pooling are:

- Makes the neural net more efficient by reducing the dimensionality of latent feature maps
- Makes the neural net more invariant to slight changes in the input. This is because the maximum value or mean value at the kernel positions does not change significantly for small pertubations