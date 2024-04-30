const mongoose = require("mongoose");

console.log('Connecting to MongoDB');
mongoose.connect('mongodb://127.0.0.1:27017/nodejs-crud-app')
.then(() => console.log("MongoDb Connected..."))
.catch( err => console.log(err));