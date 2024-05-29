const Product = require("../models/product.model.js");


const getProducts = async (req, res) => {
    //this below try-catch is called 'Controller function'
    try {
        //when there is 'await', async has to be there
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


const getProduct = async (req, res) => {
    try {
        //used params to get id of the product from the url
        const { id } = req.params;
        const products = await Product.findById(id);

        if (!products) {
            return res.status(404).json({ messege: "Product not found" });
          }

        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ messege: error.messege });
      }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        if (!product) {
          return res.status(404).json({ messege: "Product not found" });
        }
    
        const updatedProduct = await Product.findById(id);
    
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
    
        if (!product) {
          return res.status(404).json({ messege: "Product not found" });
        }
        res.status(200).json({ messege: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}