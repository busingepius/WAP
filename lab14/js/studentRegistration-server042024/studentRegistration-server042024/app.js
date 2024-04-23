const express = require("express");
const studentRouter = require("./route/studentRouter");
const app = express();
const port = 5000;

app.use(express.json());

app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.json(500, { "error": "Something went wrong" });
})

app.listen(port,
    () => { console.log('Server is started'); })