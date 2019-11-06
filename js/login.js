function checkForm(){
	var userId= document.getElementById('#idinput');
	var userPw = document.getElementById('#pwinput');

	if(loginfield.idinput.value =="june1105" && loginfield.pwinput.value = 'june1105' ){
		return true;
	}
	else
		widow.alert("Login failed!");
		loginfield.pwinput.focus();
		loginfield.idinput.focus();
		return false;
	}