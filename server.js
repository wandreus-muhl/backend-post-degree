import app from './src/app.js'

const port = process.env.API_PORT || 3000
app.listen(port, () => console.log(`Server is running! <http://localhost:${port}>`))
