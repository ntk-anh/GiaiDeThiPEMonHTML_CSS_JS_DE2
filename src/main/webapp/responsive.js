function show() {
	if (document.getElementById("para2").style.display == "block") {
		document.getElementById("para2").style.display = "none";
		document.getElementById("para3").innerHTML = "SHOW ALL";

	} else {
		document.getElementById("para2").style.display = "block";
		document.getElementById("para3").innerHTML = "SHOW LESS";
	}
}

function Enroll() {
	var t1 = document.getElementById("t1").value;
	var t2 = document.getElementById("t2").value;
	var t3 = document.getElementById("t3").value;
	var t4 = document.getElementById("t4").value;
	if (t1 == "" || t2 == "" || t3 == "" || t4 == "") {
		alert("Không được bỏ trống bất cứ input nào");
	} else {
		if (t3 != t4) {
			alert("Password và RePassword phải giống nhau");
		} else {
			var t6 = document.getElementById("t6");
			var t7 = document.getElementById("t7");
			var t8 = document.getElementById("t8");
			if(!t6.checked && !t7.checked && !t8.checked ){
				alert("Chọn ít nhất 1 checkbox");
			}else{
				var result =  confirm("Every thing is ok");
				if(result==true){
					
				}else{
					location.reload();
				}
			}
		}
	}
}