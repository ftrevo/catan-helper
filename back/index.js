const dotenv = require('dotenv')
dotenv.config()

const app = require('./src/app')

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`App started on port ${process.env.BACKEND_PORT}`)
})
