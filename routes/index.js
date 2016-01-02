var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var langArr = req.headers['accept-language'].split(",");
    var lang = langArr[0];
    var os = req.headers['user-agent'].split("(")[1].split(")")[0];
    var jsonOut = {"ipaddress": req.headers['x-forwarded-for'], "language": lang, "software": os};
    res.json(jsonOut);
});

module.exports = router;
