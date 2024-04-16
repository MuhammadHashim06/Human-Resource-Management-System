var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.post('/', function(req, res, next) {
    var { employeeId, title, description, dueDate, datenow } = req.body;
    var sql = 'INSERT INTO task (EMPLOYEEID, TITLE, DESCRIPTION,DATEOFASSIGNING, DUEDATE, STATUS, PROGRESS ) VALUES (?, ?, ?, ?,?,?,?)';
    database.query(sql, [employeeId, title, description, dueDate,datenow, 'Pending', 0 ], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Application added successfully' });
    });
});

module.exports = router;