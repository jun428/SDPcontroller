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

var sdpid_100_Controller =
  "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (100,1,'controller','KR','Daejeon','Yuseong','CNU','Controller',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
  querySQL(sdpid_100_Controller);  
var sdpid_200_gateway =
  "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (200,1,'gateway','KR','Daejeon','Yuseong','CNU','Controller Gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
  querySQL(sdpid_200_gateway); 
  
// 1 : client 1 : building number 101 : room number 00 : wall pad
// 1 : client 1 : building number 101 : room number 01~ : user
var sdpid_1110100_client =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (1110100,1,'client','KR','Daejeon','Yuseong','CNU','1_101_00',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_1110100_client); 
var sdpid_1110101_client =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (1110101,1,'client','KR','Daejeon','Yuseong','CNU','1_101_01',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_1110101_client); 

// 2 : gateway 1 : building number 101 : room number 00 : wall pad
var sdpid_2110100_gateway =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (2110100,1,'gateway','KR','Daejeon','Yuseong','CNU','1_101_gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_2110100_gateway); 
// 1 : client 2 : building number 202 : room number 00 : wall pad
// 1 : client 2 : building number 202 : room number 01~ : user
var sdpid_1220200_client =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (1220200,1,'client','KR','Daejeon','Yuseong','CNU','2_202_00',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_1220200_client); 
var sdpid_1220201_client =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (1220201,1,'client','KR','Daejeon','Yuseong','CNU','2_202_01',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_1220201_client); 
var sdpid_1220202_client =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (1220202,1,'client','KR','Daejeon','Yuseong','CNU','2_202_02',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_1220202_client); 
// 2 : gateway 2 : building number 202 : room number 00 : wall pad
var sdpid_2220200_gateway =
    "insert into sdpid(sdpid,valid,type,country,state,locality,org,serial,last_cred_update,cred_update_due) values (2220200,1,'gateway','KR','Daejeon','Yuseong','CNU','2_202_gateway',NOW(),DATE_ADD(NOW(), INTERVAL 1 YEAR))";
    querySQL(sdpid_2220200_gateway); 

//service
var service_controller =
    "insert into service(id, name, description) values (1, 'controller', 'It is controller service')";
    querySQL(service_controller);   
var service_2_202_SIP =
    "insert into service(id, name, description) values (2, '2_202 SIP', '2_202 interphone')";
    querySQL(service_2_202_SIP); 

var service_2_202_light =
    "insert into service(id, name, description) values (3, '2_202 light', '2_202 light')";
    querySQL(service_2_202_light); 


//service_gateway
var service_gate_controller =
    "insert into service_gateway values(1,1,200,'tcp',18000,'10.100.100.100',18000)";
    querySQL(service_gate_controller); 

var service_gate_2_202_SIP =
    "insert into service_gateway values(2,2,2220200,'tcp',5060,'10.0.2.202',5060)";
    querySQL(service_gate_2_202_SIP); 

var service_gate_2_202_light =
    "insert into service_gateway values(3,3,2220200,'tcp',8000,'10.0.2.202',8000)";
    querySQL(service_gate_2_202_light); 

//sdpid_service
var sdpid_service_1_101_0_crtl =
    "insert into sdpid_service values(1,1110100,1)";
    querySQL(sdpid_service_1_101_0_crtl); 
    
var sdpid_service_1_101_0_SIP =
    "insert into sdpid_service values(2,1110100,2)";
    querySQL(sdpid_service_1_101_0_SIP); 

//user
var user_2_202_00 = 
    "insert into user(id,last_name,first_name,email) values(1,'2','202','home@home')";
    querySQL(user_2_202_00); 

var user_2_202_01 = 
    "insert into user(id,last_name,first_name,email) values(2,'Sung','Youngjun','home@home')";
    querySQL(user_2_202_01); 

var user_2_202_02 = 
    "insert into user(id,last_name,first_name,email) values(3,'Sung','Youngjun2','home@home')";
    querySQL(user_2_202_02); 

var user_1_101_00 = 
    "insert into user(id,last_name,first_name,email) values(4,'1','101','home@home')";
    querySQL(user_1_101_00); 

var user_1_101_01 = 
    "insert into user(id,last_name,first_name,email) values(5,'Jun','Sung','home@home')";
    querySQL(user_1_101_01); 

//group

var group_1_101=
    "insert into `group` values(1,1,'1_101','1_101 group')";
    querySQL(group_1_101); 


var group_2_202=
    "insert into `group` values(2,1,'2_202','2_202 group')";
    querySQL(group_2_202); 

//user_group(id,user_id,group_id)
var user_group_2_202_01=
    "insert into user_group values(1,2,2)";
    querySQL(user_group_2_202_01); 

var user_group_2_202_02=
    "insert into user_group values(2,3,2)";
    querySQL(user_group_2_202_02); 
//group_service()
var group_service= "insert into group_service values(1,2,3)";
querySQL(group_service); 

//update sdpid
var sdpid_1220200="update sdpid set user_id=1 where sdpid=1220200";
querySQL(sdpid_1220200); 
var sdpid_1220201="update sdpid set user_id=2 where sdpid=1220201";
querySQL(sdpid_1220201); 
var sdpid_1220202="update sdpid set user_id=3 where sdpid=1220202";
querySQL(sdpid_1220202); 
var sdpid_1110100="update sdpid set user_id=4 where sdpid=1110100";
querySQL(sdpid_1110100); 
var sdpid_1110101="update sdpid set user_id=5 where sdpid=1110101";
querySQL(sdpid_1110101); 

//insert into sdpid_service values(3,200,1);
//mysql> insert into sdpid_service values(4,2220200,1);


connection.end();