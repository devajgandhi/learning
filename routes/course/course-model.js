const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({

title:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
},
createdDate:{
    type:Date,
    required:true,
    default: Date.now()
} ,
updatedDate:{
    type:Date,
    required:true,
    default: Date.now()
},
createdBy :{
    type:String,
    required:true
},
updatedBy:{
    type:String,
    required:true    
},
isActive:{
    type:Boolean,
    required:true,
    default: true
}
});
module.exports = Item = mongoose.model('course',CourseSchema);