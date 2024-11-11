/*
    Event routes
    /api/events
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const { isDate } = require('../helpers/isDate');

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');

router.use(validarJWT);

// todas tienen que pasar por la validación del jwt
// obtener eventos
router.get('/', getEventos);

// crear un nuevo evento
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha inicio es obligatoria').custom(isDate),
    check('end', 'Fecha final es obligatoria').custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// actualizar evento
router.put('/:id', actualizarEvento);

// borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
