let ModelRouter = require('express').Router()

ModelRouter.route('/')
    .get(require('./list'))

ModelRouter.route('/:id')
    .get(require('./getOne'))

module.exports = ModelRouter