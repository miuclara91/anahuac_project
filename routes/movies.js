const router = require('express').Router();

const {createMovie, readIdMovie, deleteMovie, updateMovie} = require('../controllers/movies');


router.get('/:id', readIdMovie);
router.post('/',createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;