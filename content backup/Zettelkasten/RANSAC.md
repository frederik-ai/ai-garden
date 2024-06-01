---
ID: "211220231721"
tags:
  - computer-vision
  - TODO
---
Algorithm to find the best model parameters that describe given data. The main purpose of RANSAC is that it can be used even if we have many outliers in our data. RANSAC can be effective if not more than 50% of our data are outliers.

We can use it in Computer Vision to calculate the transformation between to images. We use RANSAC to find model parameters to rotate one of the images such that the detected keypoints of both images have a minimal distance to one-another.
