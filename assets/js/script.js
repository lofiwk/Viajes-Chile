/* recargar al tocar la imagen del logo */
$(document).ready(function () {
  $("#viajesChileLink").click(function (e) {
    e.preventDefault();
    location.reload();
  });
});

/* tooltip */
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Agregar evento clic al botón "Enviar"
  document
    .getElementById("enviarButton")
    .addEventListener("click", function () {
      // Mostrar mensaje de alerta
      alert("El mensaje fue enviado con éxito");
    });
});
