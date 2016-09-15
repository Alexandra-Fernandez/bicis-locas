window.addEventListener("load", function() {
	var boton = document.getElementById("iniciar");
	boton.addEventListener("click", function() {
		var name = document.getElementById("name").value;
		var lastname = document.getElementById("lastname").value;
		var email = document.getElementById("input-email").value;
		var password = document.getElementById("input-password").value;
		var menu = document.querySelector("select").value;
		
		
		
		validateForm(name,lastname,email,password,menu);
		
		
	});
	
	function validateForm(name,lastname,email,password,menu){
		/* Escribe tú código aquí */
			 var expreg = /^[az]$/;

			if (name == ""){
				alert("llenar el campo nombre por favor");
			} else if(name === expreg){
			   alert(" Es correcta");
			 } else alert("incorrecto !!!");
			


			if (lastname == ""){
				alert("llenar el campo apellido por favor");
			}
			if (email == ""){
				alert("llenar el campo correo por favor");
			}
			if (password == "") {
				alert("llenar el campo contraseña por favor");
			}
			if (menu == 0) {
				alert("selecciona un tipo de bici por favor");
			}
			
			if (password.length < 6){ 
		     	window.alert("Ingrese  al menos 6 caracteres"); 
		     } 

        	if (password == "123456" || password == "password" || password == "098754"){
            	alert ("ingresa contraseña valida");
            }
            

           
           

	}
		

});
                  