let dbconnect = require('../../database/connect')

module.exports = (req, res) => {
    dbconnect(req.model, 'getMany', req.params).then((devices) => {
        if (!device) {
            res.status(404)
        }
        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.json(devices)
    })
}
