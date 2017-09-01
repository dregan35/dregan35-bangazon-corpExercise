#!/usr/bin/env node

"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./employees.sqlite", err => {
  console.log("contact has been made");
  require("./table_Maker")().then(() => {
    populateEmployees();
    getEmployeeData();
  });
});

const { table } = require("./employees.json");

const populateEmployees = () => {
  return new Promise((resolve, reject) => {
    table.forEach(employee => {
      db.run(`INSERT INTO employees VALUES(
        ${employee.id},
        "${employee.firstName}",
        "${employee.lastName}",
        "${employee.address}",
        "${employee.jobTitle}")`);
    });
  });
};

const getEmployeeData = () => {
  console.log("grab the employee data");
  setTimeout(() => {
    db.all("SELECT * FROM employees", (err, allInfo) => {
      if (err) {
        return console.log("err", err.toString());
      }
      console.log("all employee info", allInfo);
    });

    db.all(
      "SELECT firstName, lastName, jobTitle FROM employees",
      (err, jobTitle) => {
        if (err) {
          return console.log("err", err.toString());
        }
        console.log("job title", jobTitle);
      }
    );
    db.all(
      "SELECT firstName, lastName, address FROM employees",
      (err, address) => {
        if (err) {
          return console.log("err", err.toString());
        }
        console.log("address", address);
      }
    );
  }, 500);
};
