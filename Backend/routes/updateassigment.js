var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

router.put('/:id', function(req, res, next) {
    var sql = 'UPDATE task SET PROGRESS = ?, STATUS = ? WHERE ID = ?';
    var data = [req.body.PROGRESS, req.body.STATUS, parseInt(req.params.id)];
    console.log(data);
    database.query(sql, data, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Assignment not found' });
            return;
        }
        res.status(200).json({ message: 'Assignment updated successfully' });
    });
});


module.exports = router;
