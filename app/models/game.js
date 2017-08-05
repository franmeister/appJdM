var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({ 
    name: { type: String, required: true },
    status: { type: String, required: true },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
gameSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('Game', gameSchema);