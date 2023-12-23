161220232018
Tags: #computer-vision #object-detection #two-stage-model 

Fast R-CNN basically works like [[R-CNN]]. The main difference is that we compute a **single feature map** for the **whole image**. Then afterwards, we locate each region in this feature map. 

To be able to pass this RoI feature map into the CNN, we have to apply pooling. This way we compress the feature map to a fixed size.

![[Pasted image 20231216203206.png]]
The abbreviation FC stands for "fully connected layer"