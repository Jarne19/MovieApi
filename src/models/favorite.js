const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    favoriteList: {type: []},
    },{
        collection: 'Favorites'
});

module.exports = mongoose.model('Favorites',FavoriteSchema);