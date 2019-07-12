const mongoose=require('mongoose')

const Post = new mongoose.Schema({
    type:String
})
//
module.exports = mongoose.model('Post', postSchema) 