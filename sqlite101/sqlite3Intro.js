"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./example.sqlite", () => {
  console.log("connected")
});

db.run("CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT)");

db.run(
  "INSERT INTO employees (id, first, last) VALUES (1, 'Michael', 'Scott')"
);
db.run("INSERT INTO employees VALUES (2, 'Jim', 'Halpert')");

const employeeArray = [
  { id: 3, firstName: "Dwight", lastName: "Schrute" },
  { id: 4, firstName: "Andy", lastName: "Bernard" },
  { id: 5, firstName: "Pam", lastName: "Beesly" }
];

employeeArray.forEach(obj => {
  db.run(
    `INSERT INTO employees VALUES (${obj.id}, '${obj.firstName}', '${obj.lastName}')`
  );
});

db.all("SELECT * FROM employees", (err, allRows) => {
  console.log("all rows", allRows);
  if (err) {
    return console.log("err", err.toString());
  }
});

// errorHandler is a function which accepts an error object
const errorHandler = err => {
  if (err) {
    // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  }
};

db.run("INSERT INTO employees VALUES (2, 'Jim', 'Halpert')", errorHandler);

db.all("SELECT * FROM employees", (err, allRows) => {
  errorHandler(err);

  // <-- Do something with results from database -->
});

db.close(err => {
  errorHandler(err); // Use custom error handling function
  console.log("Database closed"); // Will only log on successful close
});
