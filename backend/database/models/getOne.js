module.exports = function (connection, id) {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM models WHERE id = ${id}`,
            function(error, results, fields) {
                if (error) {
                    reject(error)
                }
                resolve(results[0])
            }
        )
    })
}
