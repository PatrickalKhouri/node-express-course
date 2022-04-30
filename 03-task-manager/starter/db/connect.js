const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://patrick:61EKXQGrP78NsDSI@cluster0.wv5gf.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
}

module.exports = connectDB
