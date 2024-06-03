In RL there is a general dilemma on whether the agent should do exploration or exploitation in a given time step. First, let’s define these terms.

During **exploitation** the agent always takes the best possible action according to its current policy. According to the current knowledge of the agent, this will maximize its total reward.

During **exploration** the agent takes a random action and can thereby improve its policy. For example if it finds out that this random action will lead to a higher total reward.