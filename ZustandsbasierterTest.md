# Negativtest unerlaubter Spielzug
## Vorbedingung:
Das Spiel befindet sich im Anfangszustand. Der Spieler hat gültige Züge auf [2,3], [3,2], [4,5] und [5,4].
## Ereignis:
Spieler versucht, einen Stein auf Feld [0,0] zu setzen, dass kein gültiger Zug ist.
## Sollreaktion:
Die Methode Board.play wirft eine RangeError-Exception mit einer Meldung wie „move [0/0] is not valid for player“.
## Nachbedingung:
Das Brett bleibt unverändert im Ausgangszustand, keine Steine werden hinzugefügt oder umgedreht.



# Positivtest erlaubter Spielzug
## Vorbedingung:
Das Spiel befindet sich im Anfangszustand. Der Spieler hat gültige Züge auf [2,3], [3,2], [4,5] und [5,4].
## Ereignis:
Spieler 1 setzt einen Stein auf [2,3].
## Sollreaktion:
Die Methode Board.play erzeugt ein neues Board-Objekt, in dem der gesetzte Stein auf [2,3] steht, und alle überflügelten weissen Steine korrekt auf schwarz gedreht werden.
## Nachbedingung:
Das neue Brett hat eine neue Anordnung die Steine sind verschoben und das Brett wird so gespeichert.

