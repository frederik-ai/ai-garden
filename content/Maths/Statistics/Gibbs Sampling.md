# Idea
We want to sample from our full joint distribution $p(x_1, x_2, x_3)$
But: If the distribution is complicated, it is difficult to sample from this.

When we have for example a Bayesian Network it is way easier to sample from individual conditional distributions (i.e. $p(x_1|x_2,x_3)$)
# Algorithm
Given: $p(x_1,x_2,...,x_n)$
We want to sample from this distribution

Firstly, initialize all states $x_1,...,x_n$ with random values
Then, sample each conditional distribution individually.
- Sample a random value for $x_1$ from $p(x_1|x_2,...,x_n)$
- Sample a random value for $x_2$ from $p(x_2|x_1, x_3, x_4...,x_n)$
- Repeat this for all other variables, while conditioning on the previously sampled values
- When done for all variables, we have generated a single sample

**Important**: We can make use of the [[Markov Blanket]] of our state $x_i$ to simplify the conditional distribution --> i.e. by looking at the graphical model