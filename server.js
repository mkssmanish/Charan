const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

////////////

//const api=require('./server/routes/api')

const app=express();

const port=2111;

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use('/api',api);

///////////////
////////////
//var app=express();
var mongojs=require('mongojs');
var mongoose  = require('mongoose');
<<<<<<< HEAD
var db=mongojs('collections',['moduleName','loginDetails','projectSelection,featureName,priority,types'])
=======
var db=mongojs('collections',['loginDetails','projectSelection'])
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844



var methodOverride = require('method-override');
var bson = require('bson');
var Promise = require('es6-promise').Promise;
var Decimal128 = require('mongodb').Decimal128;
app.use(bodyParser.json({limit: '50mb'})); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,parameterLimit:50000}));// parse application/x-www-form-urlencoded

app.use(bodyParser.json());
 //console.log("mmmmmmmmmmmmmooooooooooooooooooo")

app.get('/loginDetails',function(req,res){
<<<<<<< HEAD

   // console.log("ooooooooooooooooooo")
    db.loginDetails.find({"userName":"Admin"},function(err,doc){
=======
     
   // console.log("ooooooooooooooooooo")
    db.loginDetails.find({"userName":"Admin"},function(err,doc){        
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
        res.json(doc);
        // console.log("kkkkkkkkkkkkkkk"+doc)
    })
})
app.get('/selectionProject',function(req,res){
<<<<<<< HEAD


    db.projectSelection.find({},function(err,doc){
        res.json(doc);
        // console.log("mm"+doc)
    })
})
app.get('/importType',function(req,res){

  console.log("kkkkkkkkkkkkkkkkkkkkk")
    db.types.find({},function(err,doc){
        res.json(doc);
         //console.log(doc)
    })
})
app.get('/importPriority',function(req,res){


    db.priority.find({},function(err,doc){
=======
     
  
    db.projectSelection.find({},function(err,doc){        
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
        res.json(doc);
        // console.log("mm"+doc)
    })
})
<<<<<<< HEAD
app.get('/getModuleName',function(req,res){



    db.moduleName.find({},function(err,doc){
        res.json(doc);
        //console.log(doc)
    })
})
app.get('/featureName',function(req,res){



    db.featureName.find({},function(err,doc){
        res.json(doc);
        //console.log(doc)
    })
})
app.get('/getFeatureName:ss',function(req,res){
     console.log("llllllllllllllllll")
     var moduleName1=req.params.ss
     moduleName1 = parseInt(moduleName1);
  console.log(moduleName1+"llllllllllllllllll")
    db.featureName.find({"ModuleId":moduleName1},function(err,doc){
        res.json(doc);
        console.log(doc)
    })
})
app.post('/postModuleName',function(req,res)
{
   //var moduleName=req.params.moduleName;

=======

app.post('/postModuleName',function(req,res)
{
   //var moduleName=req.params.moduleName;
   
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
    //var moduleName = str_array[1];
//console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

    db.moduleName.insert(req.body ,function(err,doc)
        {
        res.json(doc);
        //console.log(doc)
       });


})
app.post('/postFeatureName',function(req,res)
{
   //var moduleName=req.params.moduleName;
<<<<<<< HEAD

=======
   
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
    //var moduleName = str_array[1];
//console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

    db.featureName.insert(req.body ,function(err,doc)
        {
        res.json(doc);
        //console.log(doc)
       });


})

app.get('*',(req, res)=> {

  res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function() {
	console.log("server running on port"+port);
	// body...
});





