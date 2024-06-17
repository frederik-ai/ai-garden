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

