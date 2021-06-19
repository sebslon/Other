<h2 align="center">MasterFilterAndPagination</h2>

<br>
 
## Technologie potrzebne do zadania

- Exspress.js
- MongoDb/PostgreSQL

## Cele główne
* [ ] Stwórz bazę danych zawierającą opisy filmików, komentarze do tych filmików oraz oceny dla każdego komentarza i filmiku.
* [ ] Aplikacja powinna wystawiać endpoint /getYoutuberData, który przyjmuje w body nazwę kanału
* [ ] Po wywołaniu endpointa serwer powinien połączyć się  z YouTube API i wyciągać z niego informacje na temat filmików twórcy, komentarzy do nich a także ich ocen,a następnie       zapisywać je w bazie danych.
* [ ] Dla każdego zasobu aplikacja powinna udostępniać akcje CRUD
* [ ] Wszystkie endpointy typu GET powinny umożliwać:
* [ ] - paginację
* [ ] - filtrowanie według podanej sentencji: 'searchSentence=Piesek': powinno zwrócić wszystkie zasoby posiadające w swojej treści słowo Piesek
* [ ] - grupowanie: np :jeśli query groupBy='author_id', wszystkie wyszukane komentarze napisane przez autora o tym samym id powinny zostać zgrupowane w jeden obiekt

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Paginacja w Exspress: https://www.youtube.com/watch?v=ZX3qt0UWifc
- Grupowanie,filtracja,paginacja w CRUD: https://medium.com/swlh/node-js-api-add-crud-operations-with-pagination-filtering-grouping-and-sorting-capabilities-55375ad0b774

## Kawałek kodu dla lepszego początku!

```typescript
class VideoController{

public getVideos(req:Request, res:Response)
 {
 ... przetwarzanie danych
 }

public deleteVideos(req:Request, res:Response)
 {
 ... przetwarzanie danych
 }

public updateVideos(req:Request, res:Response)
 {
 ... przetwarzanie danych
 }
 
}
```
