const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')

const port=3000

app.use(express.json())
app.use(express.static("./public"))


app.get('/hello', (req,res)=>{
res.send('task manager app')
})

app.use('/api/v1/tasks',tasks)
// app.get('/api/v1/tasks') -get all tasks
// app.post ('/api/v1/tasks') - create a new task 
// app.get('/api/v1/tasks/:id') -get a single task
// app.patch('/api/v1/tasks/:id') -update task
// app.delete('/api/v1/tasks/:id') -delete task

const start = async()=>{
  try{
      await connectDB()
      app.listen(port , ()=>{console.log(`Server is listening on ${port}...`)})
  }catch(error){
    console.log(error)
  }
}

start()