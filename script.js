// variables
// First getting all important elements

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')


// creating array of quote

const quotes = [{
    quote: "'To live is the rarest thing in the world. Most people exist, that is all.'",
    person: 'Oscar Wilde'
},{
    quote: "'That it will never come again is what makes life so sweet.'",
    person: " Emily Dickinson"
},{
    quote:"'It is never too late to be what you might have been.'",
    person: "George Eliot"
},{
    quote: "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' ", 
    person: " Ralph Waldo"
},{
    quote: "'All the world's a stage, and all the men and women merely players.'",
    person: "William Shakespeare"
},{
    quote: "'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.'",
    person: " Voltaire"
},{
    quote: "'Life is tough my darling, but so are you.'",
    person: "Stephanie Bennett Henry"
},{
    quote: "'Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.'",
    person: "William Faulkner"
},{
    quote: "'To produce a mighty book, you must choose a mighty theme.'",
    person: "Herman Melville"
},{
    quote: "'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.'",
    person: " John Steinbeck"
},{
    quote: "'The Six Golden Rules of Writing: Read, read, read, and write, write, write.'",
    person: "Ernest Gaines"
}
];

btn.addEventListener('click', function(){
let random = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})