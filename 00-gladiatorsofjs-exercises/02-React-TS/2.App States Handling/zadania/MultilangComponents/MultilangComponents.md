<h2 align="center">Multilang Components</h2>

<br>

## Wymagana wiedza

- JavaScript, HTML, CSS

## Technologie potrzebne do zadania

- JavaScript, HTML, CSS

## Cele główne

- [ ] Wykorzystując hook `createContext` stwórz kontekst `LangContext` który będzie "dostarczał" tłumaczenia wielojęzykowe wybranego komponentu.
- [ ] Stwórz komponenty `AttentionSection` i `NewsletterSection`, które na podstawie propa `sectionName` pobierają z kontekstu odpowiednie teksty dla odpowiedniej sekcji w odpowiednim języku.
- [ ] Stwórz komponent `LangChanger`, który przy pomocy przycisków z flagami, pozwoli zmienić `LangContext` pomiędzy pl i en.
- [ ] Zasadza działania: podczas przełączania języka z pl na en i odwrotnie, sekcje mają wyświetlać odpowiednie teksty zaciągane z kontekstu.

## Kawałek kodu dla lepszego początku!

```javascript
// to są dostępne języki

const langs = {
  pl,
  en,
};
// to jest kontekst do wielojęzyczności aplikacji
// dane językowe oraz metody do zmiany muszą zostać załadowane do kontekstu
const LangContext = React.createContext();

// to jest LangChanger
const LangChanger = ({ langs = langs }) => {
  // return ...
};

// to jest przykładowa sekcja
const AttentionSection = ({ sectionName = "attention" }) => {
  // texts brane z LangContext
  const { title, subtitle, ctaButton } = texts[sectionName];
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
};

// to są dane językowe Twoich komponentów
const pl = {
  attention: {
    title: "Dobrze, że jesteś, sprawdź to zadanie",
    subtitle: "Pomoże Ci ogarnąć jak zmieniać język w apkach reacta",
    ctaButton: "Dowiedź się więcej",
  },
  newsletter: {
    title: "Bądź na bieżąco",
    ctaButton: "Idź do repo ->",
    action: "/new-subscriber?lang=pl",
  },
};
const en = {
  attention: {
    title: "Hey, check this task",
    subtitle: "It can help You to learn how to change language in react app",
    ctaButton: "More",
  },
  newsletter: {
    title: "Let's keep in touch",
    ctaButton: "To repository !!!",
    action: "/new-subscriber?lang=en",
  },
};
```

## Przydatne linki

- React Context - https://pl.reactjs.org/docs/context.html
