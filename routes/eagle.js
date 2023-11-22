var express = require('express');
const eagle_controlers= require('../controllers/eagle');
var router = express.Router();

//new code for Assignment13
//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
  
/* GET costumes */
router.get('/', eagle_controlers.eagle_view_all_Page );
router.get('/eagle/:id', eagle_controlers.eagle_detail); 
/* GET detail cars page */ 
router.get('/detail',secured, eagle_controlers.eagle_view_one_Page); 
/* GET create cars page */ 
router.get('/create',secured, eagle_controlers.eagle_create_Page);
/* GET create update page */
router.get('/update',secured, eagle_controlers.eagle_update_Page);
/* GET delete costume page */
router.get('/delete',secured, eagle_controlers.eagle_delete_Page);
module.exports = router;