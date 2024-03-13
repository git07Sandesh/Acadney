const express = require('express')
const {
    createBlog,
    getBlogpost,
    getBlogposts,
    updateBlog,
    deleteBlog
} = require('../controllers/blogspotController')

const router = express.Router()

//Get a single blog\
router.get('/:id', getBlogpost)
  
// Get all blogs
router.get('/', getBlogposts)


//Post a new blog
router.post('/', createBlog)

//DElete a  blog
router.delete('/:id',deleteBlog)

//Update a blog
router.patch('/:id',updateBlog)

module.exports =  router