// - Packages ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
// - Models -----------------------------------
const {Platform} = require("../db");
// - Settings ---------------------------------
const {API_KEY} = process.env;
// - Express router ---------------------------
const platformRouter = express.Router();


platformRouter.get('/', async(req,res)=>{    
    try {
        // Fetching....
        const axiosGet = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        
        // Formating data
        const dataFormated = axiosGet.data.results.map(el=>{
            return {id:el.id, name: el.name}
        });
 
        // Delete * from Platform
        await Platform.destroy({
            where:{},
        });

        // Insert into Genres values (dadaFormated)
        await Platform.bulkCreate(dataFormated);
     
        // Select id, name from Genre 
        const data = await Platform.findAll({
            attributes:['id', 'name']
        });
        
        res.status(200).json(data); 

    } catch (error) {
        res.status(404).send(`Ocurrio el error: ${error.toString()}`)
    }    
})


module.exports = platformRouter;
