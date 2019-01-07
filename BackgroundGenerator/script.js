var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

// gradient inputs
function setGradient() {
	body.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ',' 
	+ color2.value 
	+ ')';

	css.textContent = body.style.background + ';';
}

// random gradient chooser
function change () {   
	var random1 = Math.floor(Math.random() * 256);
	var random2 = Math.floor(Math.random() * 256);
	var random3 = Math.floor(Math.random() * 256);
	var grad1 = 'rgb('+ random1 + ',' +  random2 +',' + random3 +')';
	var random4 = Math.floor(Math.random() * 256);
	var random5 = Math.floor(Math.random() * 256);
	var random6 = Math.floor(Math.random() * 256);
	var grad2 = 'rgb('+ random4 + ',' +  random5 +',' + random6 +')';
	body.style.background = 
	'linear-gradient(to right, ' 
	+ grad1 
	+ ',' 
	+ grad2 
	+ ')';
	css.textContent = body.style.background + ';';
}



color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
// on click, change random background color
random.addEventListener('click', change);





//rgb background generator
// function change () {   
// 	var random1=Math.floor(Math.random() * 256);
// 	var random2=Math.floor(Math.random() * 256);
// 	var random3=Math.floor(Math.random() * 256);
// 	body.style.background = 'rgb('+ random1 + ',' +  random2 +',' + random3 +')';
// 	css.textContent = body.style.background + ';';
// }

