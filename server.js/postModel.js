const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postImg: {
        type: String,
    },
    postTitle: {
        type: String,
    },
    postDesc: {
        type: String,
    },
    recipe: {
        type: String,
    },
    postId: {
        type: Number,
    }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;