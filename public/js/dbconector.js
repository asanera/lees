var db = firebase.database();//Nos conectamos al servicio de autentificacion 

db.ref('comentarios').on("child_added", function (snapshot) {
    var cont = snapshot.val();
    var id = window.location.hash;//Con esto cogemos el # de la url
    id = id.substring(1);
    id = "com" +id;
    var codigo = cont.id;//De la base de datos cogemos todas las id en cada vuelta
    //Si la id es la misma que en la url mostraremos el panel con el comentario
    if(id ==codigo){
    var add = document.createElement('div');
    add.className = "panel panel-default";
    var add2 = document.createElement('div');
    add2.className = "panel-body";
    var comentario = cont.comentario;
    add2.innerHTML = '<img class="avatar" src ="'+cont.foto +'"><br><br>' +comentario + "<br><br><b>Publicado por:</b><br>" + cont.usuario + " " +cont.hora;
    add.appendChild(add2);
    document.getElementById("comentarios").appendChild(add);
    
    }    
});
