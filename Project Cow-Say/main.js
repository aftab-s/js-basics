//type and execute "npm init" in terminal
//import cowsay module --> npm i cowsay
//import inspirational quotes --> npm i inspirational-quotes

const Quote = require('inspirational-quotes');        //importing Inspirational Quotes


//console.log(Quote.getQuote()); // returns quote (text and author)
//console.log(Quote.getQuote({ author: false })); // return quote without author
//console.log(Quote.getRandomQuote()); // return any random quote

//console.log(Quote.getQuote({ author : false}));

var cowsay = require("cowsay");                         //importing Cowsay

console.log(cowsay.say({
    text : Quote.getRandomQuote(),
    e : "oO",
    T : "U "
}));