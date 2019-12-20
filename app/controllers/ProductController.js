// const ProductModel = require("../models/product");

const find = async (req, res) => {
  // const products = (await ProductModel.findAll()).products;
  console.log("products");
  res.json({ produtos: "todos" });
};

module.exports = {
  find
};
