## JavaScript / TypeScript Fundamentals

JS/TS Exercises, below are short descriptions, longer descriptions are in `"zadania"` (eng: exercises) directories in each folder.

Almost every exercise has written tests for it in `"__tests__"` directories.

To run tests install dependencies (yarn) and then run yarn test.

<hr>

### 1. Functional programming

Functional programming - recursion, regexps, higher order functions, inputs validating.

- **01 - aggregateArrayIntoChunks** - Aggregate array in random length (in range 4, 7) chunks.

- **02 - Array Methods** - Implement built in array methods (forEach, map, entries, filter, every, some, reduce) by using for/while loops.
- **03 - findPhraseInArray** - Return elements that match given phrase.
- **04 - generateArrayWithRandomNumbers** - Create a function to generate array of given length with arrays (also given length) with random numbers.
- **05 - generateHuman** - Create random person, use external API to generate names and surnames.
- **06 - isRectangularTriangle** - Check if it's possible to build rectangular triangle from given values.
- **07 - getMyAge** - Accepts birth year and returns age independently if argument is a string, number or date.
- **08 - pagination** - Array pagination.
- **09 - masterReduce** - with .reduce - create built in array methods (map, filter, every, some).
- **10 - filterWith** - with .filter - create a filtering function that will filter out an array of objects with nested objects and arrays - use recursion and regexp.

<hr>

### 2. Object-oriented programming

SOLID, Separation of Concerns, extracting abstractions

- **01 - Cart** - Cart, CartItem classes

- **02 - Library** - Library which allows to create bookings
- **03 - User** - App class with possibility to create User and Admin objects
- **04 - EmailBuilder** - Design pattern: Builder
- **05 - DynamicSwitch** - Validating class which accepts multiple cases
- **06 - AddressBook**

+ **Validator** - Helper class with static methods, which has been used to validate multiple properties in exercises above.

<hr>

### 3. TS in Node & Async

Asynchronous JS, API, Communication, Promises

- **01 - serveFromCache** - Functionality which fetches and caches data by given query from Google Books API with use of fetch and axios (return data from "./cache/query.json" if already cached)

- **02 - recursivePromise** - Created recursivePromise which returns resolved promises (in order) or if error is catched it returns resolved promises (until error) + error in catch block
- **03 - PromiseMethods** - Promise.race, Promise.all + two own promiseIgnoreErrors, promiseLast
- **04 - mailWithHook** - Send email with link, which when has been clicked sends second email (like confirmation of email),
- **05 - autoTranslator** - Express API translating (with Google Translation API) objects into different languages

<hr>

### 4. TS in HTML

Browser APIs, SCSS, TypeScript with HTML elements

To run examples with TS use parcel -> `parcel serve /...path-to/index.html`

- **01 - getUrlParameters** - Function that converts URL parameters to an object with key value pairs (`?page=10&id=1` => `{page: 10, id:1}`)

- **02 - onStopScroll** - Navbar on scroll animation, adding/removing classes
- **03 - formBEM** - Simple form with classes in BEM methodology
- **04 - dynamicForm** - Function which generates and appends a form (HTML) by given settings
- **05 - nextAwesomeSCSSGrid** - Use SCSS with its loops to generate bootstrap like grid
- **06 - onDelayHref** - a[data-delayed-href][data-delayed-duration] elements - delayed onClick redirection
- **07 - zoomOnHover** - Creates additional image (lens effect) when hovering over an image example: https://nbsklep.pl/new_balance_cm997hae.html
- **08 - progressReadingBar** - Bar with progress of scrollable area (intersection observer)
- **09 - trackMeNow** - Simple mobile tracking app with use of Google Maps API
- **10 - TypingEffect** - Animated typing letters one by one, forward then backwards. (like -> https://mattboldt.com/demos/typed-js/)
- **11 - weekWithDateFns** - Weekly calendar with date.fns
- **12 - dynamicTable** - Generate table accordingly to data provided in .json file
- **13 - awesomeDatePicker** - Recreate Awesome Date Picker (mobile scrolling version)

![date-picker]("https://github.com/sebslon/Other/blob/main/00-gladiatorsofjs-exercises/01-JavaScript-TypeScript/4.%20TS%20in%20HTML/zadania/AwesomeDatePicker/date-picker-ui-element.gif?raw=true")
