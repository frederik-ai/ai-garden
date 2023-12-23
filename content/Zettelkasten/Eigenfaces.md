171220232225
Tags: #bildverarbeitung

Idee
- Innerhalb des Raumes aller möglichen Bilder existiert ein Teilbereich, der all die Bilder beschreibt, die ein Gesicht zeigen
- Wir wollen diesen Bereich finden und dann für Eingabebilder prüfen, wie weit die Bilder von diesem Bereich entfernt sind

Wie finden wir diesen "Gesichtsraum"?
- Wir benötigen Trainingsdaten
- Zunächst bestimmen wir mit diesen Daten das "Durchschnittsgesicht"
- Dann erstellen wir eine Kovarianzmatrix, die angibt, wie stark die Pixelwerte zwischen den Trainingsbeispielen korrelieren
	- $C=\frac{1}{I}\cdot A \cdot A^T$
	- Mit $A=[d_1, d_2, ..., d_I]^T$ und $I\equiv$ Anzahl Trainingspixel. Jedes $d_i$ sind die normierten Pixel eines Trainingsbilds
- Die Eigenvektoren der Kovarianzmatrix spannen unseren Gesichtsraum auf

![[Pasted image 20231217225812.jpg]]

Was gewinnen wir durch diese Eigenvektoren?
- Der Gesichtsraum, der vorher durch die Pixelwerte aller Trainingsbilder beschrieben wurde, ist jetzt auf einige wenige Eigenvektoren reduziert -> Wir haben die Information quasi komprimiert

Wie benutzen wir diese Eigenvektoren?
- Wir können berechnen, wie ähnlich unser Eingabebild zu den Eigenvektoren jeweils ist
- Wenn eine hohe Ähnlichkeit besteht, dann handelt es sich wahrscheinlich um ein Gesicht