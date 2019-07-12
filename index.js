const express = require('express') // import express library
const app = express() // initialize express app

// setup a `/` endpoint
app.get('/', (req, res, next) => res.send('Welcome!'))

// setup a `/hello` endpoint
app.get('/hello', (request, response, next) => {
  response.send({
    message: 'Hello world!'
  })
})

// setup server to listen on port :3000
app.listen(4000, () => console.log('Express server is ready on localhost:3000'))
