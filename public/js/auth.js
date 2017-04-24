//Accedemos al servicio de autenticacion
var auth = firebase.auth();

document.getElementById('usericon').addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();//Esto indica que la autentificacion es de google
    auth.signInWithPopup(provider)
    //si es correcto(equivale al try-catch)
    .then(function(result){
        var user = result.user;//Devuele el obtejo con la información del usuario
        alert('Autenticado correctamente: ' + user.displayName);
    })
    //Si falla
    .catch(function(err){
        alert("Error de autenticación "+ errorMessage);
    })
});
//Se ejecuta cada vez que hay un cambio en la autentificacion del usuario
auth.onAuthStateChanged(function(user) {
  if (user) {//Si existe el usario mostrará estos estilos
   document.getElementById('usericon').style.display = 'none';
  document.getElementById('logouticon').style.display = 'block';
  } else {//Por el contrario lo dejara igual
    document.getElementById('usericon').style.display = 'block';
    document.getElementById('logouticon').style.display = 'none';
  }
});

//Cerrar sesion
 document.getElementById('logouticon').addEventListener('click', function() {
  auth.signOut()
    .then(function() {
      alert('Sesión cerrada');
    });//Cierra sesion
});