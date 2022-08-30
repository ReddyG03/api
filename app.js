const express = require('express')
const app = express()
const mongoose = require('mongoose');
app.use(express.json());
const port = process.env.PORT || 80;
const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const uri = "mongodb+srv://toshiro03:Toshiro03@cluster0.8dt91ql.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
db=client   .   db("test");
var bodyParser=require("body-parser"); 
const path = require('path'); 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));






app.post('/signup', (req, res) => {
  const {name,password,email}=req.body;
  console.log(name);
  const    data={name,password,email};
  db.collection('user').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully");         
  });     
  return res.redirect('/loginsignup'); 
})
app.post('/contact', (req, res) => {
  const {name,number,email}=req.body;
  const    data={name,number,email};
  db.collection('contact').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully");         
  });     
  return res.redirect('/'); 
})
app.post('/login', (req, res) => {
  const {name,password,email}=req.body;
  db.collection('user').findOne({name},function(err, collection){ 
      if (err) throw err; 
      if(collection.password==password)

      else
      return res.send("error");         
  }); 
  return res.redirect('/'); 
})
app.get('/logout', (req, res) => {

  return res.redirect('/'); 
})
app.get('/loginsignup',function(req,res){

  res.sendFile(path.join(__dirname+'/index.html'));
});
app. get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html')); else return res.redirect('/loginsignup');
});
app. get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index1.html'))
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
