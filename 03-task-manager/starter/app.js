const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error')
require('dotenv').config()

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound)
app.use(errorHandlerMiddleware)

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


