---
ID: "23122023124828"
tags:
  - machine-learning
  - classification
---
Even though it has the word regression in its name, logistic regression is a **binary** classification algorithm. Similar to [[Linear Regression]], logistic regression computes a linear function $w\cdot x + b$. However, in contrast to the former, logistic regression applies the [[Sigmoid Function]] to map this result to a probability of range $[0;1]$. This way, the output is the probability that the query point belongs to class $1$. Via a threshold we define whether a probability is interpreted as class $0$ or class $1$. Typically this is the value $0.5$.

![[Pasted image 20231223221349.png]]
source: [Logistic Regression Explained in 7 Minutes. (natasshaselvaraj.com)](https://www.natasshaselvaraj.com/logistic-regression-explained-in-7-minutes/)