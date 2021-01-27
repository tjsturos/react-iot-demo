const list = require('./list')
const create = require('./create')
const remove = require('./delete')
const edit = require('./edit')
const getOne = require('./getOne')

module.exports = (activeConnection, queryType, data, query) => {
    return new Promise((resolve, reject) => {
        switch(queryType) {
            case 'list':
                list(activeConnection, query).then((results) => {
                    activeConnection.end()
                    resolve(results)
                })
                break
            case 'getOne':
                getOne(activeConnection, data).then((result) => {
                    activeConnection.end()
                    resolve(result)
                })
                break
            case 'create':
                create(activeConnection, data).then((createdDevice) => {
                    activeConnection.end()
                    resolve(createdDevice)
                })
                break
            case 'edit':
                edit(activeConnection, data).then((result) => {
                    activeConnection.end()
                    resolve(result)
                })
                break
            case 'delete':
                remove(activeConnection, data).then((wasRemoved) => {
                    activeConnection.end()
                    resolve(wasRemoved)
                })
                break
            default:
                reject('method not found')
        }
    })
}