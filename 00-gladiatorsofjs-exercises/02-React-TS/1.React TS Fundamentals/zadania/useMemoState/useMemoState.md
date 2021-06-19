<h2 align="center">useMemoState hook</h2>

<br>

## Wymagana wiedza

- JavaScript, React

## Technologie potrzebne do zadania

- JavaScript, React

## Cele główne

- [ ] Stwórz custom hook `useMemoState`, który będzie zmemoizowaną wersją useState.

```javascript
// jeśli ten kod tworzący state
const [value, setter] = useMemoState({ val: 0 });

// zostanie wywołany w ten sposób i zadziała:
setter({ val: 0 }); // -> tu zostanie wykonana zmiana stanu

setter({ val: 0 }); // -> tu nie zostanie wykonana zmiana stanu
```

## Przetestuj zadanie

- [ ] Sprawdź czy Twój hook działa poprawnie:

* podczas pierwszego wykonania zmieni state
* podczas drugiego wykonania z tą samą wartością state się nie zmieni

## Przydatne linki

- Czym jest hook useMemo w React? - https://pl.reactjs.org/docs/hooks-reference.html#usememo
