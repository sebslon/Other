import { reduce } from "./02-higher-order-functions";
import { head, length, tail } from "./helpers";

// combining several functions effects to create a pipeline through which our program's data can flow.
function pipeline(...functions) {
  if (length(functions) === 0) return (input) => input;
  if (length(functions) === 1) return (input) => head(functions)(input);
  return function (input) {
    return pipeline(...tail(functions))(head(functions)(input));
  };
}

function pipelineWithReduce(...functions) {
  return (input) => reduce((acc, fn) => fn(acc), input, functions);
}

const pluralize = (singularWord) => singularWord + "s";
const heart = (word) => "I ❤️ " + word;
const exclaim = (sentence) => sentence + "!";

// add "s" => add I ❤️ => add "!" - go throught all the functions and return the output..
// exclaim(heart(pluralize(input)))
const showSomeLove = pipeline(pluralize, heart, exclaim);

const pipelineLove = showSomeLove("pipeline"); // "I ❤️ pipelines!"
