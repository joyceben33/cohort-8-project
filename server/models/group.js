const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = new Schema({
  group_name: String,
  group_type: String,
  date_created: Date,
  people: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

module.exports = mongoose.model('Group', GroupSchema)