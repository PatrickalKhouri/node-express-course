
const jwt = require('jsonwebtoken');
const { BadRequest } = require('../errors');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequest('Please provide email and password')
    }
    const id = new Date().getDate()
    
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg: 'User created', token: token})
};

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided', 401)
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random() * 100);
        res.status(200).json({msg: `Hi, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    } catch (error) {
        throw new CustomAPIError('Not authorized to access route', 401)
    }
};

module.exports = {login, dashboard}