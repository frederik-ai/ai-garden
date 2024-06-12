The perplexity is a metric that should tell us how well a language model performs. When given  a sequence of words $w_1 w_2 ...w_n$ we can compute the probability that our model would generate such a sequence $p(w_1w_2...w_n)$.

The perplexity $PP$ is the inverse of this probability normalized for the total number of words in the sentence (N)$:
$$
PP = p(w_1w_2...w_n)^{-\frac{1}{N}} = \sqrt[N]{\frac{1}{p(w_1w_2...w_n)}}
$$

> [!note]
>
> Why do we use the perplexity instead of the probability? The probability of long sentences will automatically be lower than the probability of short sentences. This is because our joint probability distribution consists of more variables. The perplexity solves this issue by normalizing w.r.t.  the length of the sentence

The perplexity can also be computed on a whole corpus instead of just individual sentences. This way we can compare models by calculating their perplexity on the whole test data.

# References

[Two minutes NLP — Perplexity explained with simple probabilities | by Fabio Chiusano | NLPlanet | Medium](https://medium.com/nlplanet/two-minutes-nlp-perplexity-explained-with-simple-probabilities-6cdc46884584)