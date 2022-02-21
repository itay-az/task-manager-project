const Task = require("../models/Task");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const createTask = async (req, res) => {
  try {
    console.log("---");
    console.log(req.body);
    console.log("---");

    const task = await Task.create(req.body);
    res.status(201).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

async function getTask(req, res) {
  // try{
  //     const {id:taskId}= req.params
  //     console.log(taskId)
  //     res.status(200).json({taskId})
  // }catch(error){

  // }
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    console.log('-----')
    console.log(task)
    console.log('-----')

    if (!task) {
      return res
        .status(404)
        .json({ msg: `there is not a task with id of ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

async function updateTask(req, res) {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if(!task){
      return res.status(404).json({msg:`there is not a task with id of ${taskId} `})
    }
    res.json({task})
  } catch (error) {res.status(500).json({msg:error})}
}
async function deleteTask(req, res) {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndRemove({ _id: taskId });
    if (!task) {
      res.status(404).json({ msg: `there os not a task with id of ${taskId}` });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
