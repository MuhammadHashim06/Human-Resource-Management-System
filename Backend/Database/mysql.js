var mysql = require('mysql');

var Database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hrsystem'
});

Database.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err.stack);
        return;
    }

    console.log('Connected to database as ID: ', Database.threadId);
});

module.exports = Database;
