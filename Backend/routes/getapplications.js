var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

/* GET employee listing. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM applications';
    database.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(result);
    });
});

module.exports = router;
