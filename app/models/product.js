module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    imageURL: DataTypes.STRING
  });

  return Product;
};
