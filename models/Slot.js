const mongoose = require('mongoose')

const slotSchema= new mongoose.Schema(
    {
        groundId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Ground",
            required:true,
        },
        Date:{
            type:Date,
            required: true,
        },
        startTime:{
            type:String,
            required:true,
        },
        endTime:{
            type:String,
            required:true,
        },
        isBooked:{
            type:Boolean,
            default: false,
        }

    },{ timestamps: true }
);

module.exports= mongoose.model("Slot", slotSchema);