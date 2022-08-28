import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Tá on ihaaa!!!'))
app.get('/:number', (req, res) => res.send(`You asked for number ${req.params.number}`))

const port = process.env.API_PORT || 3000
app.listen(port, () => console.log(`Server is running! http://localhost:${port}`))
