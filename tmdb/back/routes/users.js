const express = require('express')
const router = express.Router()
const db = require('../db')
const User  = require('../models/User')

router.get('/', (req, res) => {
  // console.log('hola get')
  User.findAll()
  .then((users) => res.status(200).send(users))
  .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  // console.log('hola get')
  User.findOne({where: {id: req.params.id}})
  .then((user) => res.status(200).send(user))
  .catch(err => console.log(err))
})


router.post('/', (req, res) => {
  User.create(req.body)
  .then((user) => res.status(201).send(user))
  .catch(err => console.log(err))
})


module.exports = router; 