---
ID: "161220232033"
tags:
  - computer-vision
  - object-detection
---
Improved version of [[Fast R-CNN]]

Uses a region proposal network (RPN) to generate the RoIs.  First compute a feature map for the whole image. Then, the RPN proposes RoIs. Feed the feature map and the porposed RoIs into a classifier. 
![[Pasted image 20231216204309.png]]

How does the RPN work? The RPN convolves the image with a 3x3-kernel and applies different anchor boxes at each pixel position. It regresses each anchor box to exact coordinates and determines the objectness of each bounding box.
![[Pasted image 20231216204455.jpg]]