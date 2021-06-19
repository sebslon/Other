<h2 align="center">MongoWithPopulate</h2>

<br>

## Wymagana wiedza

- Podstawy MongoDb/Mongoose 
- Exspress.js

## Cele główne
- [ ] Stwórz strukturę bazy danych szkołę
- [ ] Szkoła powinna zawierać klasy, a klasy powinny posiadać uczniów
- [ ] Uczeń powinien posiadać id,imię,nazwisko,data urodzenia oraz tablicę ocen, wypełnianą losowymi liczbami z zakresu 2-5
- [ ] W momencie tworzenia nowej szkoły w bazie danych, automatycznie powinny zostać stworzone 3 klasy, wypełnione przez 10 uczniów
- [ ] Aplikacja pozwala na modyfikowanie danych szkół,klas oraz uczniów.
- [ ] Za pomocą funkcji populate udostępnianej przez Mongoose, przy wyszukiwaniu szkoły powinny zostać zwrócone wszystkie dane z nią połączone(klasy i uczniowie)
- [ ] Analogicznie przy wyszukiwaniu klas/klasy, powinny zostać zwrócone wszystkie dane połączone z klasą

## Cele opcjonalne do wykonania
* [ ] Brak

## Przydatne linki
- API dzięki któremu zaoszczędzisz czasu przy tworzeniu danych:https://random-data-api.com/
- Jak działa populate w mongoose: https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7

## Kawałek kodu dla lepszego początku!

```typescript

export class SchoolHandler{

public createSchool(schoolData){}
public deleteSchool(id){}
public editSchool(id){}

}

export class ClassHandler{

public createClass(classData){}
public deleteClass(id){}
public editClass(id){}

}
export class StudentHandler{

public createStudent(studentData){}
public deleteStudent(id){}
public editStudent(id){}

}
```


