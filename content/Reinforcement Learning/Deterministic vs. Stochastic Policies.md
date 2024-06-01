**Deterministic vs. Stochastic Policies**

# Deterministic Policies

If given a world state, the policy $\pi(s)$ always yields the same action. This way, the agent learns a fixed mapping from states to actions ($\pi: s \rarr a$).

# Stochastic Policies

Here the agent instead learns a probability distribution. If given a world state, the agent will sample an action from this policy. The most likely action will be sampled more often than the others. However, theoretically, each action could happen.
