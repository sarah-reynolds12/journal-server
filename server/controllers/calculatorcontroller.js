let express = require('express'); //always start with these
let router = express.Router();

router.post('/add', function(req, res) {
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    let obj = {total: number1 + number2}
    res.json(obj)

    //version 2 of sending json
    //res.json({total: number1 + number 2})
})

module.exports = router; //always end with this
