var colors = generateRandomColors(6);

var messageDisplay = document.getElementById("message")
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var titleSpan = document.getElementById("titleSpan");
titleSpan.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	titleSpan.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	resetButton.textContent = "New Colors";
	h1.style.background = "#232323";
})

for (var i = 0; i < squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.background = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click", function () {
		//Grab color of clicked square, compare to pickedColor
		var clickedColor = this.style.background;
		console.log(clickedColor);
		console.log(pickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.innerHTML = "Success";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//Loop through squares
	for (var i = 0; i < squares.length; i++) {
		//Change color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Make an array
	var arr = [];
	//Add num random colors to array
	for (var i = 0; i < num; i++) {
		//Get random color and push into array
		arr.push(randomColor());

	}
	//Return array
	return arr;
}

function randomColor() {
	//Pick a "red" from 0 - 255, "green" from 0 - 255, "blue" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
