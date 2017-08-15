const mongoose = require('mongoose')

let campsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  imageUrl: {type: String, required: true},
  shortDescription: {type: String, required: true},
  timePeriod: {type: String, required: true},
  content: { type: String, required: true},
  category: {type: String, required: true},
  ageGroup: {type: String, required: true}
})

let Camp = mongoose.model('Camp', campsSchema)

module.exports = Camp
