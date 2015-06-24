var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

db.all("SELECT * FROM posts", function(err, rows) {
  rows.forEach(function(row) {
  console.log(row);
  console.log('\n')
  })
})