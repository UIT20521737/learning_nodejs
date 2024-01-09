const user = require('../controllers/users')
const router = require('express').Router()

router.get('/', user.getUsers)
module.exports = router