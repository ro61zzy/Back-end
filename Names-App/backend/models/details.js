const mongoose = require('mongoose')

const Schema = mongoose.Schema

const detailsSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: Number,
  location: String,
})
