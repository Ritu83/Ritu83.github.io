var "cars";
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