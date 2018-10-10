 function det() {
 	var n1 = document.getElementById('s11').value;
 	var n2 = document.getElementById('s12').value;
 	var n2 = document.getElementById('s12').value;
 	var n3 = document.getElementById('s13').value;
 	var n4 = document.getElementById('s21').value;
 	var n5 = document.getElementById('s22').value;
 	var n6 = document.getElementById('s23').value;
 	var n7 = document.getElementById('s31').value;
 	var n8 = document.getElementById('s32').value;
 	var n9 = document.getElementById('s33').value;
 	var i= (n1*n5*n9)+(n2*n6*n7)+(n3*n4*n8)-(n3*n5*n7)-(n1*n6*n8)-(n2*n4*n9);
 	document.getElementById('result').innerHTML=i;
   
}
	 

    

 