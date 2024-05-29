const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//route for API : getting all products (READ)
router.get("/", getProducts);

//route for API : getting a product by id (READ)
router.get("/:id", getProduct);

//route for API : creating a new product (CREATE)
router.post("/", createProduct);

//route for API : updating a product by id (UPDATE)
router.put("/:id", updateProduct);

//route for API : deleting a product by id (DELETE)
router.delete("/:id", deleteProduct);

module.exports = router;
