const express = require("express");
const app = express();

app.use(express.static("./build/optimized.wasm"));

app.listen(3001, () => {
  console.log("Server for course purpose is running:)");
});
