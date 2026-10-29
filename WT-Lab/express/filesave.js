const express = require('express');
const bodyParser = require('body-parser');
const fs =  require('fs')
const path =  require('path')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'))

app.post('/save', (req, res) => {
  const {filename,content}= req.body;
  const filePath = path.join(__dirname,"public",filename)

  fs.writeFile(filePath,content,(err)=>{
    if(err) throw err

    res.send(`File ${filename} saved successfully!`)
  })
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})