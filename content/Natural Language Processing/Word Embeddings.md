# General Idea

NNs work with vectorized input data. They do not understand language. This is why we somehow have to vectorize our characters of a word or our words of a sentence.

The idea for this is the following: First, we convert our word into a one-hot vector. Whereas the length of the vector corresponds to the size of our vocabulary (i.e. all characters or words that our model can receive). Embeddings then convert this one-hot vector to a vector of n dimensions. The embedding layer consists of a matrix which yields a different output vector for each element of our vocabulary.

In the following example we have a one-hot vector which we multiply with the matrix of our embedding layer. 
$$
[0, 0, \colorbox{blue}{$1$}, 0] \cdot 
\begin{bmatrix} 
52 & 5\\ 
16 & 8\\
\colorbox{blue}{$85$} & \colorbox{blue}{$5$}\\
66 & 74
\end{bmatrix}
= [\colorbox{blue}{85}, \colorbox{blue}{5}]
$$
We can observe the following effects:

1. The output vector removes the sparsity of our input. The input coinsists of a single one and zeroes otherwise. NNs can hardly learn from this kind of data. The embedding on the other hand does not have this sparsity.
2. This way, each possible one-hot vector is assigned to a single row in the embedding matrix
3. The resulting embedding is lower-dimensional than our input! This is especially great for large vocabularies

One of the main ideas of embeddings is that similar inputs should have close embeddings. Examples:

- The embedding of the word *cat* should be more similar to the embedding *dog* than to *house*

- The embedding of the word *king* should be more similar to *queen* than to *washing machine*


Essentially, an embedding layer can be seen as a lookup-table. Note that the idea of embedding layers in deep learning frameworks is that we do not have to input one-hot vectors. Instead we input the index of our input char/word. [Embedding Layer in Pytorch - Documentation](https://pytorch.org/docs/stable/generated/torch.nn.Embedding.html)

# Visualization of Word Embeddings

Word embeddings are retrieved in a high-dimensional vector-space. We can use PCA or some other methods to reduce this down to 2D or 3D such that the distance between embeddings can be visualized. 

<img src="https://www.researchgate.net/profile/Faiza-Khattak/publication/332543716/figure/fig4/AS:796161606705153@1566831127474/Pubmed-Word-embedding-visualization-Green-text-Anatomical-location-heart-lung-liver.ppm" alt="Visualization of Word Embeddings" style="zoom:130%;" />

# Contextual Embeddings

