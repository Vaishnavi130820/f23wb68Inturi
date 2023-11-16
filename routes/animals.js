var express = require('express');
const animals_controlers= require('../controllers/animals');
var router = express.Router();
/* GET animals */
router.get('/', animals_controlers.animals_view_all_Page );
/* GET detail animals page */
router.get('/detail', animals_controlers.animals_view_one_Page);
/* GET create animals page */
router.get('/create', animals_controlers.animals_create_Page);
module.exports = router;