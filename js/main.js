function validateForm(){
	var name = document.getElementById("name").value;
	if (name == ""){
		alert("llenar el campo nombre");
	} else if (/^[a-z]/.test(name.charAt(0))){
		alert("ingrese la primera letra en mayuscula");
	} else if (/^[0-9]/.test(name.charAt(0))){
		alert("Por favor no ingrese numeros");
	}

	var lastname = document.getElementById("lastname").value;
	if (lastname == ""){
		alert("llenar el campo apellido");
	}

	var correovalidado=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var email = document.getElementById("input-email").value;
	if (email == "" ){
		alert("llenar el campo correo");
	} else if(!correovalidado.test(email)) {
        alert("Ingrese un correo válido.");
    }

	var password = document.getElementById("input-password").value;
	if (password == "") {
		alert("llenar el campo contraseña");
	} else if (password.length < 6){ 
     	alert("Ingrese  al menos 6 caracteres"); 
     } else if (password == "123456" || password == "password" || password == "098754"){
    	alert("ingresa contraseña valida");
    }

    var menu = document.querySelector("select").value;
	if (menu == 0) {
		alert("selecciona un tipo de bici");
	}    
}