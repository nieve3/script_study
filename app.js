const express = require('express');
const app = express();

app.use(express.static(`public`))
app.get('/top',(req,res)=>{
    //top view
    res.render('top.ejs');
});

app.get('/index',(req,res)=>{
    res.render('index.ejs')
})

app.listen(3000);