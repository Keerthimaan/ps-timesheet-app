var http = require('http');
var fs = require('fs');
var url = require('url');
var mysql = require('mysql');

// Create a server
var http = require('http'),
    qs = require('querystring');
con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testapp"
});

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/register') {
	  console.log("getting...");
    var body = "";
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      var data = body.split("|");  
      console.log(data);          
      if(data[0] != "" && data[0] != 'undefined' && data[1] != "" && data[1] != 'undefined' && data[2] != "" && data[2] != 'undefined' ){     
        
        register(data[0],data[1],data[2]);
      }
    });
  } else if(req.url === '/getdetails'){
    console.log("getting...");
       con.connect(function(err) {
  if (err) throw err;
       con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    var data = JSON.stringify(result);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
  });
});
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8081);

register = function(uname,pwd){
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