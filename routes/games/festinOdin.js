var express = require('express');
var router = express.Router();

/* GET página holaMundo. */
router.get('/', function(req, res, next) {
    res.render('games/festinOdin', {
        title: 'El Banquete de Odín',
        text: 'Tabla de Puntuaciones' });
});

module.exports = router;
