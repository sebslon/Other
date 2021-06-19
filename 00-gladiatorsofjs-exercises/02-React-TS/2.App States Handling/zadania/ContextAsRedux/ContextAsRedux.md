<h2 align="center">Context as redux</h2>

<br>

## Wymagana wiedza

- JavaScript, HTML, React

## Technologie potrzebne do zadania

- JavaScript, HTML, React

## Trochę wiedzy do zadania

Logika Reduxa w React składa się z 5 prostych elementów:

- struktury danych - tzn store/state - komórka pamięci z aktualnym stanem wszystkich danych
- reducera, który agreguje akcje i zmienia wg nich aktualny stan store
- akcji z dodatkowymi danymi wykonywanych na reducerze do modyfikacji store
- Providera - który określa zakres działania Reduxa
- HOCa connect - High Order Component, który tworzy Consumera stanu z danego komponentu

## Cele główne

- [ ] Za pomocą:

  - React ContextApi
  - useContext hook
  - useReducer hook
  - oraz odrobiny znajomości JS

- [ ] Na podstawie kodu na dole pliku, odtwórz Reduxa w React ContextAPI

## Przydatne linki

- Context API - https://pl.reactjs.org/docs/context.html

## Kawałek kodu dla lepszego początku!

```typescript
const initialState = {
  text: "treść",
};

const ctx = React.createContext({
  state: initialState,
  actions: {
    changeText: (state, action) => {},
  },
});

const actions = {
  changeText: (state, action) => {
    // return ...
  },
};

function reducer(state = initialState, action) {
  // zwykły reducer
  // return ...
}

const Provider = ({ children, onLoad, onChange }) => {
  // tutaj łączymy context i actions i wrzucamy je do providera
  // prop onLoad powinien wywołać się na wczytaniu komponentu
  // prop onChange powinien wywołać się na zmianie stanu
  // return ...
};

const useContextState = (stateNames?: Array<string>) => {
  // stateNames to np. ["text"]
  // jeśli stateNames jest pusty to zwraca cały state
  // jeśli stateNames nie jest pusty to zwraca podane w arrayu klucze i wartości w formie nowego obiektu
  // return ...
};

const useContextActions = (actionNames?: Array<string>) => {
  // actionNames to np. ["changeText"]
  // jeśli actionNames jest pusty to zwraca wszystkie akcje
  // jeśli actionNames nie jest pusty to zwraca akcje wskazane po nazwie w arryu actionNames
  // return ...
};

const useContextActionsAndStore = (stateNames?: Array<string>, actionNames?: Array<string>) => {
  // suma logiki powyżej
  // return ...
};
```
