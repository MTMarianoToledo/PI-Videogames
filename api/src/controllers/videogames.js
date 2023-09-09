const {Videogame} = require("../db.js")

const getVideoGames = async () => {
   const res = await Videogame.findAll()
   return res
}
 
const postVideoGames = async ({nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating}) => {
    const newGame = await Videogame.create({nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating})
    return newGame
}


module.exports = {getVideoGames, postVideoGames}