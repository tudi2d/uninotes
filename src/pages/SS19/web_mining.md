---
title: "Web Mining"
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

**Inverted Index:**

_Document 1:_ Hans is a goat.  
_Document 2:_ A goat is an animal ... goat.

_Simple inverted index:_
Hans: $id_1$, ... , goat: $id_1, id_2$, is: $id_1, id_2$, anmial: $id_2$, ...  
_More complex inverted index:_
Hans: $<id_1,1[1]>$, ... , goat: $<id_1,1,[4], <id_2,2,[2,x]$, is: $<id_1,1,[2]>, <id_2,1,[3]>$, ...

The inverted Index can be stored in a large hashtable

## Web Content Mining
