var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function firstLoad() {
	body.style.background = "linear-gradient(to right, " 
	+  color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.innerHTML = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+  color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	console.log("randomColor")
	color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	setGradient();
}

body.onload = firstLoad();

button.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);  
