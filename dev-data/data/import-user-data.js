const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../model/tourModel');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>' ,
   process.env.DB_PASSWORD);
mongoose.
  connect(DB,{
    useNewUrlParser : true ,
    useCreateIndex : true,
    useFindAndModify :false
  })
  .then(()=>{
    console.log('connection successfull') ;
  }) ;


const userdata =  JSON.parse(fs.readFileSync(`${__dirname}/userentry.json` , 'utf-8'));
const importdata = async()=>{
    try{
        await Tour.create(userdata) ;
        console.log('data loaded successully') ;
        process.exit() ;

    }
    catch (err){
        console.log(err) ;
    }
}

const deletedata =async()=>{
    try{
        await Tour.deleteMany();
        console.log('data deletion success') ;
        process.exit() ;
    }
    catch(err){
        console.log(err);
    }
}
if(process.argv[2] ==='--import'){
    importdata() ;
}
else if(process.argv[2] ==='--delete'){
    deletedata() ;
}
console.log(process.argv) ; 