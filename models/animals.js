const mongoose = require("mongoose") 
const animalsSchema = mongoose.Schema({ 
    animalName: String,  	animalAge: String, 
 	Cost: Number 
})  
module.exports = mongoose.model("animals", animalsSchema) 
