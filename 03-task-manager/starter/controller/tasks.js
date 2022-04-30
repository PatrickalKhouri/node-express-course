const Task = require('../models/task');

const getAllTasks = async (req,res) => {
  try {
    tasks = await Task.find({})
    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err)
    res.status(500).json({msg : 'There was an error'})
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (err) {
    console.log(err)
    res.status(500).json({msg : 'There was an error'})
  }
}

const getTask = async (req,res) => {
  try {
    const id = req.params.id
    task = await Task.findOne({_id: id})
    if (!task) {
      return res.status(404).json({msg: `Task of id ${id} was not found`})
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log(err)
    res.status(500).json({msg : 'There was an error'})
  }
}

const deleteTask = async (req,res) => {
  try {
    const id = req.params.id
    task = await Task.findOneAndDelete({ _id: id})
    console.log(task)
    if (!task) {
      return res.status(404).json({msg: `Task of id ${id} was not found`})
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log(err)
    res.status(500).json({msg : 'There was an error'})
  }
}

const updateTask = async (req,res) => {
  try {
    const id = req.params.id
    const data = req.body
    task = await Task.findOneAndUpdate({_id: id}, data, {new:true, runValidators:true})
    if (!task) {
      return res.status(404).json({msg: `Task of id ${id} was not found`})
    }
    res.status(200).json({task})
  } catch (err) {
    res.status(500).json({msg : 'There was an error'})
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}