const express = require("express");

const app = express();

const port = 3012;

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(port, () => {
  console.log(`server listen port .... ${port}`);
});
