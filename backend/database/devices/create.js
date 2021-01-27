const getOne = require('./getOne')

module.exports = function (connection, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO devices (name, serial, model) VALUES ('${data.name}', '${data.serial}', ${data.model})`, function(error, result, fields) {

      if (error || !result.insertId) {
        reject(error)
      }
      getOne(connection, result.insertId).then((device) => {
        resolve(device)
      })
    })
  })
}
