const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const RouterApi = require('./routes/index')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const corsOption = {
  origin: 'http://localhost:5173'
}

app.use(cors(corsOption))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API working correctly')
})

RouterApi(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
