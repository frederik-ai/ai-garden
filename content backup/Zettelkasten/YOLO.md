---
ID: "04012024213946"
tags:
  - computer-vision
---
YOLO is a network architecture used for object detection. One of the main differences to [[R-CNN]] and its variants is that YOLO is a **single** neural network. This single network is responsible for detection and classification.

# How YOLO works
YOLO divides our image into grid cells. Each grid cell basically has two responsibilities:
1. Determine the most probable object class of the cell -> i.e.: what object is in the cell?
2. Detect a fixed set of $B$ bounding boxes that are centered around this cell

![[Pasted image 20240104213952.png]]

Each predicted bounding box is assigned a confidence and each class prediction is assigned a confidence.