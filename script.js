var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var random = document.querySelector(".random");
var randomColor1;
var randomColor2;

body.style.background = "linear-gradient(to right, red , yellow)";

h3.innerHTML = body.style.background + ";";

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
}

body.addEventListener("input", setGradient);

random.addEventListener("click", function(){
	randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	body.style.background = 
	"linear-gradient(to right, " 
	+ "#" + randomColor1 
	+ ", " 
	+ "#" + randomColor2 
	+ ")";

	h3.textContent = body.style.background + ";";
})