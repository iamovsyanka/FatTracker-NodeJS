const fs = require('fs');
const path = require('path');

const db = [];

fs.readdirSync(__dirname)
  .filter((file) => (file.split('.').pop() === 'js') && (file !== 'index.js'))
  .forEach((file) => db.push(path.join(__dirname, file)));

module.exports = db;
