const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type:String,
        required: [true, 'please provide a company name'],
        maxLength: 50
    },
    position: {
        type:String,
        required: [true, 'please position a company name'],
        maxLength: 150
    },
    status: {
        type:String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide a user']
    }
},{timestamps:true})

module.exports = mongoose.model('Job', JobSchema)

