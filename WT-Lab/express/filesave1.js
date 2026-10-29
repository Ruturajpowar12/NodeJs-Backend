const express = require('express');
const bodyParser = require('body-parser');
const mysql =  require('mysql')
const fs =  require('fs')
const path =  require('path');
const { log } = require('console');


const app = express()
const port = 3001

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'filedb',
    password:''
})

con.connect((err)=>{
  if(err) throw err
  console.log("Database is connected!");
})

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'))



app.post('/save', (req, res) => {
  const {filename,content}= req.body;
  const filePath = path.join(__dirname,"public",filename)

  fs.writeFile(filePath,content,(err)=>{
    if(err) throw err
    res.send(`File ${filename} saved successfully!`)
  })

   con.query('INSERT INTO filedata (filename,content) VALUES (?,?)',[filename,content],(err,data)=>{
    if(err) throw err
    console.log(data)
  })

})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})