var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.get('/', function(req, res, next) {
    var sql = 'SELECT attendance.*, employee.name AS employee_name FROM attendance JOIN employee ON attendance.EMPLOYEEID = employee.id';
    database.query(sql, (err, result) => {
        if (err || !result.length) {
            console.error(`Error executing query: ${err}`);
            res.status(404).json({ error: "Not found" });
        } else {
            res.json(result);
        }
    })
})


router.get('/:id', function(req, res, next) {
    var sql = 'SELECT * FROM attendance where EMPLOYEEID=?';
    var data = [parseInt(req.params.id)];
    database.query(sql, data , (err, result) => {
        if (err || !result.length) {
            console.error(`Error executing query: ${err}`);
            res.status(404).json({ error: "Not found" });
        } else {
            res.json(result);
        }
    })
})

module.exports = router;
