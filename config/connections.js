/* Connection to the database and export and used by the O.R.M. */
var mysql = require('mysql'),
    connection,
    source = {
        localhost: {
            port: 3306,
            host: 'localhost',
            user: 'root', // Your MySql username
            password: 'root', // Your MySql password
            database: 'burgers_db' // Run schema and seeds in burger/db directory
        },
        jawsDB: {
            port: 3306,
            host: 'otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'zc4fhf9asxxwdtbt',
            password: 'ane9ogwbjgcsviwn',
            database: 'he0o2bfs4c22eipy'
        }
    };

// connect to localhost if jawsdb doesn't exist
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(source.jawsDB);
} else {
    connection = mysql.createConnection(source.localhost);
}

// Connect!!
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;