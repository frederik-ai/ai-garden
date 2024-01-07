---
UUID: "221220231713"
tags:
  - computer-vision
aliases:
  - DoG
---
> [!tldr] Main idea
> Take an image and apply two differently sized Gaussian blurs to it. If we subtract the two blurred images from each other, we get an approximation for the Laplacian of Gaussian (LoG) which computes the second derivative of the image.

Laplacian of Gaussian (blue graph)
![[Pasted image 20231222171638.png]]

Difference of Gaussian (blue graph)
![[Pasted image 20231222171705.png]]

For what purpose is DoG used?
- We can use it to do edge detection on an image