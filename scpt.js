// JavaScript Document


function converter1(a,p,s) {
	var otc =a*p;
	alert("Your outcome is: " + otc + " " + s);
}
function converter2(a,b,p,s) {
	var otc =a*p+b;
	alert("Your outcome is: " + otc + " " + s);
}

function decider3(){
	var x1 = document.getElementById("PD");
	var x2 = document.getElementById("KG");
	
	if((x1.value==="") && (x2.value==="")){
		alert("Please enter the number and leave another window empty");
		x1.focus();
		return false;
	}
	else if(x2.value==="") {
		var a=parseFloat(x1.value);
		var p=0.453592;
		var s="Kilograms";
		converter1(a,p,s);
	}
	
	else if (x1.value===""){
		var a=parseFloat(x2.value);
		var p=2.20462;
		var s="Pounds";
		converter1(a,p,s);
	}
	else {
		alert("Please leave one window open");
			x1.focus();
		return false;

	}
}
	
function decider2(){
	var x1 = document.getElementById("FR");
	var x2 = document.getElementById("C");
	
	if((x1.value==="") && (x2.value==="")){
		alert("Please enter the number and leave another window empty");
		x1.focus();
		return false;
	}
	else if(x2.value==="") {
		var a=parseFloat(x1.value);
		var b=-32;
		var p=0.5556;
		var s="Celcius";
		converter2(a,b,p,s);
	}
	
	else if (x1.value===""){
		var a=parseFloat(x2.value);
		var b=32;
		var p=1.8;
		var s="Fahrenheit";
		converter2(a,b,p,s);
	}
	else {
		alert("Please leave one window open");
			x1.focus();
		return false;

	}
}
	
	function decider1(){
	var x1 = document.getElementById("KM");
	var x2 = document.getElementById("MI");
	
	if((x1.value==="") && (x2.value==="")){
		alert("Please enter the number and leave another window empty");
		x1.focus();
		return false;
	}
	else if(x2.value==="") {
		var a=parseFloat(x1.value);
		var p=0.6214;
		var s="Miles";
		converter1(a,p,s);
	}
	
	else if (x1.value===""){
		var a=parseFloat(x2.value);
		var p=1.6093;
		var s="Kilometers";
		converter1(a,p,s);
	}
	else {
		alert("Please leave one window open");
			x1.focus();
		return false;

	}
}

