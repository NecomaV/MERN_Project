const express = require('express')
const app = express()

app.get('/hello', (req, res)=> {
    res.send('hello world')
})

app.listen(5000, ()=> {
    console.log('Server is runnig on 5000 port');
})