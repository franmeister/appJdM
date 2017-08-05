// Dependencies
var gameCtrl = require('./controllers/games.js');

// Opens App Routes
module.exports = function(express,app) {

    // HOME
    app.get('/', function(req, res, next) {
        res.sendfile('./public/index.html');
    });

    //API
    var api = express.Router();
    //Games
    api.route('/games') 
        .get(gameCtrl.findAll)
        .post(gameCtrl.add);
    api.route('/games/:id') 
        .get(gameCtrl.findById)
        .put(gameCtrl.update)
        .delete(gameCtrl.delete);
    app.use('/api/v1/', api);

};