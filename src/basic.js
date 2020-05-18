// const greeter = (name='Lokesh', age) => {
//     console.log('hello '+name)
// };
// greeter('Vaishnav');
// greeter()
const fetch = require('cross-fetch'); //>npm install --save cross-fetch

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data);
    });
});