const express = require('express') // import express library
const app = express() // initialize express app

// setup a `/` endpoint
app.get('/', (req, res, next) => res.send('Welcome!'))

// setup a `/hello` endpoint
app.get('/hello', (req, res, next) => {
  res.send({
    message: 'Hello world!'
  })
})

// setup server to listen on port :3000
app.listen(3000, () => console.log('Express server is ready on localhost:3000'))
