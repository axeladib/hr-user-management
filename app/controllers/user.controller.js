const db = require('../models');

const users = {};

//add new user
users.addUser = (req,res) => {
    //validate all required field
    if(!req.body.username || !req.body.password || !req.body.email){
        res.send("all fields are required!");
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        employee: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
        }
    }
        
    db.User.create(user,{include: [db.Employee]})
    .then((data)=>{
        res.send(data.username+' is successfully added to db');   
    })
    .catch((err)=>{
        res.status(500).send(err.message || 'failed');
        successful = false;
    })
;}

//get all users
users.retrieveAll = (req,res) => {
    //validate user, only admin has access
    if(req.body.username !== 'admin' && req.body.password !== 'admin123'){
        res.send('only admin has access to this page');
        return;
    }

    db.User.findAll()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message || 'fail to retrieve');
    })

};
//get one user
users.retrieveUser = (req,res) => {

    db.User.findOne({
        where:{username: req.params.username},
        include: db.Employee
    })
    .then((data)=>{
        if(data){
            res.send(data);
        }
        else{
            res.status(404).send("error 404");
        }
    })
    .catch(err=>{
        res.status(500).send(err.message);
    })

};
//edit user details
users.updateUser = (req,res) => {

};
//delete one user
users.delUser = (req,res) => {

};
//delete all user
users.delAll = (req,res) => {

};

module.exports = users;