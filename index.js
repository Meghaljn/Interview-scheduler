const express = require('express');
//For using path module
const path = require('path');
//Define the port on which we want to run our server
const port = 8000;
//Initialize our app
const app = express();
//Route For testing purpose
var interviewRouter = require('./routes/interviewRouter');

const MongoClient = require("mongodb").MongoClient;
  
// Server path
const url = 'mongodb://localhost:27017';
  
// Name of the database
const dbname = "conFusion";
  
MongoClient.connect(url,{ useNewUrlParser: true }, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server"); 
    }
    else
        console.log("Error in the connectivity");
})

 
app.use('/interview',interviewRouter);

app.listen(port, function (err) {
if (err) {
    console.log('Error in opening server');
return;
}
console.log('server is serving');
return;
})