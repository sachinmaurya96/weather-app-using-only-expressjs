const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
app.use(express.static('public'));


//public static path
const template_path = path.join(__dirname,'../template/views')
const partials_path = path.join(__dirname,'../template/partials')
// app.use(express.static(staticpath))
app.set('view engine','hbs')
app.set('views', template_path);
hbs.registerPartials(partials_path)


//routing
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(4000)