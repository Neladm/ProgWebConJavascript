function validar() {
	var nombre, apellidos, correo, edad, expresion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	edad = document.getElementById("edad").value;

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || apellidos === ""  || correo === "" ||  edad === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellidos.length>30){
		alert("Los apellidos son muy largos");
		return false;
	}
	else if (correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}

	else if (edad.length>99){
		alert("La edad no es válida");
		return false;
	}
	else if (isNaN(edad)){
		alert("La edad ingresada no es de tipo numérico");
		return false;
	}
}