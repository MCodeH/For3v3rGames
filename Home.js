function MyFunction(){
	alert("Hello World");
	var user=prompt("Enter Your Name:");
	var answer=confirm("Is Your Name: "+user);
	if(answer==true){
		alert("Welcome "+user);
	}else{
		alert("Who are you?");
		location.reload();
	 }
	}
	