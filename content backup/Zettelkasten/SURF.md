---
ID: "22122023203159"
tags:
  - computer-vision
  - bildverarbeitung
  - feature-detection
---
Idea: In the same way as [[SIFT]], SURF tries to approximate the Laplacian of Gaussian of our image. SIFT does this by using the Difference of Gaussians. However, this approach can have performance issues. SURF instead approximates the LoG by using box-filters.
# Feature Detection
To calculate the keypoints, SURF wants to get the second order derivative of our image. Because we use a gaussian filter on our image, we would like to calculate the derivative during the convolution with the gaussian filter. So, we calculate the second order derivative of the gaussian kernel and then convolve this so-called Laplacian of Gaussian with the image.
The gaussian filter is a single kernel. The second-order derivative gives us three kernels, because we can calculate the derivatives xx, xy/yx, and yy. We get three kernels. We can approximate these kernels using box-filters:
![[Pasted image 20231222205942.png]]
The box filters have the same shape as the LoG kernels, but they are simpler to calculate.
## How the Box-Filters are applied
To apply the filters, we basically multiply each pixel with the value of the box-filter and then sum all pixels up that lie under the current kernel.
However, we do not apply these filters to the raw image, but to the [[Integral Image]]. This gives us a huge performance boost in SURF. To calculate the response of the image to a "block" in such a filter, we only need to know the four image pixels in the corners of these blocks. This way, we always need four values, no matter the scale of the image or the scale of the filter.
## How we get Keypoints with these Filters
After applying the box-filters, we have approximated the so-called Hessian matrix. Whether an image-patch is considered an interest-point depends on the determinant of the Hessian matrix. Calculating the determinant of the Hessian for each image patch gives us a **blob response map**. This shows us the response of each image patch to such a "blob detection".

So in contrast to [[SIFT]], we don't define keypoints at a pixel-level. We look at image patches and then determine if it is a keypoint or not.
## Scale-invariance
We apply these box-filters using an image pyramid. This means that we filter our image at different scales while also varying the size of the box-filters.
![[Pasted image 20231222212117.png]]
What sizes exactly we use can for example look like this:
![[Pasted image 20231222212212.png]]
An octave is the size of the image. The scale is the size of the kernel (e.g. 9x9, 21x21,...)
The usage of different scales makes our feature detector scale-invariant. The cool thing about SURF is that because we use integral images, larger filters are not more difficult to compute than smaller filters.
# Feature Desciptors
Orientation is given by the haar-wavelet response of 16 4x4 neighborhoods in our keypoint. This can also be easily calculated, because we use integral images. These here are the haar-filter that we use to calcualte the haar-wavelet response:
![[Pasted image 20231222214016.png]]
The resulting feature descriptor has 64 values compared to the 128 values of [[SIFT]].

For a clean edge in our image, [[SIFT]] and SURF both have quite good performance:
![[Pasted image 20231222214349.png]]
But for noisy edges SURF works wayyy better than [[SIFT]]
![[Pasted image 20231222214414.png]]
