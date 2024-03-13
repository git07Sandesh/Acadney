const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogpostSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publicationDate:{
        type: Date,
        default: Date.now
    },
    introduction:{
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Blogpost', blogpostSchema)
