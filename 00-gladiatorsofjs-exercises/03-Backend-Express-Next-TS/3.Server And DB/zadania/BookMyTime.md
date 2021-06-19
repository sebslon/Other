<h2 align="center">BookMyTime</h2>

<br>

## Wymagana wiedza
- Znajomośc podstaw integracji z API Googla
- Express.js lub Next.js.
- MongoDb/PostgreSQL

## Cele główne

* [ ] Za pomocą Google API stwórz aplikację pozwalającą na tworzenie,edytowanie oraz usuwanie wydarzeń w Kalendarzu Googla
* [ ] Każde utworzone wydarzenie powinno być zapisywane w bazie danych.
* [ ] Przy edytowaniu lub usuwaniu wydarzeń te same akcje powinny być wykonane na danych znajdujących się w bazie danych
* [ ] Aplikacja pozwala wyświetlenie wszystkich wydarzeń zapisanych w bazie danych.
* [ ] Aplikacja powinna walidować dane tworzonych i edytowanych wydarzeń:
- nie można zapisać więcej niż 3 zdarzeń
- pomiędzy spotkaniami musi być minimalnie 15 minut przerwy
- spotkanie może trwać maksymalnie 3 godziny

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Google Calendar API z Node - https://medium.com/@vishnuit18/google-calendar-sync-with-nodejs-91a88e1f1f47
- Biblioteka ułatwiająca pracę z Google Api - https://www.npmjs.com/package/googleapis

## Kawałek kodu dla lepszego początku!

```typescript
class GoogleCalendarHandler{

public createEvent(dataToCreateEvent){}
public editEvent(id,dataForEditEvent){}
public deleteEvent(id){}

```
