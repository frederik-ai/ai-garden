091220230920
Tags: #cognitive-computing #sampling 
# Idea
We pick a random starting point in our target distribution. Then, randomly move our point according to another distribution (i.e. normal distribution) and decide whether to accept or reject this new sample. Repeat this process of moving our point to generate samples.
# Examples
In the examples we use a normal distribution with a certain $\sigma$ to sample a new point. The hyperparameter $\sigma$ decides, how far away our new points will be.
The normal distribution is centered around our previous sample $\theta_{t-1}$. Our new point is $\theta_t$ to which the arrow points.
## Accepted Sample
![[Pasted image 20231209092659.png]]   
## Rejected Sample
![[Pasted image 20231209093423.png]]