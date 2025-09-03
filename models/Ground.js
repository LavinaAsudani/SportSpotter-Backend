const mongoose= require('mongoose')

const groundSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        ownerId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        address:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        sportName:{
            type:String,
            required:true,
        },
        sportDescription:{
            type:String,
        },
        images:[
            {
                type:String,
            }
        ],
        pricePerHour:{
            type:Number,
            required:true,
        },
        facilities:[
            {
                type:String,
            }
        ],
        reviews:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Reviews",
            }
        ],
        bookings:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Booking",
            }
        ],
        slots:[
            {
                type:mongoose.Schema.Types.ObjectId
            }
        ],

    },{ timestamps: true }
);

module.exports=mongoose.model("Ground",groundSchema);