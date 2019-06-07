

 
function CarModel(){

	textCarModel = document.getElementById("CarModel").value;
	newCar = document.createTextNode(textCarModel);
	console.log(newCar);


}

	function Attributes()
	{
		Model = document.getElementById("Model");
		Model.appendChild(CarModel());
		document.body.appendChild(newElement);
	}
	
	function delTag()
	{
		newElement.remove();
	}
	