const btnAgregar = document.getElementById("agregarCarrito");
const btnEliminar = document.getElementById("eliminarItem");
const card = document.getElementById("card");

btnAgregar.addEventListener("click", (event) => {
    event.preventDefault();
    card.classList.add("border", "border-success", "shadow");
});

btnEliminar.addEventListener("click", (event) => {
    event.preventDefault();
    card.classList.remove("border", "border-success", "shadow");
});

/*
Botón 1 añade clases de bootrap dentro de la función classList 
que maneja el evento, cambia el contenido, el border, el border-success y el shadow.
Botón 2 remueve clases de la card en la misma función classList,
 actualiza las clases border y border-success, y añade display none a un apartado del texto.

*/