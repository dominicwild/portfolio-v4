# NLP Language Classifier

A *Natural Language Processing* project using *machine learning* techniques to identify the *language* of a particular
*corpus of text*.

The classifier was made completely *from scratch* using *Java*, with no external machine learning libraries used.
*Cross-validation*, *frequency analysis*, and *variable training set size* methods were used to evaluate the
effectiveness of the technique implemented.

My *language identification system* works by using *rank-order n-gram statistics* to predict a language. The output of
my system is a *distance metric* that determines how likely a piece of text is to be a particular *target language*.
Implementation was *based on a research paper*.

Building this system taught me a lot about *machine learning* and the *processes* that need to be undertaken in order to
*process data*. It gave me experience in handling *high volumes of data* (300k sentences) and *analysing that data* to
form conclusions.

The conclusion of this project was an **accurate classifier**, maintaining *95% accuracy* even for corpora only *20–40
words* in size, needing *30,000–40,000 words* to give *stable predictions*. This was all validated using *10-fold
cross-validation* (tested only with *English*, *Czech*, *German*, and *Slovenian*).
