global.persons = [];

// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

// First route
app.get('/', (req, res) => {
    res.json({ message: 'Recomendador de Amigos!' })
})
// Starting server
const port = 3000
app.listen(port,() => { console.log(`Servidor rodando na porta ${port}`) })