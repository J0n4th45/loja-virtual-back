const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router
  .get("/produtos", ProductController.find)
  .get("/produtos/:id", (req, res) => {
    res.json(req.params);
  })
  .post("/produtos", (req, res) => {
    res.json({ message: "POST /produtos com sucesso" });
  })
  .put("/produtos/:id", (req, res) => {
    res.json(req.params);
  })
  .delete("/produtos/:id", (req, res) => {
    res.json(req.params);
  });

module.exports = router;
