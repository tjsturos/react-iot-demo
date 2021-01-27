const getOne = require('./getOne')
module.exports = function (connection, id) {
  return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE devices SET removed = NOW() WHERE id = ${id}`,
        function(error, results, fields) {
          if (error) {
            reject(error)
          }
          getOne(connection, id).then((result) => {
            resolve(result)
          })
        }
      )
  })
}