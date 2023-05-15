import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        require: true 
    },
    content: {
        type: String,
        require: true
    }, 
    author: {
         type: String,
         require: true,
         default: "tohuu"
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    }

} ,{timestamps: true})

export const PostModel = mongoose.model('Post', Schema)