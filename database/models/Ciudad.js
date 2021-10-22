module.exports=(sequelize, dataTypes) => {
    let alias ='Ciudad'
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      pais: {
        type: dataTypes.STRING
      },
      descripcion: {
        type: dataTypes.STRING
      },
      interes: {
        type: dataTypes.INTEGER
      }
    }
    let config ={
      tableName: 'ciudades',
      timestamps: false
    }
    const Ciudad = sequelize.define(alias, cols, config)
  
    return Ciudad;
  }