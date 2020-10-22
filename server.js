const express = require('express');

const hostname= 'localhost';
const port = 5001;

const app = express();

const user= {item:'Pollo Taco', price:6.50}

app.use(express.static('client/build'))
app.use('/owner',express.static('admin-client'))
app.use('/images',express.static(__dirname+'/images/'))


app.use('/menu',(req, res)=>{
    res.statusCode = 200;
    res.end(JSON.stringify(user))
})

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})