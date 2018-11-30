
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // runQueries();
  // connection.end();
});

function afterConnection() {
  connection.query("SELECT * FROM products ORDER BY item_id", function(err, res) {
    if (err) throw err;
    // console.log(res);
    // write forloop
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id)
    }
    // displayResults(res);
    // connection.end();
    // console.log ();

    
  });
}


