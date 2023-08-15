
const Score = require("../models/scoreModel")

const pool = require("../db")

class ScoreController{
    // [GET] Scores
    // getScore = async (req,res)=>{
    //   pool.query("SELECT * FROM score",(error,results)=>{
    //     if(error) throw error;
    //     res.status(200).json(results.rows);
    // })
    // }
    getScores= async(req,res)=>{
        try {
            const scores = await Score.find({});
            res.status(200).json(scores);
          } catch (err) {
            console.log(err.message);
            res.status(500).json({ message: err.message });
          }
    }

    // [GET] Score
    // getScoreByName = async(req,res)=>{
    //     const {symbol} = req.params;
    //     console.log(symbol)
    //     pool.query(`SELECT * FROM score WHERE symbol='${symbol}' ORDER BY block_date DESC`,(error,results)=>{
    //         if(error) throw error;
    //         res.status(200).json(results.rows);
    //     })
    // }
    getScoreByName=async (req, res) => {
        try {
          const { symbol } = req.params;
          const score = await Score.find({symbol:symbol}).sort( { "block_date": 1 } );
          res.status(200).json(score);
        } catch (err) {
          console.log(err.message);
          res.status(500).json({ message: err.message });
        }
      }
}

module.exports=new ScoreController;