//service layer bertujuan untuk menghandle bisnis logic
// kenapa terpisah ? karena tanggung jawabnya ter-isolate, dan functionnya reusable
const prisma = require("../db");
const {findProducts, findProductsById, createProduct, updateProduct, deleteProducts} = require("./products.repository");

const GetAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const GetProducstById = async (id) => {
  const products = await findProductsById(id);
  if (!products) {
    return { message: "Product not found" };
  }
  return products;
};

const CreateProduct = async (data) => {
  const product = await createProduct(data);
  return product;
};

const UpdateProduct = async (id, data) => {
  if (!(data.name && data.price && data.description && data.image)) {
    return { message: "All fields are required" };
  }

  const products = await updateProduct(id, data);

  return products;
};

const UpdatePatch = async (id, data) => {
  const products = await UpdateProduct(id, data);

  return products;
};

const ProductsDelete = async (id) => {
  const products = await deleteProducts(id);
  return products, { message: "Product deleted successfully" };
};

module.exports = {
  GetAllProducts,
  GetProducstById,
  CreateProduct,
  UpdateProduct,
  UpdatePatch,
  ProductsDelete,
};
