const express = require("express");
const router = express.Router();

const productsRoute = require("./Product");

router.use(productsRoute);

module.exports = router;
