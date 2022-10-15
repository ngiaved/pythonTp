
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
