require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
cors = require("cors");

const handle = require("./handlers");
const db = require("./models");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("hello world"));
app.use("/api/auth", routes.auth);
app.use(handle.notFound);
app.use(handle.errors);
app.listen(port, console.log(`server started on port ${port}`));
