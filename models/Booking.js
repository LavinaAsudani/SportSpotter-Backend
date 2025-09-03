const mongoose =require('mongoose')

const bookingSchema =new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        groundId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Ground",
            required:true,
        },
        slotId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Slot",
            required:true,
        },
        status:{
            type:String,
            enum:["Pending" , "Confirmed" , "Cancelled"],
            default:"Pending",
        }
    },{ timestamps: true }
)

module.exports = mongoose.model("Booking" , bookingSchema);
