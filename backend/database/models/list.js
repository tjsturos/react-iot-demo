module.exports = function(connection, sort, filter) {
  console.log(sort)
  return new Promise((resolve, reject) => {
    if (typeof sort.id == Array) {
      query = `SELECT * FROM models WHERE id IN (${sort.id.join(',')}) AND removed IS NULL ORDER BY id ${sort._order || 'ASC'}`
    } else if (typeof sort.id == 'string') {
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

        resolve(results)
      }
    )
  })
}
