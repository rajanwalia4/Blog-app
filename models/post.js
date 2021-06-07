// import Mongoose
const mongoose = require('mongoose');

//Structure to create post in DB
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

// Creates a Collction in DB named `Post`
const Post = mongoose.model('Post', postSchema);

// Use in other file
module.exports = Post;