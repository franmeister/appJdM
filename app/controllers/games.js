// Dependencies
var mongoose = require('mongoose');
var Game = require('../models/game.js');

//GET - Return all registers
exports.findAll = function(req, res) {
    Game.find(function(err, games) {
        if(err) return res.status(500).send(err.message);
        res.status(200).json(games);
    });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if(err) return res.status(500).send(err.message);
        res.status(200).json(game);
    });
};

//POST - Insert a new register
exports.add = function(req, res) {
    var game = new Game({
        name: req.body.name,
        status: req.body.status
    });
    game.save(function(err, game) {
        if(err) return res.status(500).send(err.message);
        res.status(200).json(game);
    });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
    game.findById(req.params.id, function(err, game) {
        var game = new Game({
            name: req.body.name,
            status: req.body.status
        });
        game.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).json(game);
        });
    });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
    Game.findById(req.params.id, function(err, game) {
        game.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};