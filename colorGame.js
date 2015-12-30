var numberOfSquares = 6;
var colors = [];
var pickedColor;

var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var titleSpan = document.getElementById("titleSpan");
titleSpan.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}
	for (var i = 0; i < squares.length; i++) {
		//Add initial colors to squares
		squares[i].style.background = colors[i];

		//Add click listeners to squares
		squares[i].addEventListener("click", function () {
			//Grab color of clicked square, compare to pickedColor
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Success";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	reset();
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	titleSpan.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
}


resetButton.addEventListener("click", function () {
	reset();
});

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
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//Pick a "red" from 0 - 255, "green" from 0 - 255, "blue" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
