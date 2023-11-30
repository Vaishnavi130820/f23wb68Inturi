var express = require('express');
const animals_controlers= require('../controllers/animals');
var router = express.Router();
/* GET animals */
router.get('/', animals_controlers.animals_view_all_Page );
/* GET detail animals page */
router.get('/detail', animals_controlers.animals_view_one_Page);
/* GET create animals page */
router.get('/create', animals_controlers.animals_create_Page);
/* GET create animals page */
//router.get('/update', animals_controlers.animals_update_Page);
// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
 /* GET update costume page */
router.get('/update', secured,
animals_controlers.animals_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
/* GET delete animals page */
router.get('/delete', animals_controlers.animals_delete_Page);

module.exports = router;