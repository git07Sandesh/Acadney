const express = require('express')
const {
    createBlog,
    getBlogpost,
    getBlogposts,
    updateBlog,
    deleteBlog
} = require('../controllers/blogspotController')

//multer

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
})

const router = express.Router()

//Get a single blog\
router.get('/:id', getBlogpost)
  
// Get all blogs
router.get('/', getBlogposts)


//Post a new blog
router.post('/', upload.single('file'), createBlog);


//DElete a  blog
router.delete('/:id',deleteBlog)

//Update a blog
router.patch('/:id',updateBlog)

module.exports =  router