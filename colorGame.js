var numOfSquares=6;
var colors=[];
var pickedColor ;//= pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	for(var i =0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy"? numOfSquares=3:numOfSquares=6;
		// if(this.textContent==="Easy"){
		// 	numOfSquares=3;
		// }else{
		// 	numOfSquares=6;
		// }
		reset();
	});
}
for(var i =0;i<squares.length;i++){
	//add initial colors to squares
	// squares[i].style.backgroundColor=colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor; //can give error as dom add spaces right after both commas in rgb
		//compare color to pickedColor
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct !!";
			changeColors(pickedColor);
			resetButton.textContent="Play Again ?"
			h1.style.backgroundColor=clickedColor;
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again !!";
		}
	});
	reset();
}

}




function reset(){
	//generate all new colors from array
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors"

	messageDisplay.textContent="";
	//change colors of squares;
	for(var i =0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numOfSquares=3;
// 	colors=generateRandomColors(numOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numOfSquares=6;
// 	colors=generateRandomColors(numOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
// 	}
// });

resetButton.addEventListener("click",function(){
	// this.textContent="New Colors";
	// //generate all new colors from array
	// colors = generateRandomColors(numOfSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;

	// messageDisplay.textContent="";
	// //change colors of squares;
	// for(var i =0;i<squares.length;i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor="steelblue";
	reset();

});
//colorDisplay.textContent=pickedColor;


function changeColors(color){
	//loop through all squares
	for(var i =0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}
function generateRandomColors(num){
	var arr=[]
	//add num random colors to the array
	for(var i=0;i<num;i++){
		//get random color and push into arr 
		arr.push(randomColor())

	}
	//return that array
	return arr;
}

function randomColor(){ 
	//pic a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pic a "green" from 0-255
	var g=Math.floor(Math.random()*256);
	//pic a "blues" from 0-255
	var b=Math.floor(Math.random()*256);
	var str="rgb("+r+", "+g+", "+b+")" ;
	return str;
}