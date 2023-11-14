var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var eagle_controller = require('../controllers/eagle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// eagle ROUTES ///
// POST request for creating a eagle.
router.post('/eagle', eagle_controller.eagle_create_post);
// DELETE request to delete eagle.
router.delete('/eagle/:id', eagle_controller.eagle_delete);
// PUT request to update eagle.
router.put('/eagle/:id', eagle_controller.eagle_update_put);
// GET request for one eagle.
router.get('/eagle/:id', eagle_controller.eagle_detail);
// GET request for list of all eagle items.
router.get('/eagle', eagle_controller.eagle_list);

//
//
//
/* GET detail eagle page */
router.get('/detail', eagle_controller.eagle_view_one_Page);
module.exports = router;