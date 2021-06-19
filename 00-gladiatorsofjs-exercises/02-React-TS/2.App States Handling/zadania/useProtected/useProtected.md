<h2 align="center">useProtected hook</h2>

<br>

## Wymagana wiedza

- JavaScript, React

## Technologie potrzebne do zadania

- JavaScript, React

## Cele główne

Na podstawie tego kontekstu:

```javascript
const userCtx = React.createContext({ auth: false });
```

oraz dla routes:

```javascript
const routes = [
  {
    url: "/login",
    protected: false,
  },
  {
    url: "/",
    protected: true,
  },
];
```

- [ ] Stwórz hooka `useProtected` używając useContext, którzy działa w następujący sposób:

* jeśli w kontekście userCtx {auth} jest false robi przekierowanie na '/login'
* jeśli w kontekście auth jest true to useProtected wyświetla komponent, w którym hook jest zaimplementowany

## Cele dodatkowe

- [ ] To ćwiczenie możesz wykonać zarówno z użyciem Reduxa i hooka useReducer
- [ ] To ćwiczenie możesz wykonać zarówno z react-router jak i na sucho

## Przydatne linki

- Tworzenie własnych hooków - https://pl.reactjs.org/docs/hooks-custom.html

## Kawałek kodu na lepszy początek

```javascript
const useProtected = (actualRoute) => {
  // return null
};
```
