const books =[{
    title:"Harry potter",
    author:"J.k.rolling",
    year:2007,

},
   {title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
    },
];
function logTitles(titles){
    titles.sort();
    console.log(titles);

}

function processTitles(books,callback) {
    const titles =books.map((book)=>book.title);
    callback(titles);
    
}
processTitles(books,logTitles);