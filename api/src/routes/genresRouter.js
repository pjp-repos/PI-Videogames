// - Requires ---------------------------------
require('dotenv').config();
const express = require('express');
const axios = require('axios');
// const models = require("../models/Videogame");

const {API_KEY} = process.env;

const genresRouter = express.Router();


genresRouter.get('/', async(req,res)=>{    
    try {
        const axiosGet = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        
        const data = axiosGet.data.results;
        res.status(200).json(data); 

    } catch (error) {
        res.status(404).send(`Ocurrio el error: ${error.toString()}`)
    }    
})


module.exports = genresRouter;

