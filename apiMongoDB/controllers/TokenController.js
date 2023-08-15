const Token = require("../models/tokenModel");


const pool = require("../db");
const { default: mongoose } = require("mongoose");

class TokenController {
  //send hello
  firtTime = (req, res) => {
    res.send("hello");
  };

  // [GET] tokens
  getTokens = async (req, res) => {
    try {
      const { search } = req.query;

      let tokens = [];
      if (search === "undefined" || search === "") {
      
        tokens = await Token.find({});
      } else {
        // Token.index({ "name": "text", "symbol": "text" });
        tokens = await Token.find({
          $text: {
            $search: search
          },
        });
        console.log("tokens", tokens);
      }

      res.status(200).json(tokens);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  // getTokens= async(req,res)=>{
  //     pool.query("SELECT * FROM tokens",(error,results)=>{
  //         if(error) throw error;
  //         res.status(200).json(results.rows);
  //     })
  // }

  //[GET] token
  getToken = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Token.findById(id);
      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  //[POST] token
  postToken = async function (req, res) {
    try {
      const product = await Token.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  //[UPDATE] token
  updateToken = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Token.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res
          .status(404)
          .json({ message: `cannot find product by id ${id}` });
      }
      const updatedProduct = await Token.findById(id);
      res.status(200).json(updatedProduct);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };

  //[DELETE] token
  deleteToken = async function (req, res) {
    try {
      const { id } = req.params;
      const product = await Token.findByIdAndDelete(id);
      if (!product) {
        return res
          .status(404)
          .json({ message: `cannot find product by id ${id}` });
      }
      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  };
}

module.exports = new TokenController();
