const express = require("express");
var cors = require("cors");
var morgan = require("morgan");
const { PORT } = require("./config.js");

let app = express();
// app.use(express.static("wwwroot"));
app.use(
  cors({
    origin: ["http://localhost:5173","https://iot.digotech.net/"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    preflightContinue: true,
    optionsSuccessStatus: 200
  })
);
app.use(express.json());
app.use(morgan("tiny"));

app.use(require("./routes/auth.js"));
app.use(require("./routes/models.js"));
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}...`);
});
