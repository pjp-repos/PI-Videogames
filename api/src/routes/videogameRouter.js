// - Packages ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
// - Models -----------------------------------
const {Game, Genre, Platform} = require("../db");
// - Settings ---------------------------------
const {API_KEY} = process.env;
// - Express router ---------------------------
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

videogameRouter.post('/', async (req,res)=>{
    const form = req.body;
    console.log(form)
    try {   
        const formForGame = {...form};
        delete formForGame.genres;
        delete formForGame.platforms;

        //Insert into Game values(formForGame)
        const newRow = await Game.create(formForGame);

        //Insert into Game_Genre values(form.genres)
        await newRow.addGenre(form.genres);

        //Insert into Game_Platform values(form.platforms)
        await newRow.addPlatform(form.platforms);
        
        // Select * from  Game 
        //      OUTER JOIN Game_Genre ON Game.id=Game_Genre.GameId 
        //      INNER JOIN Genre ON Genre.id=Game_Genre.GenreId 
        //      OUTER JOIN Game_Platform ON Game.id=Game_PLatform.PlatformId 
        //      INNER JOIN Platform ON Platform.id=Game_Platform.PlatformId 
        //      WHERE Game.id = newRow.id

        // JOIN = eagle loading
        const newId = await newRow.getDataValue('id');
        const response = await Game.findByPk(newId,{
            attributes:[
                'id',
                'name',
                'background_image'
            ],
            include:[
                {
                    model:Genre,
                    as:'genres',
                    attributes:['id','name'],
                    through: {attributes: []}
                },
                // {
                //     model:Platform,
                //     as:'platforms',
                //     attributes:['id','name'], 
                //     through: {attributes: []}
                // }
            ]
        });
            
        res.status(200).json(response);
         
    } catch (error) {
        res.status(404).send(error.message)
    }
});

module.exports = videogameRouter;
