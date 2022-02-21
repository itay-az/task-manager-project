const mongoose= require('mongoose')

const connectionString=
'mongodb+srv://itay-az:itayyy1232@taskmanager.alhmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

function connectDB(url){
  return mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify: true,
    useUnifiedTopology:true,
  })
} 
module.exports=connectDB

