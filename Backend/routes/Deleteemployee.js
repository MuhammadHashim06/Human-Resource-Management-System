var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    var sql = 'DELETE FROM employee WHERE id=?';
    database.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Employee deleted successfully' });
    });
});

module.exports = router;
