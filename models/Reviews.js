const mongoose= require('mongoose')

const reviewSchema= new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,
        },
        groundId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Ground",
            required: true,
        },
        rating: { 
            type: Number, 
            min: 1, 
            max: 5, 
            required: true 
        },
        comment:{
            type:String,
            required:true,
        },
    },{ timestamps: true }
);

module.exports = mongoose.model("Reviews",reviewSchema);