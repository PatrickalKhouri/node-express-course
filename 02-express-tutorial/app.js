const express = require('express')
const { restart } = require('nodemon');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/api/people', (req,res) => {
  res.status(200).json({success: true, data: people})
})

app.post('api/people', (req, res) => {
  const {name} = req.body
  if (!name) {
    return res.status(400).json({success: false, msg: 'Please provide a name'})
  } else {
    return res.status(201).json({success: true, person: name, msg: `Successfully added ${name}`})
  }
})

app.post('/login', (req, res) => {
  const {name} = req.body
  if (name) {
  return res.status(200).send(`Welcome ${name}`)
  } else {
    return res.status(401).send('Please provide login credentials')
  }
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})