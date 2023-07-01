const router = require('express').Router()
const Movie = require('../models/Movie')
const { verifyToken } = require('../verifyToken')

//Create New Movie
router.post('/', verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body)
    try {
      const saveMovie = await newMovie.save()
      res.status(200).json(saveMovie)
    } catch (err) {
      res.status(500).json(err)
    }
  }
})

//Update Movie
router.post('/:id', verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const udpateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      )
      res.status(200).json({
        msg: 'Movie has been updated!',
        data: updateMovieMovie
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
})

//Delete Movie
router.delete('/:id', verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const deleteMovie = await Movie.findByIdAndDelete(req.params.id)
      res.status(200).json({
        msg: 'Movie has been deleted!',
        data: deleteMovie
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
})

//Get Movie By Id
router.get('/find/:id', verifyToken, async (req, res) => {
  try {
    const movieById = await Movie.findById(req.params.id)
    res.status(200).json({ data: movieById })
  } catch (err) {
    res.status(500).json(err)
  }
})

//Get Random Movie
router.get('/random', verifyToken, async (req, res) => {
  const type = req.query.type
  let movie
  try {
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } }
      ])
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } }
      ])
    }
    res.status(200).json({
      data: movie
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

//Get All Movie
router.get('/', verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.find()
      res.status(200).json({
        data: movie
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
})

module.exports = router
