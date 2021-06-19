<h2 align="center">Project Refactor</h2>

<br>

## Wymagana wiedza

- TypeScript, React

## Technologie potrzebne do zadania

- TypeScript, React, Redux / Context API

## Cele główne

- [ ] W folderze `Project` znajduje się mały projekt. Zawiera on dużo błędów które trzeba poprawić:

  - strona nie jest responsywa (zbudowana jest tylko na desktop - zadbaj o mobile first),
  - formularz nie ma walidacji,
  - zadbaj o walidację API - jeśli będzie error użytkownik ma to zobaczyć,
  - otypuj prawidłowo aplikację w Typescript,
  - posegregować wszystkie rzeczy pod architekturę React'a,
  - zamienić bardzo duże komponenty na mniejsze,
  - gdy pewna ilość kodu się powtarza, skróć ją (DRY),
  - użycie Reduxa / Context API,
  - robić obsługiwanie requestów przy pomocy RequestHandler'a,
  - jeśli jakaś akcja zostanie wykonanie postaraj się powiadomić użytkownika w jakiś sposób (żeby się nie domyślał) - np. przy dodaniu książki do listy ulubionych książęk,
  - dodaj animacje do strony,
  - zadbaj o lepsze UI dla użytkownika.

- [ ] Z góry informuję, że brak paginacji nie jest problemem na tej stronie - google api dla książek nie jest idealne i zawiera trochę błędów z czego niepoprawna paginacja jest jednym z nich. Więc podczas wyświetlania książek wyświetlaj od 0 indexu i tylko jedną stronę.

- [ ] Wskazówki dla walidacji głównego formularza:

  - Najkrótsza książka jaka istnieje to 'IT' Stephena Kinga, więc jest to minimalna długość książki
  - Ilość książek mieści się w przedziale od 1 do 40 (defaultowo ustawiłem liczbę w aplikacji na 30)
  - Uwzględnianie autora nie jest wymagane, ale jeżeli użytkownik coś wpiszę to pamiętaj - najkrótsze imię i nazwisko autora książek to: 'U Nu'

- [ ] Główną nauką którą wyniesiesz z zadania to - "To że działa, nie znaczy że jest dobrze napisane."

## Przydatne linki

Google books API, które zostało użyte w projekcie: https://developers.google.com/books/docs/v1/using#WorkingVolumes

Wykłady na temat architektury:

1. https://drive.google.com/file/d/1_Z6iLhVTW1SIevRSm3n2k0_gU8UW5bA_/view
2. https://drive.google.com/file/d/1lBFB1LgAIklAvjhsZ0NPl8ScVR8loQST/view

Figma użyta w wykładach - https://www.figma.com/file/HNS45l5pieZIk9w66bp21C/Gladiatorzy?node-id=159%3A2
