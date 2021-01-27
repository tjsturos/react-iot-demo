module.exports = function(connection, sort, filter) {
  return new Promise((resolve, reject) => {
    if (typeof sort.id == Array) {
      query = `SELECT * FROM models WHERE id IN (${sort.id.join(',')}) AND removed IS NULL ORDER BY id ${sort._order || 'ASC'}`
    } else if (typeof sort.id == String) {
      query = `SELECT * FROM models WHERE id=${sort.id} AND removed IS NULL ORDER BY id ${sort._order || 'ASC'}`
    } else {
      const maxResults = Number(sort._end) - Number(sort._start)
      query = `SELECT * FROM models WHERE removed IS NULL ORDER BY id ${sort._order || 'ASC'}`
    }
    connection.query(
      query,
      function(error, results) {
        if (error) {
          reject(error)
        }
        if (typeof sort.id == String) {
          resolve(results[0])
        }
        resolve(results)
      }
    )
  })
}
