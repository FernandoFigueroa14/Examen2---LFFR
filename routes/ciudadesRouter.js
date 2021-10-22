const router = require('express').Router();
const ciudadesController = require('../controllers/ciudadesController');

router.get('/todasCiudades', ciudadesController.todasCiudades);
router.post('/agregarCiudad', ciudadesController.crearCiudad);
router.post('/actualizarCiudad', ciudadesController.actualizarCiudad);
router.post('/borrarCiudad', ciudadesController.borrarCiudad);
router.post('/buscarCiudad', ciudadesController.buscarCiudad);

module.exports = router;