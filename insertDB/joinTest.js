const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "sdp_controller",
  password: "sdp1234!@A",
  database: "sdp",
});

connection.connect();
var test = 1110100
connection.query(
    'select sdpid_service.sdpid,sdpid_service.service_id,'+ 
    'gateway.name,gateway.address,sdpid.encrypt_key,sdpid.hmac_key '+
    'from sdpid_service LEFT JOIN service_gateway ON sdpid_service.service_id=service_gateway.service_id '+
    'LEFT JOIN gateway ON gateway.sdpid=service_gateway.gateway_sdpid '+
    'LEFT JOIN sdpid on sdpid.sdpid = service_gateway.gateway_sdpid'+
    ' where sdpid_service.sdpid=?;',
    [test],
    function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });


connection.end();
