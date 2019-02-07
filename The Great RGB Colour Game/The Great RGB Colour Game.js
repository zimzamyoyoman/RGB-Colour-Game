var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor; 
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init() {
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();

}

function setupModeButtons() {
	for (var i=0; i<modeButtons.length;i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent==="Easy") numSquares=3;
			else if (this.textContent==="Hard") numSquares=6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i=0;i<squares.length;i++) {
		//add click listeners to all the squares
		squares[i].addEventListener("click", function () {
			//get the colour of the square which is clicked
			var clickedColor=this.style.background; 
			//compare clickedColour to pickedColour
			if (clickedColor===pickedColor) {
				messageDisplay.textContent="CORRECT!";
				changeColors(clickedColor);
				h1.style.background=clickedColor;
				resetButton.textContent="Play Again?";
			}
			else {
				this.style.background="#232323";
				messageDisplay.textContent="Try Again!";
			}
		});
	}

}


function reset() {
	colors= generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	for (var i=0;i<squares.length;i++) {
		if (colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else squares[i].style.display="none";
	}
	h1.style.background="steelblue";
	messageDisplay.textContent="";

}

resetButton.addEventListener("click", function () {
	reset();
}); 



function changeColors(color) {
	for (var i=0;i<squares.length;i++) {	
	squares[i].style.background=color;
	}
} 

function pickColor() {
	var num=Math.floor(Math.random()*colors.length);
	return colors[num];
}

function generateRandomColors(num) {
	//make an array 
	var arr=[];
	//repeat num times
	for (var i=0;i<num;i++) {
		//get random color and push into array
		arr.push(randomColor()); 
	}
	//retun that array
	return arr;
} 

function randomColor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	var randomColor="rgb(" + red + ", " + green + ", " + blue + ")";
	return randomColor;
}	

