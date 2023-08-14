
const Score = require("../models/tokenModel");

const pool = require("../db")

class ScoreController{
    getScore = async (req,res)=>{
      pool.query("SELECT * FROM score",(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
    }

    getScoreByName = async(req,res)=>{
        const {symbol} = req.params;
        console.log(symbol)
        pool.query(`SELECT * FROM score WHERE symbol='${symbol}' ORDER BY block_date DESC`,(error,results)=>{
            if(error) throw error;
            res.status(200).json(results.rows);
        })
    }
}

module.exports=new ScoreController;