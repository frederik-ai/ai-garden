---
ID: "22122023215401"
tags:
  - computer-vision
---
Algorithm for corner detection in an image.
We look at the circular region around a pixel $p$ that consists of 16 pixels. Our point is considered a corner if $n$ connected pixels from $p$ to a pixel in the circle are brighter or darker than our interest-pixel.
![[Pasted image 20231222215300.png]]
