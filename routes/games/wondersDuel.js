var express = require('express');
var router = express.Router();

/* GET página holaMundo. */
router.get('/', function(req, res, next) {
    res.render('games/wondersDuel', {
        title: '7 Wonders Duel',
        text: 'Tabla de Puntuaciones' });
});

module.exports = router;
