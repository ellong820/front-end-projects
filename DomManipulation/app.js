
// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// for(var i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }

// // or

// Array.from(books).forEach(function(book) {
//     console.log(book);
// });

var h2 = document.querySelector("#book-list h2")

h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);

})

// click delete button to delete li
var btns = document.querySelectorAll("#book-list .delete");

// delete for each method
btns.forEach(function(btns){
    btns.addEventListener('click',function(e){
        
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
});

// delete for loop method
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click',function(e){

//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     });
// };