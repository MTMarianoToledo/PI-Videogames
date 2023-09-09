const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, // O el tipo de dato que prefieras para las ID
      defaultValue: DataTypes.UUIDV4, // Genera un UUID único para cada registro
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    plataformas: {
      type: DataTypes.STRING, // Puedes ajustar el tipo de dato según tus necesidades
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING, // Ruta o URL de la imagen
      allowNull: false,
    },
    fechaLanzamiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT, // O el tipo de dato adecuado para el rating
      allowNull: false,
    },
  });
};
  
 