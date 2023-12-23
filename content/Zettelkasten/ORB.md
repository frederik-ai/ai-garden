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
Some of these detected corners can be false-positives. This means that in reality they are edges and not corners. To remove these false-positives, we apply a Harris corner filter.