
var fs = require('fs');

module.exports = function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        fs.readFile('../server/data/user.json','utf8',(err,data)=>{
            if (err) {
                console.error(err)
                return
            }

            try{
            console.log(data);
            let users = JSON.parse(data);
            users = users.people;
            console.log(users);
              
            var customer = {};
    
            customer.valid = false;
            customer.email = '';
            customer.username = '';
            customer.age = '';
            customer.birthdate = '';
    
            for (let i = 0; i < users.length; i++) {
                if (req.body.email == users[i].email && req.body.upwd == users[i].pwd) {
                    customer.valid = true;
                    customer.email = users[i].email;
                    customer.username = users[i].username;
                    customer.age = users[i].age;
                    customer.birthdate = users[i].birthdate;
                }
            }
            res.send(customer);
            
            }catch(err){
              console.log("Error pasing the userdata");
            }
           })
    

}