const check = require("./../dist/index")
require("dotenv").config("../dist/.env");

let user = process.env.user;
let password = process.env.password;
let host = process.env.host;
let database = process.env.database;
let port = process.env.port;

let a = check.connection
a()