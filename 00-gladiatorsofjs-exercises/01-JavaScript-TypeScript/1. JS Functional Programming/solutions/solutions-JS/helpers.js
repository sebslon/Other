const randomNumberInRange = (min, max) => max - Math.round(Math.random() * (max - min));

module.exports = {
  randomNumberInRange,
}