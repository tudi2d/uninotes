---
title: "Formale Systeme, Automaten & Prozesse"
---

Dies ist meine persönliche Zusammenfassung und Mitschrift der FoSAP Vorlesung des Sommersemesters 2019. Ich beziehe mich hierbei auf die Folien der Vorlesung und Übung und
den [Panikzettel](https://panikzettel.philworld.de/fosap.pdf) zur Vorlesung.

## DFA's

Ein deterministische endliche Automat A ist ein 5 Tupel mit $A = (Q,\Sigma,\delta,q_0,F)$, dass sich wie folgt zusammensetzt:

- $Q$ : Anzahl der Zustände des Automaten
- $\Sigma$ : Eingabealphabet
- $\delta$: Transitionsfunktion $\delta : Q \times \Sigma \rightarrow Q$
- $q_0 \in Q$: Startzustand
- $F \subseteq Q$: Menge der Endzustände

Ein Lauf auf einem Automaten ist ein Tupel der Form $(r_0,a_1,r_1,a_2,...,a_n,r_n)$ mit $\delta (r_{i-1},a_i) = r_i$ und $r_0 = q_0$. Der Lauf ist genau dann akzeptierend, wenn $r_n \in F$.

Ein Automat erkennt eine Sprache $L(A) := \{ w \in \Sigma^* | A \text{ akzeptiert } w \}$. Allgemein ist eine Sprache L DFA-erkennbar, wenn es einen DFA gibt mit $L=L(A)$.

Für alle Sprachen gilt:

- Assoziativ: $(KL)M = K(LM)$
- $L \{ \epsilon \} = \{ \epsilon \}L = L$
- $L \emptyset = \emptyset L = \emptyset$
- Distributiv: $K(L \cup M) = KL \cup KM$ und $(K \cup L)M = KM \cup LM$
- $L^0 = \{ \epsilon \}$
- $L^{n+1} := L^n L$ für $n \in N$
- Kleene-Stern: $L^* := \underset{n \in N}{\bigcup} L^n$
- $L^* L^* = L^*$
- $(L^*)^* = L^*$
- $\emptyset^* = \{\epsilon\}$

### Produktautomaten

Seien 2 DFA's $A_1, A_2$ mit dem selben Alphabet gegeben. Dann ist der Produktautomat:
$A=(Q_1 \times Q_2, \Sigma, \delta, (q_{01},q_{02}),F)$.

## NFA's

## Rekursion und Induktion

## Reguläre Sprachen

## Algorithmen für Reguläre Sprachen

## Automaten mit Ausgabe

## Kontextfreie Sprachen
