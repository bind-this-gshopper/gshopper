const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
      return null
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
        return null
      }
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

router.get('/me', (req, res) => {
  if (req.user) {
    User.findById(req.user.id, {
      include: [{ all: true, nested: true }]
    }).then(userData => res.json(userData))
  }
})

router.use('/google', require('./google'))
