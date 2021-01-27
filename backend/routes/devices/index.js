let DeviceRouter = require('express').Router()

DeviceRouter.route('/:id')
    .get(require('./getOne'))
    .delete(require('./delete'))
    .put(require('./edit'))

DeviceRouter.route('/')
    .get(require('./list'))
    .post(require('./create'))


module.exports = DeviceRouter