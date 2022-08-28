const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Tá on ihaaaaaaaaaaaaaaaa!!!!!!!!!!'))
app.get('/:number', (req, res) => res.send(`You asked for number ${req.params.number}`))

const port = 3000
app.listen(port, () => console.log(`Server is running! http://localhost:${port}`))