//Layer untuk handle request dan response
//Biasanya untuk handle validasi body

const express = require("express");
const router = express.Router();

const {
  GetAllProducts,
  GetProducstById,
  CreateProduct,
  UpdateProduct,
  UpdatePatch,
  ProductsDelete,
} = require("./products.services");

router.get("/", async (req, res) => {
  try {
    const products = await GetAllProducts();
    res.send(products);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productsId = req.params.id;
    const products = await GetProducstById(productsId);
    res.send(products);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  await GetProducstById(req.params.id);
  try {
    const products = await ProductsDelete(req.params.id);
    res.send(products);
  } catch (error) {
    res.status(400).send("Product not found");
  }
});

router.post("", async (req, res) => {
  try {
    const productsData = req.body;
    const product = await CreateProduct(productsData);
    res.send({ data: product, message: "Product created successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productsData = req.body;
    const products = await UpdateProduct(req.params.id, productsData);

    res.send({ data: products, message: "Product updated successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productsData = req.body;
    const productsId = req.params.id;

    const products = await UpdatePatch(productsId, productsData);

    res.send({ data: products, message: "Product updated successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
