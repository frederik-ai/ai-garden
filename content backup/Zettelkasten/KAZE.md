---
ID: "27122023112411"
tags:
  - computer-vision
  - feature-detection
---
In contrast to [[SIFT]], [[SURF]] and [[ORB]], KAZE uses a different approach for detecting keypoints. To detect keypoints we first apply so-called **nonlinear diffusion filtering** to our image.
# Feature Detection
The following figure illustrates the difference between applying a Gaussian blur (upper images) and a nonlinear diffusion filter to an image (lower images):
![[Pasted image 20231227114643.png]]
Our filters are applied at varying intensities. Important to know about the diffusion filter is that it removes fine details from the image while still preserving important structures in the image.

In contrast to [[SIFT]] and [[SURF]], KAZE does not apply the filter at different image scales. Instead, by varying the filter intensities, we already get our scale-invariance.

After applying the filters, we look for important features in all the resulting images. We do this by first calculating the determinant of the Hessian matrix for a filtered image. For this, we basically calculate the Laplacian in all the directions and then use them for the determinant:
$$L_{Hessian}=\sigma^2(L_{xx}L_{yy}-L_{xy}^2)$$
The factor $\sigma^2$ weighs the determinant by the size of the filter.
# Feature Descriptors
The main orientation of our keypoints is calculated similar to [[SIFT]]. This means that we calculate a histogram for all the directions of the pixels around our keypoint. Then we take the maximum value in our histogrm. For this, refer to [[SIFT#Main orientation of keypoint]].

The descriptors are actually obtained similarly to [[SURF]]. We also use haar-filters.
![[Pasted image 20231222214016.png]]
However, KAZE uses an adapted approach called **M-SURF** that is optimized to work for our nonlinear scale-space instead of the integral images [[SURF]] uses.