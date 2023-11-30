const mongoose = require("mongoose") 
const animalsSchema = mongoose.Schema({ 
    animalName: { type:string, required: true, maxLength:[10]},
    animalAge: String, 
    animalCost: {
        type: Number,
        min: [0, 'The animals price must be greater than or equal to 0'], 
        max: [300000, 'The animals price cannot exceed 300000'], 
        required: [true, 'animals price is required'] 
    }
})  
module.exports = mongoose.model("animals", animalsSchema) 
