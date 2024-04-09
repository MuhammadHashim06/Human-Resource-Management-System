var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

/* GET employee listing. */
router.put('/:id', function(req, res, next) {
    var { status } = req.body;
    var appId = req.params.id;
    var sql = 'UPDATE applications SET STATUS = ? WHERE id = ?';
    database.query(sql, [status, appId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ message: 'Application updated successfully' });
    });
});

module.exports = router;
