const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
// const port = process.env.PORT || 8000

const static_path = path.join(__dirname,'../public')

const templatepartial = path.join(__dirname,'../templates/partials')
const templateview = path.join(__dirname,'../templates/views')
app.set('views',templateview)
app.set('view engine','hbs')

hbs.registerPartials(templatepartial)
app.use(express.static(static_path))
app.get('/',(req,res)=>{
    res.render('index')

})
app.get('/about',(req,res)=>{
    res.send('Welcome to our about page')

})
app.get('/weather',(req,res)=>{
    res.send('Welcome to our weather page')

})
app.get('*',(req,res)=>{
    res.send('ERROR 404 NOT FOUND')

})

app.listen(8000,()=>{
    console.log(`listening to port`)
})