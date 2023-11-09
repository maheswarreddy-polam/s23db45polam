var express = require('express');
const eagle_controlers= require('../controllers/eagle');
var router = express.Router();
/* GET eagles */
router.get('/', eagle_controlers.eagle_view_all_Page );
module.exports = router;