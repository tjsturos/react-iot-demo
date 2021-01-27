module.exports = function (connection, id) {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM devices WHERE id = ${id}`,
            function(error, results, fields) {
                if (error) {
                    reject(error)
                }
                if (results.length) {
                   resolve(results[0])
                } else {
                    reject('Something went funny!')
                }

            }
        )
    })
}