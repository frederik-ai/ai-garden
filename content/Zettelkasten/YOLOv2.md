---
ID: "04012024220638"
tags:
  - computer-vision
aliases:
  - YOLO9000
---
YOLOv2 has a few improvements compared to the original [[YOLO]] paper. The main difference is that it uses anchor boxes.
# Anchor Boxes
YOLOv2 uses anchor boxes. For detection this means the following: Instead of directly predicting the coordinates of a bounding box, we calculate the offset of a specific anchor box.

![[Pasted image 20240104220951.png]]
$\sigma(t_y)$ and $\sigma(t_x)$ are the offsets that are added to the origin location of the grid cell. Whereas $e^{t_w}$ and $e^{t_h}$ are factors that scale the width and height. 

# More differences to [[YOLO]]
