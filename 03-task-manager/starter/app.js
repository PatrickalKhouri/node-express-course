const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')
require('dotenv').config()

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// routes

app.get('/hello', (req, res) => {
  res.send('Task manager app')
})

app.use('/api/v1/tasks', tasks);

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log('Server is listening on port ' + port))
  } catch (err) {
    console.log(err)
  }
}

start()


