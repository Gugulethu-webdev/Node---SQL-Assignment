const { Client } = require("pg");
require("dotenv").config();

let user = process.env.user;
let password = process.env.password;
let host = process.env.host;
let database = process.env.database;
let port = process.env.port;

const client = new Client({
  user: user,
  password: password,
  host: host,
  database: database,
  port: port
});

async function connect(){
 await client.connect((err)=>{
   if(!err){console.log("connected to database succesfully")}
   else{console.log(err)}
 })
}

async function addNewVisitor(id,name, age, date, time, assistent, comments){
   let sql = `INSERT INTO Visitors Values(${id},'${name}',${age},'${date}','${time}','${assistent}','${comments}')`;
  await client.query(sql,(err)=>{
    if(!err){console.log(`a visitor by the name of ${name} was added`)}
    else{console.log(err)}
  })
}

async function listAllVisitors(){
  sql = 'SELECT id,name FROM Visitors;'
  await client.query(sql, (err,result)=>{
    if(err){console.log(err)}
    else{console.log(result.rows)}
  })
}
async function deleteVisitor(id){
  let sql = `DELETE FROM Visitors WHERE id = (${id});`
  await client.query(sql,(err,results)=>{
    if(err){console.log(err)}
    else{console.log(`a visitor with an id of ${id} was deleted`)}
  })
}

async function update(column,newValue,id){
  
  sql = `UPDATE Visitors SET ${column} = '${newValue}' WHERE id = ${id}`
  await client.query(sql,(err,res)=>{
    if(err){console.log(err)}
    else{console.log(`the ${column} of the user with an id of ${id} was updated to ${newValue}`)}
  })
}

async function viewOneVisitor(id){
  let sql = `SELEct * FROM Visitors WHERE id = ${id}`
  await client.query(sql,(err,results)=>{
    if(err){console.log(err)}
    else{console.table(results.rows)}
  })
}

const deleteAllVisitors = async function(){
  sql = "DELETE FROM Visitors";
  await client.query(sql, (err)=>{
    if(err){console.log(err)}
    else{console.log("all visitors' infomation has been deleted!")}
  })
}
connect()

//addNewVisitor(5,'maki',44,'05-10-2020','23:14','mxov1','yes commander')
//listAllVisitors()
//deleteVisitor(1)
//update("name",'nkanyamba',5)
//viewOneVisitor(5)
//deleteAllVisitors()




