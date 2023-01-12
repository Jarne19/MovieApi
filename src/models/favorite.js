const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    favoriteMovieName: {type: String},
    },{
        collection: 'Favorites'
});

module.exports = mongoose.model('Favorites',FavoriteSchema);