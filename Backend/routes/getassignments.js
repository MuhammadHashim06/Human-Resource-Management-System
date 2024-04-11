var express = require('express');
var router = express.Router();
var database = require('../Database/mysql');

/* GET employee listing. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM task';
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
    var sql = 'SELECT * FROM task where  id=?';
    var data = [parseInt(req.params.id)];
    //console.log("data : "+JSON.stringify(data));
    database.query(sql, data , (err, result) => {
        if (err || !result.length) {
            console.error(`Error executing query: ${err}`);
            res.status(404).json({ error: "Not found" });
        } else {
            res.json(result[0]);
        }
    })
})

module.exports = router;
