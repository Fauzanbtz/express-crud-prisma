//Berkomunikasi dengan database
// Bisa dengan orm atau juga dengan raw query

const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductsById = async (id) => {
  const products = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return products;
};

const createProduct = async (data) => {
  const products = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
    },
  });

  return products;
};

const updateProduct = async (id, data) => {
  const products = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
    },
  });

  return products;
};

const deleteProducts = async (id) => {
  const products = await prisma.product.delete({
    where: {
      id: id,
    },
  });
  return products;
};

module.exports = {
  findProducts,
  findProductsById,
  createProduct,
  updateProduct,
  deleteProducts,
};
