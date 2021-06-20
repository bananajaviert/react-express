import express from 'express'
import router from './routes/albums.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use('/api', router)

app.listen(PORT, () => {
    return console.log(`Listening on port ${PORT}`)
})