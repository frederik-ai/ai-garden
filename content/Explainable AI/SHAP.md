> An excellent explanation is given by this YouTube video: https://www.youtube.com/watch?v=VB9uV-x0gtg

SHAP is one of the most popular methods of explainability. 

# Shapley Values

This explainability method is based on Shapely values, a concept from game theory. It operates in the following scenario:

- Players cooperate in coalitions to achieve a common goal
- Upon achieving the goal, the coalition receives a reward
- Instead of dividing the reward equally among players, each player should receive a share proportional to their contribution to achieving the goal

To calculate Shapely values, we analyze how the coalition would perform if each player were excluded one at a time:

- Consider every possible coalition that can be formed with the players (including coalitions of varying sizes)
- Determine the reward  obtained by each coalition
- A player's contribution is assessed by averaging the reward across all coalitions in which they participated

This yields the player's *marginal contribution*, which indicates their impact on the coalition's success.

# Additive Explanations

This is how SHAP (Shapley Additive Explanations) differs from the general concept of Shapley values.

The idea is the following: We have a model $f(x)$. Here we want to explain how much the features $x$ contribute to the output $f(x)$. We thereby try to get an explanation model $g(x')$. Here $x'$ is a simplified version of the input vector $x$. We for example convert $x$ to a binary vector which only tells us whether a feature is currently included into our explanation or not.

The explanation model $g(x')$ is then obtained as follows:
$$
g(x') = \varphi_0 + \sum_{i=1}^M \varphi_i \cdot x'_i
$$
Whereas:

- $\varphi_{0}$ is the average output of our model
- $\varphi_i$ is the Shapley value of $x_i'$
- $M$ is the total number of features

SHAP has three mandatory requirements that it fulfills. One of them is that if $x$ and $x'$ are roughly similar, then the results of $f(x)$ and $g(x')$ will also be roughly the same. Why does this help? Well, this means that $g(x')$ gives us the same prediction as $f(x)$. We can now use $g(x')$ to calculate what predictions our model would give us if we didn't have specific features. This goes beyond just calculating feature importances with Shapley. This way, we can actually see how our model would perform if specific features weren't present. -> **Local Accuracy**

The second requirement is that if a feature is not present (via $x_j' = 0$) then its relevance $\varphi(x_j')$ should be zero. 
-> **Missingness**

The last requirement is that if a model $f'(x)$ is impacted more when we remove feature $j$ than another function $f(x)$, the feature importance for $j$ in $f'(x)$ (-> $\varphi_j(f',x)$) should be larger than the one in $f(x)$ (-> $\varphi_j(f, x)$). 
-> **Consistency**

# Kernel SHAP

- Classically we have to compute all possible coalitions (all possible permutations of features) for our data
- In Deep Learning this would be infeasible
- Therefore Kernel SHAP users a different approach

Here we use a similar approach as in [LIME](LIME.md). For images it works as follows:

- We divide our image into megapixels
