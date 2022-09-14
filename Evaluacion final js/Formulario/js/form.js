$(document).ready(function () {
	
	$("#usercheck").hide();
	let usernameError = true;
	$("#usernames").keyup(function () {
	 validateUsername();
	});
	
	function validateUsername() {
	 let usernameValue = $("#usernames").val();
	 if (usernameValue.length == "") {
	 $("#usercheck").show();
	 usernameError = false;
	 return false;
	 } else if (usernameValue.length < 3 || usernameValue.length > 10) {
	 $("#usercheck").show();
	 $("#usercheck").html("**El nombre de usuario debe tener entre 3 a 10 caracteres");
	 usernameError = false;
	 return false;
	 } else {
	 $("#usercheck").hide();
	 }
	}
	
	
	const email = document.getElementById("email");
	email.addEventListener("blur", () => {
	 let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	 let s = email.value;
	 if (regex.test(s)) {
	 email.classList.remove("is-invalid");
	 emailError = true;
	 } else {
	 email.classList.add("is-invalid");
	 emailError = false;
	 }
	});
	
	
	$("#passcheck").hide();
	let passwordError = true;
	$("#password").keyup(function () {
	 validatePassword();
	});
	function validatePassword() {
	 let passwordValue = $("#password").val();
	 if (passwordValue.length == "") {
	 $("#passcheck").show();
	 passwordError = false;
	 return false;
	 }
	 if (passwordValue.length < 3 || passwordValue.length > 10) {
	 $("#passcheck").show();
	 $("#passcheck").html(
	  "**La contraseña debe tener entre 3 a 10 caracteres"
	 );
	 $("#passcheck").css("color", "red");
	 passwordError = false;
	 return false;
	 } else {
	 $("#passcheck").hide();
	 }
	}
	

	$("#conpasscheck").hide();
	let confirmPasswordError = true;
	$("#conpassword").keyup(function () {
	 validateConfirmPassword();
	});
	function validateConfirmPassword() {
	 let confirmPasswordValue = $("#conpassword").val();
	 let passwordValue = $("#password").val();
	 if (passwordValue != confirmPasswordValue) {
	 $("#conpasscheck").show();
	 $("#conpasscheck").html("**La contraseña no coincide");
	 $("#conpasscheck").css("color", "red");
	 confirmPasswordError = false;
	 return false;
	 } else {
	 $("#conpasscheck").hide();
	 }
	}
	
	
	$("#submitbtn").click(function () {
	 validateUsername();
	 validatePassword();
	 validateConfirmPassword();
	 validateEmail();
	 if (
	 usernameError == true &&
	 passwordError == true &&
	 confirmPasswordError == true &&
	 emailError == true
	 ) {
	 return true;
	 } else {
	 return false;
	 }
	});
	});
	
 