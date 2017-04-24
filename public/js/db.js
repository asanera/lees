var db = firebase.database(); //Nos conectamos al servicio de la base de datos
//Escritura a la base de datos
var cont = 1; //Es el contador para la id de los paneles html
function mostrar() {
    var user = auth.currentUser; //auth es la variable de la pagina auth. es una referencia al usario actual.
    if (!user) //Si el usuario no esta logeado al dar click le saldra un mensaje
    {
        alert('Haz login para añadir un mensaje');
        return false;
    }
    //Objeto para guardar en la base de datos la fecha de publicación
    var f = new Date();
    var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear() + " a las: " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
    //Hacemos referencia en nuestra base de datos a mensajes, con el push añadimos una subcoleción al mensaje.
    db.ref('mensajes').push({
        contenido: document.formMensaje.mensaje.value, //Valor del furmulario 
        hora: fecha, //Guardamos la fecha en la que se ha publicado
        usuario: user.displayName, //El nombre del usuario
        foto: user.photoURL, //La foto de perfil del usario
        codigo: 'com' + cont //La id del panel (Luego hara falta para los comentarios)
    });
    document.formMensaje.reset(); //Reseteamos el formulario   
}
//Lectura de la base de datos
//Hacemos referncia al mensajes, a continuacion el evento child_added que recupera una lista de elementos en una base de datos, finalmente cogemos todo el contenido de la base de datos con el snapshot
db.ref('mensajes').on("child_added", function (snapshot) {
    //Creamos un panel bootstrap con js nativo 
    var add = document.createElement('div');
    add.className = "panel panel-default";
    add.id = cont; //Añadimos al panel la id que hemos mencionado
    var add2 = document.createElement('div'); //Se coloca un segundo div
    add2.className = "panel-body"; //Agregamos class
    var dato = snapshot.val(); //Guardamos en una variable el obtejo snapshot.val() val nos devuelves los campos que hay almacenado en nuestra bd
    var contenido = dato.contenido; //Guardamos el mensaje
    //A continuacion hacemos referencia a los campos
    add2.innerHTML = '<img class="avatar" src ="' + dato.foto + '"><br><br>' + contenido + "<br><br><b>Publicado por:</b><br>" + dato.usuario + " " + dato.hora
    add2.innerHTML += '<br><button onclick="comentarios(this.id)" id="com' + cont + '" type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-edit"></span> Comentar';
    add2.innerHTML += '   |    <button" onclick="abrir(this.id)" id="' + cont + '" type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-edit"></span> Ver comentarios';
    add.appendChild(add2);
    //Función que coloca los nuevos paneles html al principio 
    document.getElementById('dmensajes').insertBefore(add, document.getElementById(cont - 1));
    cont++; //Hasta que no finalice de implementar todos los datos, seguira sumando uno al contador
});