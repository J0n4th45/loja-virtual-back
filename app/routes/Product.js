const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router
  .get("/produtos", ProductController.find)
  .get("/produto/:id", ProductController.findOne)
  .post("/produto", ProductController.create)
  .put("/produto", ProductController.update)
  .delete("/produto/:id", ProductController.remove);

module.exports = router;
