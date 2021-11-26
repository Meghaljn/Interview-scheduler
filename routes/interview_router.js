const express = require('express');
const bodyParser = require('body-parser');

const interviewRouter = express.Router();
const Interview=require('../models/interview');
 
interviewRouter.use(bodyParser.json());

interviewRouter.route('/')
.get((req,res,next) => {
    Interview.find({})
    .then((interviews)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(interviews);
    },(err)=>next(err))
    .catch((err)=> next(err));
})
.post((req, res, next) => {
    Dishes.create(req.body)
    .then((dish)=>{
        console.log('Dish created',dish);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err))
    .catch((err)=> next(err));
});

module.exports = interviewRouter;