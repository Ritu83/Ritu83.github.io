var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';


var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();


request.onload = function() {
var requestData = request.response;
Search = document.getElementById("Search").value;
console.log(requestData);

       
    for(var key in requestData){
		for(var item in requestData[key]){
			console.log(requestData[key][item]);
			if(requestData[key][item]==Search){
				
				for(var item in requestData[key]){
					
					var myH1 = document.createElement('h2');
    myH1.innerHTML = item + ": " + requestData[key][item];
    container.appendChild(myH1);
				}
			}
		}
    }
	
}
 