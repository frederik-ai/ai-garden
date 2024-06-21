DeepLIFT tries to solve multiple problems that can occur in approaches such as  [GradCam](GradCam.md),  [LRP](LRP.md) and  [Saliency Maps](Saliency Maps.md). One of them is the following: Backpropagation based approaches cannot highlight features that contribute negatively to a specific class. This is because ReLU activation functions forces negative gradients to the value zero. LRP does not have this problem as it does not directly use gradients. However, the authors mention other problems which I won't delve into here.

The main idea of DeepLIFT is that we firstly define a baseline input. We then compare the predictions of our model against this baseline for the given input that we want to explain. We also propagate these differences backward in a smilar fashion as it is done with LRP. Each feature then gets a contribution score to this difference. -> We do not propagate a *signal* (activations), but the difference of the *signal* to a baseline input.

The calculations look similar to those of [LRP](LRP.md). 

The main question we ask ourselves in DeepLIFT is: Which features do we need to touch to make our model give us the same prediction for the current input as for the baseline input?

# References

A. Shrikumar, P. Greenside, and A. Kundaje, "Learning Important Features Through Propagating Activation Differences," arXiv:1704.02685, 2019.