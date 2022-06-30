import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    cover:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    book:{
        type:String,
        required:true
    }
})


export default mongoose.model("Book",bookSchema)