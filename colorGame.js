var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)"
];

var messageDisplay = document.getElementById("message")
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var titleSpan = document.getElementById("titleSpan");
titleSpan.textContent = pickedColor;

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
