var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

/* GET applications with employee names. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT applications.*, employee.name AS employee_name FROM applications JOIN employee ON applications.EMPLOYEEID = employee.id';
    database.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(result);
    });
});

router.get('/:id', function(req, res, next) {
    var sql = 'SELECT applications.*, employee.name AS employee_name FROM applications JOIN employee ON applications.EMPLOYEEID = ?';
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
