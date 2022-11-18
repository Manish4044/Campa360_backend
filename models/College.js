const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    title:  String, 
    description: String,
    courses: [String],
    established: String,
    email:String,
    phone:String,
    type:String,
    home_image:String,
    city:String,
    state:String,
    lat:Number,
    lng:Number,
    vr:[{location:String, image:String}]
  });

  module.exports = mongoose.model('College', collegeSchema)