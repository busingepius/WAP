const express = require("express");
const router = express.Router()

router.get("checkout", (req, res, next) => {
    res.send("router");
})

module.exports = router;