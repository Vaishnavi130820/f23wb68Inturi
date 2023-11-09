var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var animals_controller = require('../controllers/animals');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// animals ROUTES ///
// POST request for creating a animals.
router.post('/animals', animals_controller.animals_create_post);
// DELETE request to delete animals.
router.delete('/animals/:id', animals_controller.animals_delete);
// PUT request to update animals.
router.put('/animals/:id', animals_controller.animals_update_put);
// GET request for one animals.
router.get('/animals/:id', animals_controller.animals_detail);
// GET request for list of all animals items.
router.get('/animals', animals_controller.animals_list);
module.exports = router;
