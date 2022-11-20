const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "sdp_controller",
  password: "sdp1234!@A",
  database: "sdp",
});

connection.connect();

function querySQL(_input) {
    connection.query(_input, (error, rows, fields) => {
      if (error) throw error;
      console.log(rows);
    });
  }

var controller =
    "insert into controller values(100,'controller','10.100.100.100',18000,200,1)";

var gateway_2220200 =
    "insert into gateway(sdpid,name,address) values(2220200,'2_202 gateway','10.0.2.202')";

var gateway_controller =
    "insert into gateway_controller values(1,200,100)";


querySQL(gateway_controller);


connection.end();