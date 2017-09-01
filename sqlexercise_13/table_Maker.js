"use strict";

console.log("create table module");

const sqlite3 = require("sqlite3").verbose();

module.exports = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("./employees.sqlite", err => {
      console.log("made contact, createTable");
      db.run(`DROP TABLE IF EXISTS employees`);
      db.run(
        `CREATE TABLE IF NOT EXISTS employees (id  INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, address TEXT, jobTitle TEXT)`,
        () => {
          console.log("database deployed");
          resolve();
        }
      );
    });
  });
};
