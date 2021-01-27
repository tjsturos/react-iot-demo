const dbconnect = require('../../database/connect')

module.exports = (req, res) => {
    dbconnect(req.model, 'list', null, req.query).then((results) => {
        const count = results.length
        res.setHeader('X-Total-Count', count)
        res.setHeader('Content-Range', `devices ${req.query._start}-${req.query._end}/${count}`)

        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.json(results.filter((device, index) => {
            return index >= req.query._start && index < req.query._end
        }))
    })
}