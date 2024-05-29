const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middlewares
//we are not allowed to pass JSON  via node.js bydefault. We need a middle-ware, we have to configure it.
app.use(express.json());
//configuring middleware to accept form-url encoded
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

/* 
app.listen(3000, ()=> {
  console.log('Server is running on port 3000');
});   
*/

app.get("/", (req, res) => {
  res.send("Hello from Node API server updated!");
});

// //API to view these added/saved products
// app.get("/api/products", async (req, res) => {
//   try {
//     //when there is 'await', async has to be there
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //API to get specific product from id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     //used params to get id of the product from the url
//     const { id } = req.params;
//     const products = await Product.findById(id);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //to save something
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ messege: error.messege });
//   }
// });

// //Update product API
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({ messege: "Product not found" });
//     }

//     const updatedProduct = await Product.findById(id);

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //Delete Product API
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ messege: "Product not found" });
//     }
//     res.status(200).json({ messege: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//connecting to the database
mongoose
  .connect(
    "mongodb+srv://pbtech25:A8EcYZN2ScgsFXBG@backenddb.rae3fiz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!"); //first try to connect to dB

    //then try to listen to the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed :(");
  });
