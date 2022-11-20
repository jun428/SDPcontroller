const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "sdp_controller",
  password: "sdp1234!@A",
  database: "sdp",
});

connection.connect();

/*
connection.query("DESC sdpid", (error, rows, fields) => {
  if (error) throw error;
  for (row of rows) {
    console.log(row.Field, row.Type, row.Null, row.Key, row.Default, row.Extra);
  }
});
*/

//create user 'sdp_controller'@'localhost' identified by 'sdp1234!@A';
//grant all privileges on sdp.* to 'sdp_controller'@'localhost';
//FLUSH PRIVILEGES;



//service table
/*
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| name        | varchar(1024) | NO   |     | NULL    |                |
| description | varchar(4096) | NO   |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+
example
insert into service(id, name, description) values (int, var, var)
*/

var service_controller =
  "insert into service(id, name, description) values (1, 'controller', 'It is controller service')";

var service_SIP =
  "insert into service(id, name, description) values (2,'gram SIP', 'It is gram SIP service')";

var service_light_pi2 =
  "insert into service(id, name, description) values (2,'pi2 light service', 'pi2 light service')";


// UPDATE service SET id=2 where name='SIP';

//sdpid table
/*
+------------------+---------------------------------------+------+-----+---------------------+----------------+
| Field            | Type                                  | Null | Key | Default             | Extra          |
+------------------+---------------------------------------+------+-----+---------------------+----------------+
| sdpid            | int                                   | NO   | PRI | NULL                | auto_increment |
| valid            | tinyint(1)                            | NO   |     | 1                   |                |
| type             | enum('client','gateway','controller') | NO   |     | client              |                |
| country          | varchar(128)                          | NO   |     | NULL                |                |
| state            | varchar(128)                          | NO   |     | NULL                |                |
| locality         | varchar(128)                          | NO   |     | NULL                |                |
| org              | varchar(128)                          | NO   |     | NULL                |                |
| org_unit         | varchar(128)                          | YES  |     | NULL                |                |
| alt_name         | varchar(128)                          | YES  |     | NULL                |                |
| email            | varchar(128)                          | YES  |     | NULL                |                |
| encrypt_key      | varchar(2048)                         | YES  |     | NULL                |                |
| hmac_key         | varchar(2048)                         | YES  |     | NULL                |                |
| serial           | varchar(32)                           | NO   |     | NULL                |                |
| last_cred_update | timestamp                             | NO   |     | 0000-00-00 00:00:00 |                |
| cred_update_due  | timestamp                             | NO   |     | 0000-00-00 00:00:00 |                |
| user_id          | int                                   | YES  | MUL | NULL                |                |
| environment_id   | int                                   | YES  | MUL | NULL                |                |
+------------------+---------------------------------------+------+-----+---------------------+----------------+
example
"insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (3001,1,'gateway','KR',' ',' ','CNU','Gateway',NOW(),NOW())";
*/


//DATE_ADD(NOW(), INTERVAL 1 YEAR);
// 2000 :client 3000: server
var sdpid_3001_Client =
  "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (2001,1,'client','KR',' ',' ','CNU','IH host',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";

var sdpid_1001_Controller =
  "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (1001,1,'controller','KR','Daejeon','Yuseong','CNU','Controller',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";

var sdpid_2001_gateway =
  "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (2001,1,'gateway','KR','Daejeon','Yuseong','CNU','Controller Gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";

var sdpid_2002_gateway =
  "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (2002,1,'gateway','KR',' ',' ','CNU','gram Gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";

var sdpid_2003_gateway =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (2003,1,'gateway','KR',' ',' ','CNU','Pi Gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";


var sdpid_20002_gateway =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (20002,1,'gateway','KR',' ',' ','CNU','Pi Gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";

var sdpid_10001_client =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (10001,1,'client','KR','Daejeon','Yuseong','CNU','1_101',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";


//service_gateway
/*
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| id            | int          | NO   | PRI | NULL    | auto_increment |
| service_id    | int          | NO   | MUL | NULL    |                |
| gateway_sdpid | int          | NO   | MUL | NULL    |                |
| protocol      | tinytext     | NO   |     | NULL    |                |
| port          | int unsigned | NO   |     | NULL    |                |
| nat_ip        | varchar(128) | NO   |     |         |                |
| nat_port      | int unsigned | NO   |     | 0       |                |
+---------------+--------------+------+-----+---------+----------------+
*/

var service_gate_controller =
"insert into service_gateway values(1,1,2001,'tcp',18000,'10.100.100.100',18000)";

var service_gate_SIP =
"insert into service_gateway values(2,2,2002,'SIP',5060,'127.0.0.1',5060)";



//sdpid_service table
/*
+------------+------+------+-----+---------+----------------+
| Field      | Type | Null | Key | Default | Extra          |
+------------+------+------+-----+---------+----------------+
| id         | int  | NO   | PRI | NULL    | auto_increment |
| sdpid      | int  | NO   | MUL | NULL    |                |
| service_id | int  | NO   | MUL | NULL    |                |
+------------+------+------+-----+---------+----------------+

*/

var sdpid_service_2001_1 =
"insert into sdpid_service values(1,2001,1)"

var sdpid_service_2002_2 =
"insert into sdpid_service values(2,2002,2)"

var sdpid_service_2002_1 =
"insert into sdpid_service values(3,2002,1)"


var sdpid_service_20002_controller =
"insert into sdpid_service values(1,20002,1)"


var sdpid_service_2001_controller =
"insert into sdpid_service values(2,2001,1)"

var insert_controller =
"insert into controller values(1001,'sdp controller','192.168.1.127',5555,2001,1)"

var insert_gateway =
"insert into gateway values(2002,'home controller','192.168.1.166',NULL)"

var insert_gateway_crtl = 
"insert into gateway_controller values(1,2001,1001)"


let testQuery = 'DESC sdpid'

function querySQL(_input) {
  connection.query(_input, (error, rows, fields) => {
    if (error) throw error;
    console.log(rows);
  });
}

//querySQL(sdpid_2001_gateway);
//querySQL(sdpid_2002_gateway);

//querySQL(service_gate_controller);
//querySQL(sdpid_service_2001_1);

//querySQL(testQuery);
//querySQL(sdpid_10001_client);


var sdpid_service_20002_controller =
"insert into sdpid_service values(3,10001,2)"


var service_gate_SIP =
"insert into service_gateway values(2,2,2002,'tcp',8000,'10.0.1.1',8000)";


querySQL(sdpid_service_20002_controller);


connection.end();

/*

select * from sdpid
*/
