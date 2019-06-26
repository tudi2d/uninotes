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

### Abschlusseigenschaften

- L DFA-erkennbar, dann ist auch $\bar{L}$ DFA-erkennbar(Tausche End- und nicht Endzustände)
- $L_1 \cap L_2$, $L_1 \cup L_2$
- $LK$ (Hintereinanderausführung)
- $L^* = \underset{n \in N}\cup L^n$, $L^0 = \{\epsilon \}$, $\emptyset^* = \{ \epsilon \}$

## NFA's

Ein nicht-deterministischer endlicher Automat NFA $A =(Q,\Sigma, \Delta, q_0, F)$. Der Unterschied zum DFA liegt in der:

- Transitionsrelation $\Delta \subseteq Q \times \Sigma \times Q$

Die Erreichbarkeitsmenge eines Wortes auf dem Automaten A: $E(A,w) = \{q \in Q | q_0 \overset{w}{\to} q\}$

### epsilon-NFAs

Ein $\epsilon$-NFA $A=(Q,\Sigma,\Delta,q_0,F)$

- Transitionsrelation $\Delta : Q \times (\Sigma \cup \{ \epsilon \}) \times Q$

Ein Lauf auf einem $\epsilon$-NFA wird ohne $\epsilon$ angegeben

### Potenzmengenkonstruktion

Zu jedem NFA $A=(Q,\Sigma,\delta,q_0,F)$ kann man einen äquivalenten DFA $A'=(Q',\Sigma',\Delta',q_0',F')$ konstruieren mit $L(A) = L(A')$:

- $Q' = Pot(Q)$
- $\delta'(q',a) = \{ q \in Q' | \exists p \in q': (p,a,q) \in \Delta \}$
- $q'_0 = \{ q_0 \}$
- $F' = \{ q \in Q' | F \cap q \neq \emptyset \}$

Da $Q' = Pot(Q)$ ist ein Zustand eine Menge und wird auch mit Mengenklammern geschrieben.

### epsilon-NFA zu NFA

    Hier das Zeug aus der Vorlesung reinpacken

L ist DFA-erkennbar $\Leftrightarrow$ L ist $\epsilon$-NFA-erkennbar $\Leftrightarrow$ L ist FA-erkennbar

#### epsilon-NFA Komplement

Sei A ein $\epsilon$-NFA. Finde $L(\bar A)$:

- Konstruiere zu äquivalenten NFA A'
- Konstruiere zu A' äquivalenten DFA A'' ([Potenzmengenkonstruktion](/SS19/fosap/#potenzmengenkonstruktion))
- Konstruiere DFA $A'''$ mit $L(A''')= L(\bar A'' ) = L(\bar A)$

## Rekursion und Induktion

**Rekursive Definition von Funktionen:**  
Rekursionsanfang: Definiere $f(0)$  
Rekursionsschritt: Definiere $f(n+1)$ aus $f(n)$

**Rekursive Definition von Mengen:**  
Basisregel: $x \in X$  
Rekursive Regel: Wenn $x_1,...,x_k \in X$, dann $x' \in X$ ($x'$ in Abhängigkeit von $x_1,...,x_k$)

## Induktive Beweise

Vollständige Induktion über eine rekursiv Definition $D$ einer Menge $X$ analog zur vollständigen Induktion über die natürlichen Zahlen:  
_Induktionsanfang_: Für alle Basisregeln $x \in X$ die Aussage beweisen  
_Induktionsscritt_: Für alle rekursiven Regeln die Aussage mithilfe der Induktionsannahme beweisen.

## Reguläre Sprachen

$RA_{\Sigma}$ ist die Menge der regulären Ausdrücke. Es gilt $\emptyset \in RA_{\Sigma}$ und $\epsilon \in RA_{\Sigma}$. $L(r) \subseteq \Sigma^*$ ist die Sprache zu dem regulären Ausdruck $r \in RA_{\Sigma}$. Es gilt $L(\emptyset) = \emptyset$, $L(\epsilon) = \{ \epsilon \}$ und $L(a) = \{ a \}$.

> Jede reguläre Sprache ist FA-erkennbar

## Algorithmen für Reguläre Sprachen

## Automaten mit Ausgabe

## Kontextfreie Sprachen
