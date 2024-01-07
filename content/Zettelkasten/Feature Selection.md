---
ID: "28122023094858"
tags:
  - machine-learning
---
# Purpose
Suppose we have an input dataset with 100 features. For example, we want to determine whether a person has autism or not, based on those features. However, our dataset also contains some features that do not provide any helpful information to our problem. This could for example be whether the person likes hamburgers. This information is useless to us, therefore the feature "likes hamburgers" can be ignored.

The goal of feature selection is to find general rules of which features can be omitted from a dataset when given a machine learning task.
# Types of Feature Selection
There are multiple types of feature selection:
- **Filter methods**
- **Wrapper methods**
- **Embedded methods**
## Filter Methods
These methods require **no model**. To do our feature selection, we look only at our data. We assign each feature a relevance. Our model then is fed only with the most relevant features.
## Wrapper Methods
We **train a model** with our data and see what influence the individual features have on our accuracy. If we see that our accuracy stays the same, even if we completely ignore some features, those particular features do not seem to provide helpful information for our problem at hand.
## Embedded Methods
The **model learns the relevance** of the features by itself.

The main idea for linear regression is the following: We look at the weights $w$ that the model learns from our data. All weights that are $0$ correspond to negligible features. However, we have to formulate our model in such a way that it actually assigns the weight $0$ to some features.

For linear regression that exist different types of regularization that each work better or worse for feature selection:
- **Ridge Regression**
	- Adds an **L2-term** for the weights to the loss-function $\textrm{NLL} + \lambda ||w||_{2}^{2}$
	- No weights ever get set to $0$. Unimportant features get a small weight. We can never know whether to omit this feature or not
- **Lasso Regression**
	- Adds an **L1-term** for the weights to the loss function $\textrm{NLL} + \lambda ||w||_{1}^{1}$
	- Unimportant weights do get set to $0$
	- But, when we have multiple correlated features only one of them will be set to $0$
- **Elastic Net**
	- Adds both an **L1-term** and an **L2-term** for the weights to the loss function $\textrm{NLL} + \lambda_1 ||w||_{1}^{1} + \lambda_2 ||w||_2^2$
	- If we have multiple correlated features, they will all get roughly the same weight