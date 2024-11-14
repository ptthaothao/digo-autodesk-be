const express = require("express");
var cors = require("cors");
var morgan = require("morgan");
const { PORT } = require("./config.js");

let app = express();
// app.use(express.static("wwwroot"));
app.use(
  cors({
    origin: ["*"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    preflightContinue: true
  })
);
app.use(express.json());
app.use(morgan("tiny"));

app.use(require("./routes/auth.js"));
app.use(require("./routes/models.js"));
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}...`);
});
