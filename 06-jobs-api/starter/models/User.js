const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please provide a name'],
        minlength: [3, 'Name should have more than 2 characters'],
        maxlength: [50, "Name can't exceed more than 50 characters"]
    },
    email: {
        type:String,
        required: [true, 'Please provide an email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Please provide a valid email'],
        unique: true
    },
    password: {
        type:String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password should have more than 6 characters'],
    },
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.checkPassword = async function (requestPassword) {
    const isMatch = await bcrypt.compare(requestPassword, this.password)
    return isMatch
}

UserSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

module.exports = mongoose.model('User', UserSchema)