const systemlogger = require("./lib/log/systemlogger.js");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use("/", require("./routes/index.js"));

app.use(systemlogger());

// --- sample

var logger = require("./lib/log/logger.js").application;
logger.addContext("key", "test");
logger.error("message");
logger.error("test", "message");

// ---

app.listen(3000);