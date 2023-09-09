const { Router } = require("express");
const { getVideoGames, postVideoGames } = require("../controllers/videogames");

const videoGameRouter = Router()

videoGameRouter.get('/', async (req, res) => {
    const videogames =await getVideoGames()
    res.json({videogames})
})

videoGameRouter.post('/', async (req, res) => {
    const {nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating} = req.body
    const videogames =await postVideoGames({nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating})
    res.json({videogames})
})

module.exports = videoGameRouter