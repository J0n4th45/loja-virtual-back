const { Product } = require("../models");

// Product.create({
//   name: "sapato",
//   brand: "bootstreet",
//   price: 100.5,
//   imageURL:
//     "https://www.mundodasbotas.com.br/cdn/imagens/produtos/det/bota-coturno-via-marte-1cc114e3c05b72ec9cb6c844d5c0edd7.jpg"
// });

const find = async (req, res) => {
  const products = await Product.findAll();

  res.json(products);
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const result = await Product.findOne({ where: { id } });

  res.json(result);
};

const create = async (req, res) => {
  const { name, brand, price, imageURL } = req.body;
  const result = await Product.create({ name, brand, price, imageURL });

  res.json(result);
};

const update = async (req, res) => {
  const { id, name, brand, price, imageURL } = req.body;
  const result = await Product.update(
    { name, brand, price, imageURL },
    { where: { id } }
  );

  res.json(result);
};

const remove = async (req, res) => {
  const id = req.params.id;
  const result = await Product.destroy({
    where: { id }
  });
  console.log(result);
  res.json(result);
};

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
};
