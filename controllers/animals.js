var animals = require('../models/animals'); 
 
// List of all animals
exports.animals_list = function(req, res) {    
 res.send('NOT IMPLEMENTED: animals list'); 
}; 
 
// for a specific animals. 
exports.animals_detail = function(req, res) { 
res.send('NOT IMPLEMENTED: animals detail: ' + req.params.id); 
};
// Handle animals create on POST. 
exports.animals_create_post = function(req, res) {    
res.send('NOT IMPLEMENTED: animals create POST'); }; 
 
// Handle animals delete form on DELETE. 
exports.animals_delete = function(req, res) { 
res.send('NOT IMPLEMENTED: animals delete DELETE ' + req.params.id); }; 
 
// Handle animals update form on PUT. 
exports.animals_update_put = function(req, res) { 
res.send('NOT IMPLEMENTED: animals update PUT' + req.params.id); 
}; 

// List of all Costumes
exports.animals_list = async function(req, res) {
    try{
    theanimals = await animals.find();
    res.send(theanimals);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };