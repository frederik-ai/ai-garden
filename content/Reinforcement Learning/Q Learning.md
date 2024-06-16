Q-Learning is off-policy. We are essentially trying to learn the values of state-action-pairs $(s_t, a_t)$​​. What we get through Q-Learning is a table which assigns each of these pairs a value.

---

<img src="https://nestedsoftware.com/assets/images/2019-07-25-tic-tac-toe-with-tabular-q-learning-1kdn.139811/5cxtk1igxig8b0qapwew.png" alt="Tic-Tac-Toe with Tabular Q-Learning" style="zoom:67%;" />

*Illustration of a Q-table ([Source](https://nestedsoftware.com/2019/07/25/tic-tac-toe-with-tabular-q-learning-1kdn.139811.html))*

---

A Q-function is optimal if the action with the highest Q-value for all possible state-action pairs always gives us the action that maximizers future reward.

# Learning

The classic update rule for Q-learning is:
$$
Q(s,a) \larr Q(s,a) + \alpha(r+\gamma\cdot\max_{a'}Q(s',a')  Q(s,a))
$$

> [!note]
>
> Video about Double Deep Q-Learning: [Double DQN - YouTube](https://www.youtube.com/watch?v=Lb5ADHnRQV8)

