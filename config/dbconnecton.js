const mongoose=require('mongoose');


  mongoose.connect('mongodb://localhost:27017/web_project',{useNewUrlParser:true})

  const connect=mongoose.connection;

  connect.on('err',console.error.bind(console,"Detabase error"));
  connect.once('open',function(){
      console.log("Detabase connect successful");
      
  })

  module.exports={connect};
