---
title: "Web Mining"
description: ""
---

This is my personal summary of the lecture "Web Mining" hold by the [CSSH at the RWTH Aachen](http://cssh.rwth-aachen.de/) in the summer term of 2019. The structure of this document is based on the structure of the lecture. My goal was not to copy the slides but provide an easy to read document which contains the key information of the lecture and helps prepairing for the exam.

---

## Introduction

A general definition of the web mining:

> Web mining is the use of data mining techniques to automatically discover and extract information from Web documents (R. Kosala, 2000)

Web Mining splits into 3 main fields. All 3 of them are covered in some way in this lecutre.

- Web Content Minng
  - Detect regularities in unstructured content (e.g. HTML)
  - Categorize/Cluster/Classify websites
  - Application of text mining
- Web Structure Mining
  - Analyze the links between websites and effects
  - Application of network analysis
- Web Usage Mining
  - Analyze user behavior on the web

Goals of this course are to understand search engines, algorithms for finding access patterns, statistical model for user behavior and gain practical experience in web mining with python.

### Statistics

We need to define some statistic measurements, which are used during this coures.

Mode: Most frequent value  
Mean: Expected value $E[X]$, also written as $\bar{x}$ or $\mu$  
Median: Value that separates lower and higher half of values  
Variance: Measure of spread: $V = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2$  
Standard deviation: $\sqrt{V}$  
Maximum likelihood: Choose the parameter which maximize the likelihood

A statistical model embodies assumption how the data is generated in a probabilistic way.

[Overview of statistics for programmers](http://greenteapress.com/thinkstats/thinkstats.pdf)

### Optimization

Gradient descent (GD): Minimize a function: $f(x) = f(x) - f'(x)$. Start at a random x and step towards the x with $f'(x) = 0$.
Convex-Function: For this speacial functions the gradient descent will find the global minimum  
Stochastic gradient descent (SGD): Faster to compute then the complete gradient, but will not converge as for $f'(x)$ there will be a $a$ so that $y=y-a*f'(x)$. $a$ is called the learing rate a

### How does the internet work

OSI model: Open Systems Interconnection Model - Organizes services between clients in a network

![OSI model](https://bilder.pcwelt.de/2015958_original.jpg)

Transport oriented layers: Network layer (IP network protocol); Transport layer (TCP-IP protocol); Physical layer (Transmission of raw bits); Data link layer (Mac address, PPP connection)  
Application oriented layers: Session layer; Presentation layer (Encryption, Compression); Application layer (Interface to end-user)

We have basically 2 options to receive a lot of data from a website:

- **Web scraping**
  - Request HTML pages
  - Extract information
  - **Disadvantages**: Parsing is difficult, lass efficent and can break down by little changes; Web scraper can be blocked
  - **Advantages**: Get all information a user can see, less restricted, API are not always avaible
- Web services/API's
  - Client-Server architecture
  - Return format XML/JSON

OAuth: Open auth protocol

### Web Search & Information Retrieval

Spidering: Bots/Crawlers recursively follow linked websites from given Start-URLs  
Sitemaps: XML which informs crawlers about avaible URLs from the website  
robots.txt: Inform web crawlers which files/folders are allowed for crawling. The crawler is not bound to this  
Bot detection: CAPTCHA, honeypot
Preferential crawlers: Give unvisited link a priority

#### Inverted Index

_Document 1:_ Hans is a goat.  
_Document 2:_ A goat is an animal ... goat.

_Simple inverted index:_
Hans: $id_1$, ... , goat: $id_1, id_2$, is: $id_1, id_2$, anmial: $id_2$, ...  
_More complex inverted index:_
Hans: $<id_1,1[1]>$, ... , goat: $<id_1,1,[4], <id_2,2,[2,x]$, is: $<id_1,1,[2]>, <id_2,1,[3]>$, ...

The inverted Index can be stored in a large hashtable

## Web Content Mining

### Information Retrieval

Finding relevant documents (web pages) to a given user query, for example with web search. In difference to normal data retrieval we don't have a ordered/structured database and no query language like SQL to retriev data. The found documents are than going to be ranked according to their relevance for the user.

![IR Architecture](https://image.slidesharecdn.com/tdminformationretrieval-150803041801-lva1-app6891/95/tdm-information-retrieval-13-638.jpg/cb%3D1438575616)

Web search is different to traditional IR:

- Efficiency is more important
- Web pages differ from pure text
- Spamming is a issue on the Web

### Information retrieval models

Describes how a document/query is represented and the relevance of a document for a given query

#### Boolean Model

- Simplest IR model based on boolean algebra (AND, OR, NOT)
- The documents for which the query is locial true will be retrieved

A = Brutus; B = Caesar; C = Calpurnia

|     | Hamlet | Othello | Macbeth |
| --- | ------ | ------- | ------- |
| A   | 1      | 0       | 0       |
| B   | 1      | 1       | 1       |
| C   | 0      | 0       | 0       |

Brutus AND Caesar AND NOT Calpurnia  
100 AND 111 AND NOT 000 $\rightarrow$ 100

#### Vector Space Model

- Most widely used IR model

**Term Frequency (TF):** $tf_{ij}= \frac{f_{ij}}{max\{f_{1j},...,f_{|V|j}\}}$  
$f_{ij}$ is the number how often Term i appears in Document j  
**Inverse document frequency (IDF):** $idf_i = \log \frac{N}{df_i}$  
**TF-IDF:** $w_{ij} = tf_{ij} \times idf_i$  
$N$: number of documenst; $df_i$: number of documents where $t_i$ appears  
**Cosine similarity:** $\cos(d_j, q)= \frac{<d_j, q>}{||d_j|| \times ||q||}$

`TODO: Add Example`

Advantages:

- Partial matching (even when no document contains every term)
- Ranking similarity
- Term weighting

### Evaluation Measures

Are retrieved documents relevant and are all relevant documents retrieved?

Precision at position i: $p(i)=\frac{\text{Number of relevant documents until i}}{i}$  
Recall: $\frac{\text{Number of relevant documents until i}}{\text{Number of all relevant documents}}$  
Average Precision: $p_{avg}=\frac{\sum p(i)}{\text{Number of all relevant documents}}$

### Text and web page preprocessing

This includes stemming, stopword removal, HTML tag removal,... to make a documents shorter and queryable.

### Indexing documents for retrieval

#### Latent Semantic Indexing

Goal: Identify association of terms

Eigenvalue($\Lambda$) and Eigenvector($v$): $\text{S}v = \Lambda v$

#### Singular Value Decomposition

Factor a matrix A ($m \times n$) into 3: $A = U \Sigma V^T$ with

Here is a [good example](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm) on SVD.

## Web Structure Mining

## Association Rule Mining

## Subgroup Discovery

## Recommender Systems

## Sequential Data

## Misbehaviour on the Web

## Representation learning
