module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    imageURL: DataTypes.STRING
  });

  return Product;
};
