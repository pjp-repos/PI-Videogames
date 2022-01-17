// - Packages ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
// - Models -----------------------------------
const {Genre} = require("../db");
// - Settings ---------------------------------
const {API_KEY} = process.env;
// - Express router ---------------------------
const genresRouter = express.Router();


genresRouter.get('/', async(req,res)=>{    
    try {
        // Fetching....
        const axiosGet = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        
        // Select id, name from Genre 
        const data = await Genre.findAll({
            attributes:['id', 'name']
        });
        console.log(`axios len: ${axiosGet.data.results.length} findAll len ${data.length}`)
        if (axiosGet.data.results.length!==data.length){
            // Formating data
            const dataFormated = axiosGet.data.results.map(el=>{
                return {id:el.id, name: el.name}
            });
            
            //Delete * from Genres
            await Genre.destroy({
                where:{},
            });
            
            // Insert into Genres values (dadaFormated)
            await Genre.bulkCreate(dataFormated);
            // Select id, name from Genre 
            const data = await Genre.findAll({
                attributes:['id', 'name']
            });
        }
      
        res.status(200).json(data); 

    } catch (error) {
        res.status(404).send(`Ocurrio el error: ${error.toString()}`)
    }    
})


module.exports = genresRouter;

