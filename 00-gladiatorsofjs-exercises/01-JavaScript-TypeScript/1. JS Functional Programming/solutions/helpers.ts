const randomNumberInRange = (min: number, max: number) => max - Math.round(Math.random() * (max - min));

export { randomNumberInRange };