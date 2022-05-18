
const getAllJobs = async (req, res) => {
    res.send('get all jobs')
}

const getJob = async (req, res) => {
    res.send('get one jobs')
}

const createJob = async (req, res) => {
    console.log(req.user)
    res.json(req.user)
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