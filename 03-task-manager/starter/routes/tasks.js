const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks')

router.route('/').get(getAllTasks)

router.route('/').post(createTask)

router.route('/:id').get(getTask)

router.route('/:id').patch(updateTask)

router.route('/:id').get(deleteTask)

module.exports = router