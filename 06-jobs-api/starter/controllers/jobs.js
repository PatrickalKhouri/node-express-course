
const getAllJobs = async (req, res) => {
    res.send('get all jobs')
}

const getJob = async (req, res) => {
    res.send('get one jobs')
}

const createJob = async (req, res) => {
    res.send('creates one jobs')
}

const updateJob = async (req, res) => {
    res.send('updates one job')
}

const deleteJob = async (req, res) => {
    res.send('deletes one job')
}


modele.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} 