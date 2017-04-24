//Esta funcion sirve para colocar el post mas reciente el primero en la web
function insertAfter(e,i){ 
        if(e.nextSibling){ 
            e.parentNode.insertBefore(i,e.nextSibling); 
        } else { 
            e.parentNode.appendChild(i); 
        }
    }
//Esta funcion abre una ventana nueva para mostras los comentarios
function abrir(id){
    window.open('comentarios.html#'+id,'_crm', 'resizable=yes,location=no,menubar=no,scrollbars=yes, status=no, toolbar=no,fullscreen=yes,width=500,height=500,dependent=no,titlebar=no,directories=no,status');  
    return false       
}
