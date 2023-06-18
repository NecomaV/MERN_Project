const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

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
            const token  = jwt.sign({
                name: user.name,
                email: user.email
            }, 'secret123')

            return res.json({status: 'ok', user: token})
            
        }
        else{
            return res.json({status: 'error', user: false})

        }

    } catch (error) {
        res.json({status: 'error', error: 'Duplicate Email'})
        
    }

})

app.get('/api/dashboard', async (req, res)=> {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token,'secret123')
        const email = decoded.email
        const user = await User.findOne({email: email})

        return res.json({status : 'ok', quote: user.quote})
    }
    catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'invalid token get'})
    }

})

app.post('/api/dashboard', async (req, res)=> {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        await User.updateOne(
            {email: email},
            {$set: {quote: req.body.quote}})

        return res.json ({status : 'ok'})
    }
    catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'invalid token post'})
        
    }

})


app.listen(5000, ()=> {
    console.log('Server is runnig on 5000 port');
})  