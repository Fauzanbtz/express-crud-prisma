const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const productsControler = require("./products/products.controler");

app.use("/products", productsControler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
