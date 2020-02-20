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
//connecting to database
async function connection() {
  try {
    await client.connect();
    console.log("connected with success");
    //await client.query("DROP TABLE Visitors;")
  } catch (e) {
    console.log(e);
  }
}

//adding visitors to database
async function addNewVisitor() {
  try {
    await client.query("BEGIN");
    await client.query(
      "INSERT INTO Visitors Values(1,'Lwazi Mtshali', 26, '2019-06-11', '12:00', 'Mesuli',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(2,'Slovo Nksoi', 23, '2019-07-11', '11:00', 'Sabza','comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(3,'Koketso NGWENYA', 20, '2019-10-20', '14:00', 'Sya',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(4,'Mxo Mtshali', 25, '2019-10-22', '16:00', 'Khayo',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(5,'Sabelo Dlamini', 20, '2019-10-25', '12:00', 'Slovo',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(6,'Mondli Shaba', 26, '2019-10-10', '12:00', 'Amen',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(7,'Zakhele Ndamane', 26, '2019-10-11', '12:00', 'Myeni',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(8,'Zazele Mabaso', 26, '2019-06-11', '12:00', 'Kelly',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(9,'Sanele Buhelezi', 26, '2019-06-11', '12:00', 'Nanny',' No comment');"
    );
    await client.query(
      "INSERT INTO Visitors Values(10,'Skholiwe Mathangane', 26, '2019-06-11', '12:00', 'Mgketsi',' No comment');"
    );
    await client.query("COMMIT");
  } catch (e) {
    console.log(e);
  }
}

// list a specified visitor
async function listVisitors() {
  try {
    await client.query("BEGIN");
    const results = await client.query("SELECT id, name FROM Visitors;");
    console.table(results.rows);
    await client.query("COMMIT");
  } catch (e) {
    console.log(e);
  }
}

//delete a specified visitor
async function deleteVisitor() {
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM Visitors WHERE id = 10;");
    await client.query("COMMIT");
  } catch (e) {
    console.log(e);
  }
}

//update a specified visitor
async function updateVisitor() {
  try {
    await client.query("BEGIN");
    await client.query(
      "UPDATE Visitors SET name = 'Thokozani Langa' WHERE id = 2;"
    );
    await client.query("COMMIT");
  } catch (e) {
    console.log(e);
  }
}

// view a specified visitor
async function viewOneVisitor(n) {
  try {
    await client.query("BEGIN");
    const results = await client.query(
      `SELECT * FROM Visitors WHERE id = ${n};`
    );
    console.table(results.rows);
    await client.query("COMMIT");
  } catch (e) {
    console.log(e);
  }
}

//delete all visitors
async function deleteAllVisitors() {
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM Visitors;");
    console.log("all visitors have been deleted");
    await client.query("Commit");
  } catch (e) {
    console.log(e);
  }
}

 connection()
// addNewVisitor()
// deleteVisitor();
// updateVisitor();
// viewOneVisitor(3);
// listVisitors();
// deleteAllVisitors();

// module.exports = {
//   connection,
//   deleteVisitor,
//   updateVisitor,
//   viewOneVisitor,
//   listVisitors,
//   deleteAllVisitors
// };
