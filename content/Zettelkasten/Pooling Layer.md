121220232324
Tags: #computer-vision 

Purpose: Shrink the size of the input tensor while preserving the most important information.
A pooling layer has **no trainable parameters**.

> [!tip] Why do we apply pooling?
> We want to make our model invariant to small pixelwise changes in the image. A pooling layer drops some information from our tensor and therefore makes it less prone to noise.
