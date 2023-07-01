const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Register
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  try {
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

//Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    !user && res.status(401).json('User Not Found!')

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const accsessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin
        },
        process.env.SECRET_KEY,
        { expiresIn: '5d' }
      )
      const { password, ...other } = user._doc
      res.status(200).json({
        status: 'success',
        data: {
          other,
          accsessToken
        }
      })
    } else {
      return res.status(404).json({ msg: 'email or password wrong' })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
