# Model-based methods
The agent has an internal model of the world. It knows (or approximates) all state transitions and their respective rewards. This way the agent can plan multiple steps ahead into the future.

One of the main problems is that for a highly-dimensional state space, it could be intractable for the model to hold on to all possible (state, action, reward)-pairs. Image for example that the model is given an image of the world as input. It is not feasible for the agent to know all possible consecutive images that can result from the actions it can take.

# Model-free methods
Here we don't have a transition model for each state-action pair. Instead the model directly learns a policy. Model-free algorithms are more common today than model-based approaches ([Source](https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html)).

# Further info
In mammal brains, neuroscientists found out that both model-based and model-free approaches are used for learning ([Source](https://www.youtube.com/shorts/wEC0ShYVm_A)).
