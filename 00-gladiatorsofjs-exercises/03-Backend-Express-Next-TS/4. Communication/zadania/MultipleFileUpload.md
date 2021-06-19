<h2 align="center">MultipleFileUpload</h2>

<br>

## Technologie potrzebne do zadania

- Express.js lub Next.js.
- MongoDB lub PostgreSQL

## Cele główne

* [ ] Zbudowanie serwera który pozwala na zapisywanie wielu zdjęć za pomocą jednego endpointu /uploadImages
* [ ] Endpoint przyjmuje pewną liczbę zdjęć (na potrzeby zadania przyjmijmy że od 3 do 5). oraz ich zbiorczą nazwę np: ,,kotki'
* [ ] W momencie otrzymania zdjęć powinny być one zmieniane w miniaturki 40x40px, następnie pakowane do ZIP-a i zapisywane na serwerze
* [ ] Pliki powinny być zapisywane pod podaną nazwą zbiorczą
* [ ] Jeżeli istnieje już podana nazwa, pliki powinny być dopisywane do istniejącego ZIP-a
* [ ] Aplikacja poprzez endpoint /getImages pozwala na pobranie tych plików
* [ ] Endpoint /getImages przyjmuje w body nazwę ZIP-a który powinien być wysłany do klienta

## Cele opcjonalne do wykonania
* [ ] Po wgraniu zdjęcia, serwer powinien konwertować je do base64:
* [ ] https://www.chrisjmendez.com/2017/06/25/nodejs-create-a-base64-image-from-a-png-or-jpg/
* [ ] Przekonwertowane dane powinny być wysyłane na emaila, podanego w body requesta.

## Przydatne linki
- Zmiana wielkości zdjęć :
 - https://medium.com/focus-on-vanilla-javascript/image-upload-and-resizing-in-node-js-and-express-js-40867019aac7
 - https://javascript.plainenglish.io/resize-an-image-using-nodejs-f5e57ac10419
- Jak dodawać pliki na serwer w Node.js
 - https://javascript.plainenglish.io/uploading-files-using-multer-on-server-in-nodejs-and-expressjs-5f4e621ccc67
 - https://alwishariff00001.medium.com/single-multiple-image-upload-in-nodejs-expressjs-using-multer-to-cloudinary-mvc-6747c5278e6f
- Tworzenie plików typu ZIP:
  - https://thecodebarbarian.com/working-with-zip-files-in-node-js.html
  - https://www.geeksforgeeks.org/how-to-convert-a-file-to-zip-file-and-download-it-using-nodejs/

## Kawałek kodu dla lepszego początku!

```typescript

class ImageHandler{
public handleImagesUpload(){}
public handleDownloadingImages(){}
}
```
