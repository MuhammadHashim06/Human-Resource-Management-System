var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    var { name, email, department, salary, Dateofjoining, password, role } = req.body;
    var sql = 'UPDATE employee SET name=?, email=?, department=?, salary=?, Dateofjoining=?, password=?, role=? WHERE id=?';
    database.query(sql, [name, email, department, salary, Dateofjoining, password, role, id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Employee updated successfully' });
    });
});

module.exports = router;
