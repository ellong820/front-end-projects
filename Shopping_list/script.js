var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

//create new list Item
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleDone);
	ul.appendChild(li);
	input.value = "";

//create new delte button
	var delBtn = document.createElement("button");	
	delBtn.classList.add("delete");
	delBtn.textContent = "delete";
	li.appendChild(delBtn);

// toggle line through on click
	function toggleDone(){
		li.classList.toggle("done");
	}

// delete when click on delBtn
	var btns = document.querySelectorAll(".delete");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click",function(e){
		var li = e.target.parentElement;
		li.parentNode.removeChild(li)
		});
	}
}
// add item on click
function addClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// add item on keypress
function addKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addClick);
input.addEventListener("keypress", addKeyPress);

