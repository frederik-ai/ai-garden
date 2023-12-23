---
ID: "22122023173916"
tags:
  - computer-vision
  - bildverarbeitung
  - feature-detection
---
> [!tldr] Main idea
> At different scales of the image we apply differently sized Gaussian kernels. Then we use the [[Difference of Gaussians]] to get keypoints.

SIFT is an algorithm that provides **feature detection** as well as **feature descriptors**.
# Feature Detection
1. Scale the image to different sizes
2. For each size, apply differently sized [[Difference of Gaussians]]
3. Subtract neighboring images
![[Pasted image 20231222174038.png]]
4. For each pixel, look at the 26 neighbors in this scale and the scales directly above and below
	- If the pixel is an extremum (maximum or minimum), it is a keypoint
		![[Pasted image 20231222174412.png]]
**TODO:** mention how and why the taylor series is used for [[Difference of Gaussians|DoG]]
## What the detected features look like
![[Pasted image 20231222175326.png]]
Each circle here is a single keypoint. Question: Why do the circles have different sizes? The size corresponds to the size of the Gaussian blurs with which the [[Difference of Gaussians|DoG]] was computed. A large circle means that we used a strong blur. We make the keypoint larger, because we can't be really sure where exactly the keypoint lies.
# Feature Descriptors
Important to note: The orientation of a keypoint and the descriptor of a keypoint is not the same. To get the feature descriptor, we first need to account for the scale and the rotation of a keypoint. So we first scale the keypoint to a fixed size. Then we calculate the **main orientation** of our keypoint.
Calculate the whole histogram for the image gradient orientations  in a 16x16-neighborhood of the keypoint. The peak then is our main orientation. We only look at direction, not at scale.
![[Pasted image 20231222202709.png]]
This way, if we then compare feature descriptors we can undo the rotation of the keypoint.

**How then to get the feature descriptor:**
We take the 16x16 neighborhood of our keypoint. Then we divide this neighborhood into windows of 4x4. For each window we calculate a histogram for the direction of gradients of each pixels using 8 bins (8 different directions). Pixels that are further away from the keypoint have less influence on the histogram.
![[Pasted image 20231222201538.png]]
This gives us a descriptor of $4\times4\times8=128$ dimensions. We have $4\times4=16$ image patches around our keypoint where we have a histogram with 8 orientations for each patch.