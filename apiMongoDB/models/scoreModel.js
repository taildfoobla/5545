const mongoose=require('mongoose');

const scoreSchema = mongoose.Schema(
    {
        id:{
            type:BigInt,
            unique:true
        },
        network:{
            type:String
        },
        contract:{
            type:String
        },
        symbol:{
            type:String
        },
        block_date:{
            type:Date
        },
        accumulation_trend_score:{
            type:Number
        },
        price:{
            type:Number
        },
        metadata:{
            type:JSON
        },
        created_at:{
            type:Date
        }
    },
    {
        timestamps:true,
    }
);


const Score = mongoose.model('Score',scoreSchema);

module.exports=Score;
