// - Requires ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
// const models = require("../models/Videogame");

const {API_KEY} = process.env;

const videogameRouter = express.Router();



// [ ] GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados

videogameRouter.get('/:idVideogame',async(req,res)=>{
    const idVideogame = req.params.idVideogame;
    try {
        const axiosGet = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        
        const data = axiosGet.data;
        res.status(200).json(data); 

    } catch (error) {
        res.status(404).send(`Ocurrio el error: ${error.toString()}`)
    }
})

// [ ] POST /videogame:
// Recibe los datos recolectados desde el formulario controlado 
// de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos

videogameRouter.post('/',(req,res)=>{
    const name = req.body.name;
    const released = req.body.released;
    const image = req.body.image;
    const rating = req.body.rating;
    const description = req.body.description;
    const genres = req.body.genres;
    const platforms = req.body.platforms
    const formOk = 
        name!=="" &&
        released !== "" &&
        image !== "" &&
        parseFloat(rating)>0 &&
        parseFloat(rating)<5 &&
        image !== "" &&
        description !== "" &&
        Array.isArray(genres) &&
        Array.isArray(platforms)
    
    try {
        const formOk = 
        name &&
        released &&
        image &&
        parseFloat(rating)>0 &&
        parseFloat(rating)<5 &&
        image  &&
        description  &&
        Array.isArray(genres) &&
        Array.isArray(platforms)

        if(formOk){
            const form= {
                id:`db${Math.ceil(Math.random()*10000)}`,
                name,
                background_image:image,
                genres:genres.map(el=>{
                    return {"id":el,"name":el}
                })
            };
            res.status(200).json(form);
        }else{
            res.status(404).send(`Incorrect form content`)
        }        
    } catch (error) {
        res.status(404).send(`Errror form `)
    }
});

module.exports = videogameRouter;
