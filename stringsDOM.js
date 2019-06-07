var string = prompt(" Enter a String: " );
function countTriple(){
	var len = string.length;
	var count = 0;
	for(i=0; i<=len; i++)
	{
		str = string.slice(i,i+3);
		if(str[0]==str[1]&&str[1]==str[2])
		{count+=1;
	}}
	document.write(count);
		console.log(count);

}
 
	 
function changeText()
{
	textString = document.getElementById("myString").value;
	newText = document.createTextNode(textString);
    return newText;

}

	function creation()
	{
		newElement = document.createElement("p");
		newElement.appendChild(changeText());
		document.body.appendChild(newElement);
	}
	
	function delTag()
	{
		newElement.remove();
	}
	
		
		
	

