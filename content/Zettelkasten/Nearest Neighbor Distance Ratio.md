---
ID: "27122023101931"
tags:
  - computer-vision
  - feature-detection
---
# Idea
We use this to match detected features in two images. The method is the following:
- For each keypoint in the query image, get the 2 nearest neighbors in the database image
- If the second best match is far away from the best match, our best match is a correspondence

This is called the **Nearest Neighbor Distance Ratio Test**. The Nearest Neighbor Distance Ratio computes how far the two keypoints lie apart.

The Nearest Neighbor Distance Ratio is given by:
$$\textrm{NNDR}= \frac{||k_{query}-k_{match_1}||}{||k_{query}-k_{match_2}||}$$
The idea behind the Nearest Neighbor Distance Ratio Test is the following: Suppose the second best match is close to the best match. In this case, our best match has to be discarded. Why? Well, we have two points in very close proximity that can both be interpreted as the matching keypoint. Our match is ambiguous. It could for example suffer from the aperture problem or the barber-pole-illusion (if our keypoint is an edge instead of a corner).
# Example
The following image illustrates why the Nearest Neighbor Distance Ratio Test is better than a fixed distance threshold or a fixed threshold for the Nearest Neighbor Distance.
![[Pasted image 20231227110653.png]]
The dashed circles show the acceptance area for a fixed distance threshold. $D_A$ would reject $D_B$, because it is further away than a threshold. The Nearest Neighbor Distance Ratio Test would accept $D_B$ as a matching keypoint, because the second best match ($D_C$) is significantly further away.

For $D_D$ it is the other way around. $D_D$ would accept $D_C$ as a matching keypoint when using a fixed threshold. However, the Nearest Neighbor Distance Ration Test would reject it, because the second best match ($D_E$) almost has the same distance from $D_D$ as $D_C$.