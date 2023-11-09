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

   // VIEWS
// Handle a show all view
exports.animals_view_all_Page = async function(req, res) {
    try{
    theanimals = await animals.find();
    res.render('animals', { title: 'animals Search Results', results: theanimals });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.costume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new animals();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.animalName = req.body.animalName;
    document.animalAge = req.body.animalAge;
    document.animalCost = req.body.animalCost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };