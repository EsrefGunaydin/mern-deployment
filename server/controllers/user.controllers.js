const { User } = require('../models/user.models');
const jwt = require("jsonwebtoken");
const myFirstSecret = process.env.FIRST_SECRET_KEY;
const bcrypt = require('bcrypt');

module.exports = {
    
register: (req, res) => {
    User.create(req.body)
        .then(user => {
        const userToken = jwt.sign({
                  id: user._id
        }, myFirstSecret);
       
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
                })
            .json({ message: "success!", data: user });
          })
          .catch(err => res.json({ message: "error", data: err }));
      },

login: async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
 
    if(user === null) {
 
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
 
    if(!correctPassword) {
    
        return res.sendStatus(400);
    }
 
    const userToken = jwt.sign({
        id: user._id
    }, myFirstSecret);
 
    res.cookie("usertoken", userToken, myFirstSecret, {
            httpOnly: true
        })
        .json({ message: "success!" })
        .catch(err => res.json({ message: "error", data: err }));
},

logout: (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
},
 
// Get All Users - Read
 allUsers: (req,res) => {
    User.find().sort({"name":1})
        .then(data => res.json({ message: "success", data: data }))
        .catch(err => res.json({ message: "error", data: err }));
},

}