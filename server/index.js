const express = require("express");
const debug = require("debug")("server");

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World"
  });
});

app.listen(port, () => debug(`Listening on port ${port}`));
