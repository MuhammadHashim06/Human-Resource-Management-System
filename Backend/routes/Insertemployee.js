var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.post('/', function(req, res, next) {
    var { name, email, department, salary, Dateofjoining, password, role } = req.body;
    var sql = 'INSERT INTO employee (name, email, department, salary, Dateofjoining, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
    database.query(sql, [name, email, department, salary, Dateofjoining, password, role], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Employee added successfully' });
    });
});

module.exports = router;
