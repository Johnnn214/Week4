
var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json()) ;

app.use(express.static(__dirname + '../src')); 


app.post('/api/auth', function (req, res) {
    let users = [{'email':'john@com.au','password':'123'},{'email':'john@com.au','password':'123'},{'email':'john@com.au','password':'123'}]
    if (!req.body){
        return res.sendStatus(400)
    }
    console.log(req.body);
    var user1 = {};
    user1.email = req.body.email;
    user1.password = req.body.password;
    user1.valid = false;
    for (let i=0; i<users.length; i++){
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            user1.valid = true;
        }
    }
    res.send(user1);

  });
  
    let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
    });
