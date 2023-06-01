const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/social-med-mern-db')

app.post('/api/register', async (req, res)=> {
    console.log(req.body)

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        })
        res.json({status: 'ok'})

    } catch (error) {
        res.json({status: 'error', error: 'Duplicate Email'})
        
    }

})

app.post('/api/login', async (req, res)=> {
    console.log(req.body)

    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,

        })

        if(user){
            res.json({status: 'ok', user: true})
            
        }
        else{
            res.json({status: 'error', user: false})

        }

    } catch (error) {
        res.json({status: 'error', error: 'Duplicate Email'})
        
    }

})

app.listen(5000, ()=> {
    console.log('Server is runnig on 5000 port');
})  