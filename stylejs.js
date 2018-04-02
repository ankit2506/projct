//for email----------
function f1(){
	var a=document.getElementById("emi").value;
	var at=a.indexOf("@");
	var dot=a.indexOf(".");
	var l=a.length;
	var x=false;
	var y=false;
	//console.log(at);
	//console.log(dot);
	//console.log(l);
	if(a==""){
		alert("please fill email");
		document.getElementById("emi").style.border="1px solid red";
		//return false;
	}
	else if(at < 1|| dot<1||dot-at<6 ||dot-at>6){
		alert("please put @ and dot if u did then put them correct position");
		document.getElementById("emi").style.border="1px solid red";
		//return false;
	}
	else if(l-dot<4 || l-dot>4){
		alert("please keep dot correct position");
		document.getElementById("emi").style.border="1px solid red";
		//return false;
	}
	else if(at!=a.lastIndexOf("@") ||dot!=a.lastIndexOf(".")){
		alert("please put only one @ or dot");
		document.getElementById("emi").style.border="1px solid red";
		//return false
	}
	else{
		document.getElementById("emi").style.border="none";
		y=true;
	}
	
//for password----------------

	var b=document.getElementById("pas").value;

	//console.log(b);
	if(b==""){
		alert("please fill password");
		document.getElementById("pas").style.border="1px solid red";
		//return false;
	}
	else if(b.length < 8)
	{
		alert("please fill greater then 8 length password");
		document.getElementById("pas").style.border="1px solid red";
		//return false;
	}
	else{
		document.getElementById("pas").style.border="none";
		//document.getElementById("emi").style.border="none";
		x=true;
		//return true;
	}
	return x &y;
	
}

function create(){
	var f=document.getElementsByName("firstname")[0].value;
	var l=document.getElementsByName("lastname")[0].value;
	var m=document.getElementsByName("mobileno")[0].value;
	var n=document.getElementsByName("newpassword")[0].value;
	console.log(m);
	if(f==""){
		alert("please fill first name field");
	}
	if(l==""){
		alert("please fill last name field");
	}
	if(m=="" ||m.length<10 ||m.length>10){
		alert("please fill mobile no field  if u did then fill 10 values");
	}
    if(n=="" || n.length<8){
		alert("please fill newpassword field if u did then fill correct length");
	}
	else{
		return true;
	}
}

