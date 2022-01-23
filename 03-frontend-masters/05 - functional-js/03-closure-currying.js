// Closure - Inner function can remember things about the outer function's scope at the time it (the inner function) was defined.
// Currying - Turning a function with any number of arguments into a series of single-argument functions (reusability)

function writeMessage(message, salutation, name) {
  return `<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

function signMessageWith(salutation) {
  return (message, name) => writeMessage(message, salutation, name);
}

function makeSignature(salutation, name) {
  return (message) => writeMessage(message, salutation, name); // TODO replace this function
}

// Currying

function curriedQuote(name) {
  return function (year) {
    return function (text) {
      return `"${text}" - ${name} (${year})`;
    };
  };
}

const arrowCurriedQuote = (name) => (year) => (text) =>
  `"${text}" - ${name} (${year})`;

const quote = curriedQuote("Arnold Schwarzenegger")(2000)("I'll be back!");
console.log(quote);
