const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    createdDate:{
        type:Date,
        default:Date.now
      }
})

module.exports = mongoose.model("user",todoSchema)