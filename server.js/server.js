const express = require('express');
const mongoose = require('mongoose');
const Post = require('./postModel');
const User = require('./userModel');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/sharPie')
    .then(() => {
        console.log('MongoDB Connected');
    });

let respone = {
    message: '',
    result: false,
    data: '',
}

class MyClass {
    static postId = 3;
}

app.get('/getUsers', async (req, res) => {
    const result = await User.find({});
    respone.message = 'Users Fetched';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
})

app.post('/createUsers', async (req, res) => {
    const { username, password } = req.body;
    const result = await User.create({
        username,
        password,
    });
    respone.message = 'Users Created';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
})

app.post('/createPost', async (req, res) => {
    const { postImg, postTitle, postDesc, recipe } = req.body;
    const result = await Post.create({
        postImg,
        postTitle,
        postDesc,
        recipe,
        postId: MyClass.postId++,
    });
    respone.message = 'Post Created';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
})

app.get('/getAllPosts', async (req, res) => {
    const result = await Post.find({});
    respone.message = 'Post fetched';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
});

app.get('/getPostById/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Post.find({
        postId: id,
    })
    respone.message = 'Post fetched';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
})


app.listen(port, () => {
    console.log(`Server listening at : http://localhost:${port}`);
});