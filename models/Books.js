const mongoose = require('mongoose')
const schema = mongoose.Schema
const BookSchema = new Schema({
  title:{
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Book', BookSchema)