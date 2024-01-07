---
ID: "03012024203222"
tags:
  - computer-vision
---
# Purpose
Suppose we want to measure the distance between objects based on an image. For example in an apartment where we want to estimate the distance between pieces of furniture.
![[Pasted image 20240103204012.png]]
For this, we need to translate between the so-called world coordinates and the image coordinates of our camera image.
# Introduction
**World coordinates**: We need to define an origin in our real world scene. This can for example be a corner of the room we are in. Each point $p_w=(x,y,z)$ gives us the vector from our point to the origin.

**Camera coordinates**: Basically the same, but the origin of the camera coordinate system is the camera. It defines points $p_c = (x, y, z)$.

**Image coordinates**: The image coordinates are the actual pixel locations. Image coordinates do not have a depth-component, they are homogeneous: $p=(x,y,1)$.

Our goal is to translate between world coordinates and image coordinates. Example: We want to measure the distance between two pieces of furniture. For this, we take one pixel at the border of furniture 1 and and one pixel at the border of furniture 2. We then translate these pixel coordinates to world coordinates. Then, we can take the euclidean distance between those two world coordinates.

But lets look at this in the inverse way: How to get form world coordinates to image coordinates? First we need to convert the world coordinates to camera coordinates. Then we translate these camera coordinates to image coordinates.
# World Coordinates to Camera Coordinates
The world coordinate system and the camera coordinate system can directly be translated into one-another. For this, we just need to know how the camera coordinate system is rotated and translated with respect to the world coordinate system.
$$p_c = [R|t]\cdot p_w$$
We just need to know the rotation matrix $R$ and the translation vector $t$.
# Camera Coordinates to Image Coordinates
For this, we have to know the intrinsic parameters of the camera. It consists of parameters like the focal length or the skew of the image coordinate system (how the system is rotated).
$$p = K\cdot p_c$$
The intrinsic parameters are given by a calibration matrix $K$.
# Let's Put it Together
We now know that we need to do the following translation: world coordinate -> camera coordinate -> image coordinate.

So what we need to solve is $p = K[R|t]\cdot p_w$. We can put $K[R|t]$ into a single matrix $P$. So now it becomes:
$$p = Pp_w$$
