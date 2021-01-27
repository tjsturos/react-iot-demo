const mysql = require('mysql')
const deviceQuery = require('./devices')
const modelQuery = require('./models')

const dbconnect = function(model, queryType, data = null, query = null) {
    return new Promise((resolve, reject) => {
        try {
            switch(model) {
                case 'devices':
                    deviceQuery(connect(), queryType, data, query).then((results) => {
                        resolve(results)
                    })
                    break
                case 'models':
                    modelQuery(connect(), queryType, data, query).then((results) => {
                        resolve(results)
                    })
                    break
                default:
                    reject('Model is not defined')
            }
        } catch (error) {
            reject("Database error", error)
        }
    })
}

const connect = function() {
    try {
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'react_iot_demo'
        })
        connection.connect()
        return connection
      } catch (error) {
        console.log("Could not connect to the database!")
      }
}

module.exports = dbconnect