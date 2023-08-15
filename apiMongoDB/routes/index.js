
const tokenRouter=require("./token.route")

const scoreRouter = require("./score.route")

function route(app){
    app.use("/symbol",scoreRouter)
    app.use("/", tokenRouter);
    
    //   app.get("/products", async (req, res) => {
    //     try {
    //       const products = await Product.find({});
    //       res.status(200).json(products);
    //     } catch (err) {
    //       console.log(err.message);
    //       res.status(500).json({ message: err.message });
    //     }
    //   });
      
    //   app.get("/products/:id", async (req, res) => {
    //     try {
    //       const { id } = req.params;
    //       console.log("this is req", req.query.search);
    //       const product = await Product.findById(id);
    //       res.status(200).json(product);
    //     } catch (err) {
    //       console.log(err.message);
    //       res.status(500).json({ message: err.message });
    //     }
    //   });
      
    //   app.put("/products/:id", async (req, res) => {
    //     try {
    //       const { id } = req.params;
    //       const product = await Product.findByIdAndUpdate(id, req.body);
    //       if (!product) {
    //         return res
    //           .status(404)
    //           .json({ message: `cannot find prodcut by id ${id}` });
    //       }
    //       const updatedProduct = await Product.findById(id);
    //       res.status(200).json(updatedProduct);
    //     } catch (err) {
    //       console.log(err.message);
    //       res.status(500).json({ message: err.message });
    //     }
    //   });
      
    //   app.post("/products", async function (req, res) {
    //     try {
    //       const product = await Product.create(req.body);
    //       res.status(200).json(product);
    //     } catch (err) {
    //       console.log(err.message);
    //       res.status(500).json({ message: err.message });
    //     }
    //   });
      
    //   app.delete("products/:id", async function (req, res) {
    //     try {
    //       const { id } = req.params;
    //       console.log(id);
    //       const product = await Product.findByIdAndDelete(id);
    //       if (!product) {
    //         return res
    //           .status(404)
    //           .json({ message: `cannot find product by id ${id}` });
    //       }
    //       res.status(200).json(product);
    //     } catch (err) {
    //       console.log(err.message);
    //       res.status(500).json({ message: err.message });
    //     }
    //   });

}

module.exports=route;