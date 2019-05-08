const express = require('express');
const app =  express();
const exphbs =  require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/category',require('./routes/api/category'));

app.engine('.hbs', exphbs({extname:'.hbs',defaultLayout: 'main'}));
app.set('view engine','.hbs');

app.get('/', (req,res)=>{
        res.render('home',{title:'Post A Category'})
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`connected to port: ${PORT}`));
