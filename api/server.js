const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
const app = express();
const port = 5000;
const route=require("./routes")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
route(app)

// app.get("/", (req, res) => {
//   res.send("abcdsa");
// });

// app.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.get("/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("this is req", req.query.search);
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.put("/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: `cannot find prodcut by id ${id}` });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post("/products", async function (req, res) {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.delete("products/:id", async function (req, res) {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: `cannot find product by id ${id}` });
//     }
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: err.message });
//   }
// });

// mongoose
//   .connect("mongodb+srv://taild:taild%40foobla1@cluster0.z1xx4yf.mongodb.net/")
//   .then(() => {
//     console.log("connect to MongoDB");
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
    