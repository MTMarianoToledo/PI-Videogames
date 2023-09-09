const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genre', {
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
      });
    };
    
    

