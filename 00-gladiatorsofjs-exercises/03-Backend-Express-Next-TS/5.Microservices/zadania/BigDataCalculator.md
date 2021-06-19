<h2 align="center">BigDataCalculator</h2>

<br>

## Wymagana wiedza
- Podstawowa wiedza na temat założenia architektury mikroserwisów
- Podstawowa wiedza na temat Dockera, Docker-Composa
- Podstawowa wiedza na temat RabbitMq
## Technologie potrzebne do zadania

- Express.js + Next.js

## Cele główne

* [ ] Stwórz aplikację opartą na architekturze mikroserwisów symulującą aplikacje z zakresu ,,Big Data''.
* [ ] Aplikacja powinna posiadać za pomocą endpointu /startCalculating, wysyłać tablicę złożoną z miliona elementów typu number do mikroserwisu ,,Aggregate''
* [ ] Mikroserwis A powinien odpowiednio agregować tą tablicę:
*  Numery mniejsze niż 10 powinnny być wysyłane do mikroserwisu C
*  Numery większe niż 10 powinny być wysyłane do mikroserwisu D
*  Numery podzielne przez 50 powinny być wysyłane do mikroserwisu E
*  Elementy nie mogą być wysyłane do dwóch różnych mikroserwisów.
* [ ] W momencie wysyłania tablic do poszczególnych serwisów, informacja o tym że główna tablica została przetworzona powinna być wysłana do mikroserwisu
      odpowiedzialnego za komunikację z klientem, który powinien wyświetlić tą informację.
* [ ] Mikroserwis C powinien dodawać 10 do każdego elementu otrzymanej tablicy.
* [ ] Mikroserwis D powinien odejmować 10 od każdego elementu otrzymanej tablicy.
* [ ] Mikroserwis E powinien dzielić na 2 każdy otrzymany element.
* [ ] Gdy którykolwiek z mikroserwisów skończy operacje matematyczne, powinien wysłać przetworzoną tablicę do mikroserwisu F
* [ ] Mikroserwis F czeka na skończenie pracy mikroserwisów C,D,E po czym sumuje otrzymane elementy tablic
* [ ] Po skończeniu sumowania mikroserwis F wysyła informacje do mikroserwisu odpowiedzialnego za komunikację z klientem, który wyświetla otrzymany wynik.

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Czym jest ,,Big data'': https://medium.com/swlh/big-data-explained-38656c70d15d

