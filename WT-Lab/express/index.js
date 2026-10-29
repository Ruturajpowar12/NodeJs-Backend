const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Welcome to Home page!")
})
app.get('/faculty', (req, res) => {
  res.send('Welcome to faculty page!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})