---
ID: "28122023140350"
tags:
  - computer-vision
  - feature-detection
---
# Why do we need Feature Indexing
To compute the [[Nearest Neighbor Distance Ratio]] we need to get the $k$ most similar keypoints in the database image compared to each keypoint in the query image.

The brute force approach is to compare every possible combination of features. This is incredibly tedious and slow.

Feature indexing helps us swiftly identify which are the most similar features to a given keypoint.

# Types of Feature Indexing
## Hashing
Calculate a hash-value for each feature. For example by applying certain filters and using the result as the hash-value:
![[Pasted image 20231228141728.png]]
Similar features will have similar hash-values:
![[Screenshot 2023-03-06 090324 -edited.png]]
Therefore we only have to compare all other features to our query feature that yield the same hash value.
## K-d Trees
K-d Trees turn a set of datapoints into a graph-structure. We split our data iteratively along the dimension with the most variance. We do this until each point has its own bin. For a query point, we traverse this tree until we find a leaf node which is then the closest point in our data.
![[Pasted image 20231228142243.png]]
TODO: more thorough explanation of how we find the closest point
