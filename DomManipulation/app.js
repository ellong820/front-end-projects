
books = document.querySelectorAll('#book-list li .name');
console.log(books);

for(var i = 0; i < books.length; i++) {
    console.log(books[i]);
}

// // or

// Array.from(books).forEach(function(book) {
//     console.log(book);
// });