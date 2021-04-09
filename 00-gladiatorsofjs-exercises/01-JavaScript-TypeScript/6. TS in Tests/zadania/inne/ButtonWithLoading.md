<h2 align="center">Opis testóœ do zadania ButtonWithLoading </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawowe umiejętności pisania testów z Jest
- Podstawowa znajomość React-a
 
## Technologie potrzebne do zadania

- Typescript
- React
- Jest

## Cele główne #1 

* [ ] Zaprojektuj testy, w których upewnisz się, że poniższy komponent działa poprawnie

## Cele główne #2

* [ ] Po wyrenderowaniu jest tagiem button
* [ ] Jeśli nic nie ma w propsie children to przed pierwszym kliknieciem text buttona to "don't push my buttons"
* [ ] Kiedy button zostanie kliknięty text jest zastapiony przez "loading..."
* [ ] Na kliknięciu wykona się promise przekazaną w propsie action
* [ ] Po wykonaniu się promisy poprawnie, text buttona zmienia się na "success"
* [ ] Po wykonaniu się promisy z błędem, text buttona zmienia się na "error"
* [ ] Po wykonaniu się promisy z dowolnym wynikiem jej zwrotka ląduje w propsie onClick

## Cele opcjonalne do wykonania

* [ ] Kiedy button zostanie kliknięty nie będzie można w niego ponownie kliknąć w czasie ładowania

## Przydatne linki

- Dokumentacja Jest - https://jestjs.io/docs/en/getting-started

## Kawałek kodu dla lepszego początku!

```javascript
import React, {useState, useEffect} from 'react'

// Komponent do zaprojektowania
const ButtonWithLoading = (
    {onClick, children, action}
)=>{
    // możesz przerobić na komponent klasowy
    return null
}

// przykładowy action do tego zadania
const action = () => new Promise((resolve, reject)=>{
    const timer = setTimeout(()=>{
        clearTimeout(timer)
        if(Math.random() > 0.5){
            resolve('success')
        }
        else{
            reject('error')
        }
    },2000)
})
```
