function comentarios(id){

    var user = auth.currentUser; //auth es la variable de la pagina auth. es una referencia al usario actual
    if (!user) //Si el usuario no esta logeado al dar click le saldra un mensaje
    {
        alert('Haz login para añadir un mensaje');
        return false;//Salimos de la funcion
    }
    //A continuación le pediremos al usuario que escriba el comentario
    var comen = prompt("Inserta el cometario");
    var f = new Date();//Objeto fehca
    var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear() + " a las: " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
   
    //Hacemos referencia a comentarios y con el pusch añadimos  la siguiente subcoleccion 
    db.ref('comentarios').push({
        id: id,//Importante la id del panel html para luego hacer referencia
        usuario: user.displayName,
        hora: fecha,
        comentario: comen,
        foto: user.photoURL
    });
}

