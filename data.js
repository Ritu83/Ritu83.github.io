
var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';


var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();


request.onload = function() {
var requestData = request.response;
var container = document.getElementById("container");
console.log(requestData);


    for(var key in requestData){
    var myH1 = document.createElement('h1');
    myH1.innerHTML = key + ": " + requestData[key];
    container.appendChild(myH1);
    }
	for (var key in requestData.members){
		for(var item in requestData.members[key])
		{
			var myH1 = document.createElement('h1');
    myH1.innerHTML = item + ": " + requestData.members[key][item];
    container.appendChild(myH1);
		}
}
}
 

	  
	  