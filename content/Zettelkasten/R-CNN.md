131220231356
Tags: #TODO #computer-vision #object-detection #two-stage-model

R-CNN is a Two-Stage object detection model

![[Pasted image 20231215161512.png]]

# First Stage
Provides region proposals. [Graph-based image segmentation](https://cs.brown.edu/people/pfelzens/papers/seg-ijcv.pdf) followed by [Selective Search](http://www.huppelen.nl/publications/selectiveSearchDraft.pdf). 
The graph based segmentation yields very small regions. Selective search gradually merges the most similar regions together until we have only a few regions left. Those regions that are likely to contain an object are fed into the second stage of R-CNN. To determine the objectness of the regions, we calculate use an image pyramid and visual words.

# Second Stage
Region is warped into a fixed aspect ratio and size. Then, we feed the image into a CNN. The CNN computes features. A [[Support Vector Machine]] does the classification while a regression model determines the exact bounding box coordinates inside the region.

# Resulting Workflow
1. Get input image
2. Propose regions in the image that are likely to contain an object
3. Resize each proposal such that it is a square and has specific w- and h-dimensions
4. Feed each proposal into a CNN
5. SVM predicts each class based on the features
6. Other model does regression for bounding box coordinates

# Disadvantages of R-CNN
- Region is warped -> loss/distortion of information
- Each region is fed into the CNN individually -> If we have 2000 regions we do 2000 inferences per image

---
[R-CNN: Clearly EXPLAINED! - YouTube](https://www.youtube.com/watch?v=nJzQDpppFj0)
[Object Detection for Dummies Part 3: R-CNN Family | Lil'Log (lilianweng.github.io)](https://lilianweng.github.io/posts/2017-12-31-object-recognition-part-3/)