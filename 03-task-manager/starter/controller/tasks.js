const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req,res) => {
    tasks = await Task.find({})
    res.status(200).json({ tasks });
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask = asyncWrapper(async (req,res, next) => {
    const id = req.params.id
    task = await Task.findOne({_id: id})
    if (!task) {
      return createCustomError('Not Found', 404)
    }
    res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req,res) => {
    const id = req.params.id
    task = await Task.findOneAndDelete({ _id: id})
    if (!task) {
      return createCustomError('Not Found', 404)
    }
    res.status(200).json({ task });
})

const updateTask = asyncWrapper(async (req,res) => {
    const id = req.params.id
    const data = req.body
    task = await Task.findOneAndUpdate({_id: id}, data, {new:true, runValidators:true})
    if (!task) {
      return createCustomError('Not Found', 404)
    }
    res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}