---
ID: "22122023214504"
tags:
  - computer-vision
  - feature-detection
---
What is the main difference of ORB when compared to [[SIFT]] and [[SURF]]?
- ORB does not try to approximate the Laplacian of Gaussian
- Instead, ORB directly decides whether a point is considered a local minimum/maximum
# Feature Detection
For feature detection ORB uses a corner detector called [[FAST]].
![[Pasted image 20231222215300.png]]
Some of these detected corners can be false-positives. This means that in reality they are edges and not corners. To remove these false-positives, we apply a Harris corner filter. Because of the barber-pole illusion edges are not interesting keypoints to us. Those types of keypoints can hardly be matched between two images.
# Feature Descriptors
Again, before determining the feature descriptors we have to calculate the main orientation of our keypoints. The main orientation is calculated by using image moments. They essentially measure the distribution of pixel intensities.

Once we have the main orientation of our keypoints, we use a method called **BRIEF** to get our feature descriptors. It works pretty straightforward:
- Our goal is to turn our local image patch that corresponds to a keypoint in to a binary string
	- So: we have a matrix of pixel intensities and we want to turn this into a bit-string that could for example look like: $[0, 1, 1,0, 0, 1]$
	- In our query image we compare if the detected feature has the same bit-string. If yes, we have found two matching keypoints
- We do this by comparing arbitrary pixel values $s_1$ and $s_2$ in our image. If $I(s_1) < I(s_2)$, we write a $1$ in our binary string, otherwise a $0$. (The function $I$ gives the pixel intensity)

ORB actually uses an improved version of **BRIEF**. 
# References
Brief Descriptor: [Binary Features - 5 Minutes with Cyrill (youtube.com)](https://www.youtube.com/watch?v=25GkgxClSaU)