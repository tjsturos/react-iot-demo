const getOne = require('./getOne')

module.exports = function (connection, data) {
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE devices
                SET name = '${data.name}',
                    serial = '${data.serial}',
                    model_id = ${data.model_id}
                    WHERE id = ${data.id}`,
            function(error, result, fields) {
                if (error) {
                    reject(error)
                }
                getOne(connection, data.id).then((result) => {
                    resolve(result)
                })
            }
        )
    })
}
