var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
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
			alert("Correct");

		} else {
			alert("Wrong");
		}
	});
}
