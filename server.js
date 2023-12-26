const express = require ("express");
const bodyParser = require("body-parser")
const app = express();

const User = require("./db")

app.listen(3000);

app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("Hello from the newly built server!")
})

app.post('/signup', async (req, res)=>{
    const existingUser = await User.findOne({username : req.body.username});

    if(!existingUser){
        const user = new User({
            username : req.body.username,
            password : req.body.password
        })
        user.save();

        res.send("user signed up successfully!")
    }else{
        res.send("user already exists!")
    }
})

app.get('/signin', async (req, res)=>{
    const input = {
        username : req.headers.username,
        password : req.headers.password
    }

    // console.log(input)

    const user = await User.findOne({username : input.username});

    if(!user){
        res.status(404).send("user not found!")
    }else{
        // console.log(user)
        // res.send("user found")
        if(input.password === user.password){
            res.send("Signin successful!")
        }else{
                res.send("Wrong password!")
        }        
    }



    
})