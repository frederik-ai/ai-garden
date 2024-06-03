Q-Learning is off-policy. We are essentially trying to learn the values of state-action-pairs $(s_t, a_t)$​. What we get through Q-Learning is a table which assigns each of these pairs a value.

<img src="https://nestedsoftware.com/assets/images/2019-07-25-tic-tac-toe-with-tabular-q-learning-1kdn.139811/5cxtk1igxig8b0qapwew.png" alt="Tic-Tac-Toe with Tabular Q-Learning" style="zoom:67%;" />

# Multi-Agent Q-Learning

Q-Learning cannot only be used for a single agent. We can use it to learn the state-action pairs for multiple agents. In this case our Q-table can become very large, because for each state we have lots of combinations of different actions from all our agents.

Therefore multi-agent Q-Learning is infeasable using traditional approaches. However, we can instead use DNNs to model this problem.

