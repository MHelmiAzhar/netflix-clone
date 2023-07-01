const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { verifyToken } = require('../verifyToken')

//Update user
router.post('/:id', verifyToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

//Delete
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg: 'USer has been deleted',
      data: deletedUser
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

//get user by ud
router.get('/find/:id', async (req, res) => {
  try {
    const userById = await User.findById(req.params.id)
    const { password, ...other } = userById._doc
    res.status(200).json({
      data: other
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

//get all user
router.get('/', verifyToken, async (req, res) => {
  const query = req.query.new
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find()
      res.status(200).json({
        data: users
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
})

//get stats
router.get('/stats', async (req, res) => {
  const today = new Date()
  const latYear = today.setFullYear(today.setFullYear() - 1)

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 }
        }
      }
    ])
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
