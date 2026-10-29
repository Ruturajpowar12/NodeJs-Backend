var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'emp',
    password:''
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connect to Database!");
    con.query('CREATE TABLE emplinfo (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))', function(err, result){
        if(err) throw err;
        console.log("Table Created!");
    })
});
