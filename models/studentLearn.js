const mongoose = require('mongoose')

const studentLearnSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required: true
    }
})

const studentLearn = mongoose.model('studentLearn',studentLearnSchema)
module.exports = studentLearn