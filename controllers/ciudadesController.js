const path = require('path');
const db = require('../database/models');

const Ciudades = db.Ciudad;

const ciudadesController = {
        todasCiudades: async (req, res) => {
            await Ciudades.findAll()
                                    .then(ciudad => {
                                        console.log(ciudad);
                                        res.json(ciudad);
                                    })
                                    .catch(error => console.log(error))
        },
        crearCiudad: async (req, res) => {
            console.log(req.body); // <= {id: number, nombre: text}
        
            console.log(req.body);
            
            await Ciudades.findOne({where: {nombre: req.body.nombre}})
                            .then(async ciudad => {
                                if(ciudad){
                                    await Ciudades.update({interes: ciudad.interes+1},{where: {id: ciudad.id}})
                                    .then(() => {
                                        console.log("El interes ha aumentado");
                                        res.json({estado: "Ciudad/lugar existente"});
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        res.json({estado: "Error"});
                                    });
                                }else{
                                    await Ciudades.create(req.body)
                                                .then(resultado => {
                                                    console.log(resultado);
                                                    res.json({estado: 'Ciudad/lugar creado'});
                                                })
                                                .catch(error => {
                                                    console.log(error);
                                                    res.json({estado: 'Error'});
                                                });
                                }
                                
                                console.log(ciudad);
                                res.json(ciudad);
                            })
                            .catch(error => {
                                console.log(error);
                                res.json({estado: "Error"});
                            });

        },
        actualizarCiudad: async (req, res) => {
            console.log(req.body);
            
            await Ciudades.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                console.log("Ciudad/lugar actualizada");
                res.json({estado: "Ciudad/lugar actualizada"});
            })
            .catch(error => {
                console.log(error);
                res.json({estado: "Error"});
            });
        },
        borrarCiudad: async (req, res) => {
            console.log(req.body);
            
            await Ciudades.destroy({
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                console.log("Ciudad eliminada");
                res.json({estado: "Ciudad/lugar eliminado"});
            })
            .catch(error => {
                console.log(error);
                res.json({estado: "Error"});
            });
        },
        buscarCiudad: async (req, res) => {
            console.log(req.body);
            
            await Ciudades.findAll({where: req.body})
                            .then(ciudad => {
                                ciudad.forEach(async registro => {
                                    await Ciudades.update({interes: registro.interes+1},{where: {id: registro.id}})
                                .then(() => {
                                    console.log("El interes ha aumentado");
                                })
                                .catch(error => {
                                    console.log(error);
                                    res.json({estado: "Error"});
                                });
                                });
                                console.log(ciudad);
                                res.json(ciudad);
                            })
                            .catch(error => {
                                console.log(error);
                                res.json({estado: "Ciudad/lugar no existente"});
                            });
        }
}

module.exports = ciudadesController;