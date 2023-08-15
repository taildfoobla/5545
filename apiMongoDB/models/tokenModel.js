const mongoose=require('mongoose');

const tokenSchema = mongoose.Schema(
    {
        id:{
            type:BigInt,
            unique:true
        },
        symbol:{
            type:String
        },
        name:{
            type:String
        },
        network:{
            type:String
        },
        address:{
            type:String
        },
        status:{
            type:String
        },
        deployed_block_number:{
            type:Number
        },
        deployed_at:{
            type:Date
        },
        exchange_at:{
            type:Date
        },
        holder_at:{
            type:Date
        },
        score_at:{
            type:Date
        },
        created_at:{
            type:Date
        },
        update_at:{
            type:Date
        },
        accumulation_trend_score_left:{
            type: Number
        },
        holder_day_left:{
            type:Number
        },
        total_days:{
            type:Number
        }
    },
    {
        timestamps:true,
    }
);
tokenSchema.index({name: 'text', 'symbol': 'text'});

const Token = mongoose.model('Token',tokenSchema);

module.exports=Token;
