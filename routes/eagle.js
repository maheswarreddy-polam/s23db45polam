var express = require('express');
const eagle_controlers= require('../controllers/eagle');
var router = express.Router();
/* GET eagles */
router.get('/', eagle_controlers.eagle_view_all_Page );
router.get('/detail', eagle_controlers.eagle_view_one_Page);
router.get('/create', eagle_controlers.eagle_create_Page);
router.get('/update', eagle_controlers.eagle_update_Page);
router.get('/delete', eagle_controlers.eagle_delete_Page);
module.exports = router;