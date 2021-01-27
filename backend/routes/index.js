/**
 * routes
 */
module.exports = function(app) {
  // required for allowing localhost app to communicate to receive this server's responses
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Total-Count");
    res.header("Access-Control-Expose-Headers", "X-Total-Count, Content-Range")
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    next();
  });

  /**
   * the routes use this to determine which database resource file
   * to use
   */
  app.use((req, res, next) => {
    req.model = req.originalUrl.split('?')[0].split('/')[1]
    next()
  })

  // logging requests
  app.use((req, res, next) => {
    console.debug(req.method, req.originalUrl, req.body)
    next()
  })

  app.use('/devices', require('./devices'))
  app.use('/models', require('./models'))
}



