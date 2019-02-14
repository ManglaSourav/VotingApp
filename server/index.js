const express = require("express");
const handle = require("../handlers");
const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("hello world"));

app.use(handle.notFound);
app.use(handle.errors);
app.listen(port, console.log(`server started on port ${port}`));
