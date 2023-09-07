const mongoose = require('mongoose');

const UserEntrySchema =new mongoose.Schema({
    entryNumber:{
        type:String,
        required:[true,"can't authenticate without user id"],
    },
    name:{
      type :String ,
      required : [true ,  'User must have a name'] ,
    },
    location:{
        type:String,
        required:[true, 'you must want to visit someplace'],
        default:'Ropar'
    },
    ContactNumber:{
        type:Number,
        required:[true,'you must have a Phone Number']
    },
    action:{
        type:Number,
        required:[true,'you must decide what action you wanna do'],
        default:0
    },
    description:String ,
    date:{
        type:Date,
        default :Date.now()
    }
  })
  const UserEntry = mongoose.model('UserEntry' , UserEntrySchema) ;
  module.exports = UserEntry ;