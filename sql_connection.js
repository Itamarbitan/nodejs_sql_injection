var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : "hm_25_7"
});

const connectionStatus = function(err){
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
     
    console.log('connected as id ' + connection.threadId);
};

connection.connect(connectionStatus);


module.exports = connection;
  