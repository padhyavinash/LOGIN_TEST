const express = require('express');
const router = express.Router();

const User = require('../models/userss');

/*
//TESTING
router.get('/',(req, res, next)=>{
    res.send('TESTING HOME PAGE');
});
*/
/*
//retrieving contacts
router.get('/contacts',(req, res, next)=>{
    res.send('Retrieving the contact list');
});
*/


//retrieving contacts of specific id -- TESTING
/*
router.get('/login/:uname/:pwd',(req, res, next)=>{
    User.find({userName: req.params.uname,
        pwd: req.params.pwd},function(err,users){
        res.json(users);
    })
});
*/
router.post('/login/check',(req, res, next)=>{
    console.log('DB_Username: '+req.body.userName);
    console.log('DB_Password: '+req.body.pwd);
    User.findOne({userName: req.body.userName,
        pwd: req.body.pwd},function(err,user){
            if (err) throw err;
            if (!user){
//                res.json({success:false, message:'Authentication failed! User not found.'});
                    res.json({success:false});
            }
            else if(user){
                    res.json(user);
              //res.json({success: true});       
            }
           // res.json({success: true});       
    })
});

//retrieving contacts
router.get('/login',(req, res, next)=>{
    User.find(function(err,users){
        res.json(users);
    })
});


//adding contacts
router.post('/adduser',(req, res, next)=>{
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        userType: req.body.userType,
        userName: req.body.userName,
        pwd: req.body.pwd
    });

    newUser.save((err,user)=>{
        if(err)
        {
            res.json({msg:'Failed to add user'});
        }
        else
        {
            res.json({msg:'User added successfully'});
        }
    });

});

//deleting contacts
router.delete('/deleteuser/:id',(req, res, next)=>{
    User.remove({_id: req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = router;