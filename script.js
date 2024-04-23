// Obtener el botón de abrir el modal
var openModalBtn = document.getElementById("openModalBtn");

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón de cerrar el modal
var closeModalBtn = document.getElementsByClassName("close")[0];

// Función para abrir el modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar el modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal cuando se haga clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
