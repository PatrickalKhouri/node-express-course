const Job = require('../models/Job');
const { StatusCode } = require('http-status-codes');
const { BadRequestError, NotFountError } = require('errors');

const getAllJobs = async (req, res) => {
    const jobs = await Job.findMany({ createdBy : req.user.userId })
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const getJob = async (req, res) => {
    res.send('get one jobs')
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
    res.send('updates one job')
}

const deleteJob = async (req, res) => {
    res.send('deletes one job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} 