// - Requires ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
// const models = require("../models/Videogame");

const {API_KEY} = process.env;

const videogamesRouter = express.Router();


// [ ] GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
//===============================================================
// [ ] GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan 
// la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado
videogamesRouter.get('/', async(req,res)=>{
    
    const name = req.query.name;
    
    if (name){
        try {
            const axiosGet = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
            
            const data = axiosGet.data.results.slice(0,15);
            res.status(200).json(data); 
 
        } catch (error) {
            res.status(404).send(`Ocurrio el error: ${error.toString()}`)
        }
    }else{
        try {
            const axiosGet1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`);
            const axiosGet2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`);
            const axiosGet3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`);
            const axiosGet4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`);
            const axiosGet5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`);
            
            const data = axiosGet1.data.results.concat(
                axiosGet2.data.results, 
                axiosGet3.data.results, 
                axiosGet4.data.results, 
                axiosGet5.data.results
            );
            res.status(200).json(data); 
 
        } catch (error) {
            res.status(404).send(`Ocurrio el error: ${error.toString()}`)
        }
    }
})


module.exports = videogamesRouter;




