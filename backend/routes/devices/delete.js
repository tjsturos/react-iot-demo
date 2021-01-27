let dbconnect = require('../../database/connect')

module.exports = (req, res) => {
    dbconnect(req.model, 'delete', req.params.id).then((result) => {
        if (!result) {
            res.status(404)
            return
        }
        res.status(200)
        res.json(result)
    })
}