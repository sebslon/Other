<h2 align="center">Dynamic Form</h2>

<br>

## Wymagana wiedza

- Podstawy html oraz JavaScript


## Technologie potrzebne do zadania

- HTML, JavaScript, 

## Cele główne

* [ ] Stwórz funkcję `generateFormOnPattern` która za argument przyjmuje zestaw danych zawierających ustawienia, która będzie generowała schemat formularza wg. poniższego przykładu:
- Dane wejściowe:
```javaScript
const testSettings = {
    action:'/contact/by-mail',
    method:'POST',
    inputs:[
        {type:'header', label:'Skontaktuj się z nami'},
        {name:'email', type:'email', placeholder:'Wpisz swój email'},
        {name:'content', type:'textarea', placeholder:'Wpisz treść wiadomości'},
        {type:'submit', label:'Wyślij wiadomość'}
    ]
}
```
- Formularz wygenerowany za pomocą funkcji `generateFormOnPattern`:
```html
<form method="POST" action="/contact/by-mail">
    <h4>Skontaktuj się z nami</h4>
    <input type="email" name="email" placeholder="Wpisz swój email">
    <textarea name="content" placeholder="Wpisz treść wiadomości"></textarea>
    <button>
        Wyślij wiadomość
    </button>
</form> 
```

* [ ] Do wykonania zadania możesz użyć ustawień `testSettings`

## Przydatne linki

- Dokumentacja formularzy - https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form

## Kawałek kodu dla lepszego początku!

```javascript
function generateFormOnPattern(settings){
    // return ...
}
```
