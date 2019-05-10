const express = require('express');
const app =  express();
const exphbs =  require('express-handlebars');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


app.use('/api/category',require('./routes/api/category'));

app.engine('.hbs', exphbs({extname:'.hbs',defaultLayout: 'main'}));
app.set('view engine','.hbs');

app.get('/', (req,res)=>{
        res.render('home',{title:'Post A Category',title2:'Post a Product'})
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`connected to port: ${PORT}`));
