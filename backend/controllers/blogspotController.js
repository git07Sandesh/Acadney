const Blogpost = require('../models/blogspotModel')
const mongoose = require('mongoose')
// get all blogs

const getBlogposts = async (req, res) => {
    const blogposts = await Blogpost.find({}).sort({createdAt: -1})
    res.status(200).json(blogposts)
}

//get single blog
const getBlogpost = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such blog'})
    }

    const blogpost = await Blogpost.findById(id)
    if(!blogpost){
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(200).json(blogpost)
}


//create new blog
const createBlog = async (req,res) => {
    const {title, author, publicationDate, introduction} = req.body
   
   //adds to db
    try{
        const blogpost = Blogpost.create({title, author, publicationDate, introduction})
        res.status(200).json(blogpost)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a blog

const deleteBlog = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such blog'})
    }

    const blogpost = await Blogpost.findOneAndDelete({_id: id})

    if(!blogpost){
        return res.status(404).json({error: 'No such blog'})
    }

    res.status(200).json(blogpost)

}
//update a blog
const updateBlog = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such blog'})
    }

    const workout = await Blogpost.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!blogpost){
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(200).json(blogpost)
}

module.exports = {
    getBlogposts,
    getBlogpost,
    createBlog,
    deleteBlog,
    updateBlog
}