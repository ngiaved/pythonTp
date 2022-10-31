
/* const getCotizacion = fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
.then(function(response){
    if (response.ok){
    console.log(response.data.json[0][0])
    return response.json()
    }
    else
    throw new Error(response.status);
    })
    .then(function(data){
    console.log("Datos: " + data);
    })
    .catch(function(err){
    console.error("ERROR: ", err.message)
    });
 */

    

   /*  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
   .then(response => response.json())
   .then(json => console.log(json))
 */
   const interval = setInterval(function() {
    // method to be executed;
  


  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
   .then(response => response.json())
   .then(function (json) {


    console.log(json[0]["casa"]["compra"])
    document.getElementById("usdV").innerHTML = "Dolar Venta: " + json[0]["casa"]["compra"];
    
   } )

}, 2000);


function validarEnviar() {

    //Función para validar el envío de datos del formulario
    if (document.validarForm.nombre.value.length < 3) {
        alert("Escriba su nombre completo por favor")
        document.validarForm.nombre.focus()
        return 0;
    }
    edad = document.validarForm.edad.value
    edad = validarEntero(edad)
    document.validarForm.edad.value = edad
    if (edad == "") {
        alert("Introducir edad como número entero")
        document.validarForm.edad.focus()
        return 0;
    }
    tel = document.validarForm.tel.value
    tel = validarEntero(tel)
    document.validarForm.tel.value = tel
    if (tel == "") {
        alert("Introducir teléfono")
        document.validarForm.tel.focus()
        return 0;
    }
    if (document.validarForm.tipoConsulta.selectedIndex == 0) {
        alert("Debe seleccionar su tipo de consulta por favor")
        document.validarForm.tipoConsulta.focus()
        return 0;
    }
    if (document.validarForm.mensaje.value == "") {
        alert("Ingrese su consulta por favor")
        document.validarForm.mensaje.focus()
        return 0;
    }
    //se envía el formulario
    alert("Muchas gracias por enviar su consulta")
    document.validarForm.submit();
}
function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}


