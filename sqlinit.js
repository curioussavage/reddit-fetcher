var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

db.serialize(function() {
  var fields = '(id INTEGER PRIMARY KEY, title TEXT, created INTEGER, author TEXT, fullname TEXT, url TEXT)';
  db.run("CREATE TABLE IF NOT EXISTS posts " + fields)
});


var saveNewPost = function(args, cb) {
  var statement = db.prepare("INSERT INTO posts (title, created, author, fullname, url) VALUES (?, ?, ? ,?, ?)");
  statement.run(args.title, args.created, args.author, args.fullname, args.url);
  statement.finalize();

  if (cb) {
    cb();
  }
}

module.exports.saveNewPost = saveNewPost;
module.exports.db = db;
