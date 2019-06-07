
//to find a square of a number
  var x = Square(5);

 
  function Square(num) {
    

   
     return num*num;
     
 }
     document.write(x);
	 console.log(x);
	
	
 
	 var y = Sum(8,10,24);
	 function Sum(a,b,c){
	 console.log(a+b+c);	
	 }
	 document.write(y);
	console.log(y);
	
	
	var person = {
		Name: "Ritu",
		Age:"30",
	Occupation: "Chef"
	}


		 document.write(person.Name);
		
		console.log(person.Age);
		
		function details(){
		console.log( person.Name + " " + person.Occupation + " " +person.Age +" ");
		
		}
		
details();
function increment(){
  person.Age++
}
console.log(person.Age);
 document.write(person.Age);


function createPerson(){
	
person.Name =document.getElementById("personName").value;
person.Age =document.getElementById("personAge").value;
person.Occupation= document.getElementById("personOccupation").value;
console.log( person.Name + " " + person.Occupation + " " +person.Age +" ");
	
}





 var greet =  "He said ,'My name is Elliott' ";
 document.write(greet);
 console.log(greet);

 var greet1 = greet.toUpperCase();
 document.write(greet1);
 function Elliot(){
 console.log(greet1);
 }
			
	
	var str1 = " What a lovely morning.";
     var str2 = "Let's have a day out!!";
	 var str3 = " let's be productive." ;
	  var result = str1.concat(str2,str3);
	  console.log(result);
	  document.write(result);
	
		
		

	
	


 