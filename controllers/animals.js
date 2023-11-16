var animals = require('../models/animals'); 
 
// List of all animals
exports.animals_list = function(req, res) {    
 res.send('NOT IMPLEMENTED: animals list'); 
}; 
 
// for a specific animals. 
exports.animals_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await animals.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle animals create on POST. 
exports.animals_create_post = function(req, res) {    
res.send('NOT IMPLEMENTED: animals create POST'); }; 
 
// Handle animals delete form on DELETE. 
exports.animals_delete = function(req, res) { 
res.send('NOT IMPLEMENTED: animals delete DELETE ' + req.params.id); }; 
 
// Handle animals update form on PUT. 
exports.animals_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await animals.findById( req.params.id)
    // Do updates of properties
    if(req.body.animalName)
    toUpdate.animalName = req.body.animalName;
    if(req.body.animalAge) toUpdate.animalAge = req.body.animalAge;
    if(req.body.animalCost) toUpdate.animalCost = req.body.animalCost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   }; 

// List of all animals
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
exports.animals_create_post = async function(req, res) {
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
    
// Handle a show one view with id specified by query
exports.animals_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await animals.findById( req.query.id)
res.render('animalsdetail',
{ title: 'animals Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a animals.
// No body, no in path parameter, no query.
// Does not need to be async
exports.animals_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('animalscreate', { title: 'animals Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    