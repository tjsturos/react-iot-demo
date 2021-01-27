let dbconnect = require('../../database/connect')

module.exports = (req, res) => {
    dbconnect(req.model, 'edit', req.body).then((device) => {
        if (!device) {
            res.status(404)
        }
        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.json({json: device})
    })
}