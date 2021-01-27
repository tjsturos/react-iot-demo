let dbconnect = require('../../database/connect')

module.exports = (req, res) => {
    dbconnect(req.model, 'create', req.body).then((device) => {
        console.log('device', device)
        if (!device) {
            res.status(404)
        }
        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.json(device)
    })
}