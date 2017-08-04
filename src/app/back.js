var mysql = require('mysql');
var  register;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testapp"
});
exports.register = function(uname,pwd){
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (uname,pwd) VALUES (' "+uname+" ',' "+pwd+" ' )" ; 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}


