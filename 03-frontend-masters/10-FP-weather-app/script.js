const apiKey = "2d5e6596fd954a851f2137968f56d6bb";
const zip = 55455;

fetch(
  `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`
)
  .then((results) => results.json())
  .then(console.log);
