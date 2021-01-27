const list = require('./list')
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
            default:
                reject('method not found')
        }
    })
}