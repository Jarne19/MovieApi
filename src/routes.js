const express = require('express');
const router = express.Router();
const Favorites = require('./models/favorite');



router.get('/', (req, res)=> {
    console.log('/ route called');
    res.send('<h1>Welcome to Movie Api, these are the available routes:</h1>'+
    '<h2>/</h2>'+
    'Where you are right now'+
    '<hr/>'+
    '<h2>/favorites</h2>'+
    'Returns all favorites in the database using .find()'+
    '<hr/>');
})

router.get('/Favorites', async (req,res) => {
    console.log('/favorites route called');
    try{
        res.json(await Favorites.find());
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/favorites/:id', async (req,res)=>{
    console.log('/favorites/:id route called');
    try{
        res.send(await Favorites.findById(req.params.id));
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/favorites/create', async (req,res)=>{
    console.log('/favorites/create route called');
    try{
        res.send(await Favorites.create(req.body));
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/favorites/update/:id', async (req,res)=>{
    console.log('/favorites/update/:id route called');
    try{
        res.send(await Favorites.findByIdAndUpdate(req.params.id,{$set: req.body}));
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/favorites/delete/:id', async (req,res)=>{
    console.log('/favorites/delete/:id route called');
    try{
        res.send(await Favorites.findByIdAndDelete(req.params.id));
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;