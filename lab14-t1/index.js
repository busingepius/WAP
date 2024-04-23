const express = require("express");
const app = express();
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes/students")
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/students", router);
app.use(notFound);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`server is listening at port: ${port}`));
}

start(port);