let dbconnect = require('../../database/connect')

module.exports = (req, res) => {
    dbconnect(req.model, 'getOne', req.params.id).then((device) => {
        if (!device) {
            res.status(404)
        }
        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.json(device)
    })
}
