
var Days = [ "Sunday" , "Monday", "Tuesday"];
 document.write(Days);
 console.log(Days);
 Days.push = ("Wednesday");
 document.write(Days);
 console.log(Days);
 Days.pop =("Wednesday");
 document.write(Days);
 console.log(Days);
 
 
  var Age = "30";

  function personAge(){
	  Age =document.getElementById("person").value;
	 
	  document.write(Age);
	 console.log(Age);
	
	 
	  if (Age>20 && Age<40){
		 
		  Age = "True";
	  }
	  else 
	  {
		  Age="false";
		
	  }
	  document.write(Age);
	  console.log(Age);
	 
  }
  personAge();
 
 
  var i;
  for(i=0; i<=10;i++)
  {
	  i = i + 0;
	 
	
	  if (i%2 ==0){
		  document.write(i);
		  console.log(i);
	  }
	  else{
		  write="";

	  }
	   }
 
 function FizzBuzz(){
    num =document.getElementById("maxnum").value;
	wow =document.getElementById("wow").value;
	great =document.getElementById("great").value;
 
 
 var x;
 for(x=0; x<=num; x++)
 {
	 x=x+0;
	  if(x%3==0&& x%5==0){
	 console.log(wow+great);
 }
	else if(x%3==0){
		
		 console.log(wow);
	 }
	
 else if(x%5==0){
 console.log(great);}

 else{
	 console.log(x);
 }
 }
 }
 
 var a,b;
 function divisible()
 {
	 number = document.getElementById("number").value;
	 console.log(number);
	 

		 
	 var c=0;
	 while(number!=1){
		 
	 if(number%3==0)
	 {
		 number/=3;
		 console.log(number);
		 
	 } else if((number -1)%3==0){
	    number -=1;
	  console.log(b);
	}
	else {
		a= number+1;
		if(a%3==0){
		number=a;
		console.log(a);
		} 
	 
	} 
	c++;
 } 
 


 console.log("The number of iterations is" + c);

 }
