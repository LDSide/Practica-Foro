let foto = document.createElement("img"); /*insertar imagen*/
foto.src = "Character.jpg";

function consulta(){ /*llamar datos de json*/
    let datosjson;
    fetch('autor.json')
    .then(respuesta => respuesta.json())
    .then((salida)=>{datosjson = salida;
        document.getElementById("nombre")
        nombre.textContent = salida.nombre;
        document.getElementById("ciudad")
        ciudad.textContent = 'Ubicacion' + salida.ciudad;
        document.getElementById("telefono")
        telefono.textContent = 'Numero' + salida.telefono;
        document.getElementById("correo")
        correo.textContent = 'Email' + salida.correo;
        document.getElementById("edad")
        edad.textContent = 'Edad' + salida.edad;
        document.getElementById("infop")
        infop.textContent = 'Profesión' + salida.informacion[0].profesion;
        document.getElementById("infoh")
        infoh.textContent = 'Tematica principal' + salida.informacion[1].hobby;
        document.getElementById("union")
        union.textContent = 'Membresia' + salida.union;
    })

}