const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

function createMovie(req, res, next){
    const movie = new Movie(req.body);
    movie.save().then(movie => {
        res.status(200).send(movie)
    }).catch(next);
}

function readIdMovie(req, res){
   
    Movie.findById(req.params.id)
    .then(movie => {
        
        if(!movie){
            return res.sendStatus(400)
        }
    
        return res.json(movie.publicData())
    }).catch(err => res.send(err))
}

function updateMovie(req, res){
    Movie.findById(req.params.id)
    .then(movie => {
        if(!movie) return res.sendStatus(400);

        let newInfo = req.body;

        if(typeof newInfo.title !== "undefined"){
            movie.title = newInfo.title;
        }

        if(typeof newInfo.year !== "undefined"){
            movie.year = newInfo.year;
        }

        if(typeof newInfo.director !== "undefined"){
            movie.director = newInfo.director;
        }

        movie.saved()
        .then(updated => {
            res.status(201).json(updated.publicData());
        }).catch(next);
    })
    .catch(next);
}

function deleteMovie (req, res){
    Movie.findByIdAndDelete(req.params.id)
    .then(r => {
        res.status(200).send(`La película ${r.title} ha sido eliminada`)
    })
    .catch(next);
}

module.exports = {
    createMovie,
    readIdMovie,
    deleteMovie,
    updateMovie
}