const path = require('path');
const hbs = require('hbs');
const express =require('express');
const app = express();
const port = process.env.port || 3300

//Define config paths
const publicDirectoryPath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../templates')
const partialPath = path.join(__dirname, '../templates/partials')
console.log(templatesPath);
//Define handle bars
app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialPath);


app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    // res.send('Hello express');
    res.render('index', {
        name:'Raju',
        designation: 'Sr Software Engineer'
    }); //index.html file name
});

app.get('/help', (req, res)=>{
    res.render('help', [{
        name:'lokesh',
        designation: 'Sr Software Engineer'
    },{
        name: 'Somesh',
        designation: 'Web Developer'
    }]);
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        name:'lokesh',
        designation: 'Sr Software Engineer'
    })
});

app.get('/device', (req, res)=>{
    res.render('device',{
        name:'lokesh',
        designation: 'Sr Software Engineer'
    })
});


// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Andrew Mead',
//         errorMessage: 'Page not found.'
//     })
// })

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: [{
            name: "Breads",
            quantity: 1
        }]
    })
})

app.get('/about1', (req, res)=>{
    res.send('<h1>LOKESH</h1>')
});


app.listen(port, () =>{
    console.log('Server is up on port '+ port);
});