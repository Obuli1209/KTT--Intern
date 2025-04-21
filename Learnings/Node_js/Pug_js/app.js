// Normal HTML
// building simple, static websites.
// don’t want to set up a compilation process.
// prefer working with standard web technologies.


// Pug HTML
// building dynamic, server-side rendered websites (e.g., with Node.js).
// need cleaner syntax for large and complex HTML pages.


// compileFile() -> means compile into a javascript function
// use multiple times with different data.
// used in dashboard, admin panels
const pug = require('pug');
const compiledFunction = pug.compileFile('template.pug');
console.log(compiledFunction({name:'Obuli'}));



// renderFile() -> compiles and render in one step with provided data
// need HTML once
// used in static pages like about, contact, terms and condition , personl portfolio.
console.log(pug.renderFile('template.pug',{
    name:'Deva'
}));

let res = pug.renderFile('template.pug',{name:"kumar"});
console.log(res);

console.log(pug.render('p Hello world!'));
console.log(pug.render('pHello world!'));

console.log(pug.render('h1 Hello world!'));
console.log(pug.render('h1Hello world!'));

console.log(pug.render('Hello world!'));


