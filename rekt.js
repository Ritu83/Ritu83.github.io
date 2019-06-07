


var string = document.getElementById("string").value;;
var Height = document.getElementById("Height").value;
var Width = document.getElementById("Width").value;
 for (var i = 0; i < Width; i++){
		document.write(string)

var s;
function createPattern(string,height,width)
{
	
	str = string.split("");
	console.log(str.join(""));
	for(h=1;h<=height;h++){
		
		
		s ="";
		for(j=1;j<=(str.length*2)-3;j++)
			s=s+"";
		for(i=1;i<=str.length-1;i++)
			cosole.log(str[i]+s+str[str.length-(i+1)]);
		console.log(str.reverse().join(""));
	}
}
// var ctx = canvas.getContext('2d');
// var fontSize= 15;
// ctx.font = fontSize+'px Arial';

// var str = Word;
// var i,x,y="";
// function rektangle(){
	// Word = document.getElementById("Word").value;
	// Width = document.getElementById("Width").value;
	// Height = document.getElementById("Height").value;
	// for (var i = 0; i < Width; i++){
		// document.write(Word)
	// }
	
	
// }
// var chars = [];
// for(var i=0; i<str.length;i++) {
    // if (str[i] === "y" || str[i] === "p") 
    	// chars.push(i);
// }

// for(var i=0; i<chars.length; i++){
  // var xPos = x+ctx.measureText(str.substring(0,chars[i])).width;
  // var width = ctx.measureText(str.substring(chars[i],chars[i]+1)).width;
  // var height = fontSize*1.286;
  // var yPos = y-height/1.5
  // ctx.strokeRect(xPos, yPos, width, height);
  // }
// ctx.fillText(str, x, y);
 }	
	
	