const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    favoriteMovie: {type: []},
    },{
        collection: 'Favorites'
});

module.exports = mongoose.model('Favorites',FavoriteSchema);