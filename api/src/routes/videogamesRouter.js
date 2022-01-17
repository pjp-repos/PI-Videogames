// - Packages ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { Op } = require('sequelize'); 

// - Models -----------------------------------
const {Game, Genre} = require("../db");
// - Settings ---------------------------------
const {API_KEY} = process.env;
// - Express router ---------------------------
const videogamesRouter = express.Router();


// [ ] GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
//===============================================================
// [ ] GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan 
// la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado
videogamesRouter.get('/', async (req,res)=>{
    
    const name = req.query.name;
    const origin = req.query.origin;
    try {
        let nameString =""
        if (name) nameString = `&search=${name}`;
        let dataApi=[];
        let dataDb=[];
        let data=[];
        if(!origin || origin==='All' || origin==='Api'){
            let page =1; 
            let next=true;
            while(page<=5 || next===false){
                console.log(page)
                const axiosGet = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}${nameString}`);
                if(axiosGet.data.hasOwnProperty("results")){
                    if(axiosGet.data.results.length>0){
                        const auxData = axiosGet.data.results.map(el=>{
                            return {
                                id: el.id,
                                name: el.name,
                                background_image: el.background_image,
                                genres: el.genres
                            }
                        });
                        dataApi = [...dataApi,...auxData];
                    }
                }
                axiosGet.data.next?page++:next===false;
            }
        };
        if (!origin || origin==='All' || origin==='Db'){
            if(name){
                const response = await Game.findAll({
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
                    ],
                    where:{
                        name:{
                            [Op.substring]:name
                        }
                    }
                });
                dataDb = response;
            }else{
                const response = await Game.findAll({
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
                    ]
                });
                dataDb = response;
            }
            
        } 
        data = [...dataDb,...dataApi];
        if(nameString!=="") data = data.slice(0,15);
        res.status(200).json(data); 
    } catch (error) {
        res.status(404).send(`Ocurrio el error: ${error.toString()}`)
    }
})


module.exports = videogamesRouter;




