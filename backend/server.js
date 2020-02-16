const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = "mongodb://mongo:27017/mydb";
//const uri="mongodb://user:piyush@172.17.0.3:27017/mydb?authSource=mydb&w=1"

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

/*
//old way
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});*/

/*
var dbConfig = {url:"mongodb://172.17.0.3:27017/mydb?authSource=mydb&w=1",user:"user",pwd:"piyush"}

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true,
    user: dbConfig.user,
    pass: dbConfig.pwd,
    auth: {
      authdb: "admin"
    }
}).then(() => {
    console.log('successfully connected to the database!!!');
}).catch(err => {
    console.log('Error connecting to the database!!');
    //console.log(err);
    process.exit();
});*/