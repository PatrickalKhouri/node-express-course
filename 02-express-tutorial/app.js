const express = require('express')
const { restart } = require('nodemon');
const app = express();

const people = require('./routes/people')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/people', people)

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