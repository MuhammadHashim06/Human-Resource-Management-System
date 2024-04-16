var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.post('/', function(req, res, next) {
    var { employee_id, date, time, status } = req.body;
    var sql = 'INSERT INTO attendance (EMPLOYEEID, DATE, TIME, STATUS) VALUES (?, ?, ?, ?)';
    database.query(sql, [employee_id, date, time, status], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Application added successfully' });
    });
});



module.exports = router;
