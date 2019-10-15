const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  courseId:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  }
});
module.exports = Item = mongoose.model('student', StudentSchema);