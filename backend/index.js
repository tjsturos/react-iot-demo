const express = require('express')

const app = express()
app.use(express.json())
const port = 3001

require('./routes')(app)

app.listen(port, () => {
  console.log(`React-IoT Demo app is running on http://localhost:${port}`)
})

