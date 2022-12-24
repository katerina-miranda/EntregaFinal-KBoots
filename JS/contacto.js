//Dentro del document ready agrego la funcion para validar el form
$(document).ready(function () {
  validarDatosContacto();
});

//Funcion para validar todos los campos del formulario antes de su envio
function validarDatosContacto() {
  $("#form-contacto").submit(function (e) {
    if ($("#nombre-contacto").val() == "") {
      e.preventDefault();
      $("#error-nombre-contacto").fadeIn();
      $("#nombre-contacto").change(function () {
        $("#error-nombre-contacto").fadeOut();
      });
    } else if ($("#email-contacto").val() == "") {
      e.preventDefault();
      $("#error-email-contacto").fadeIn();
      $("#email-contacto").change(function () {
        $("#error-email-contacto").fadeOut();
      });
    } else if ($("#telefono-contacto").val() == "") {
      e.preventDefault();
      $("#error-telefono-contacto").fadeIn();
      $("#telefono-contacto").change(function () {
        $("#error-telefono-contacto").fadeOut();
      });
    } else if ($("#mensaje-contacto").val() == "") {
      e.preventDefault();
      $("#error-mensaje-contacto").fadeIn();
      $("#mensaje-contacto").change(function () {
        $("#error-mensaje-contacto").fadeOut();
      });
    } else {
      e.preventDefault();

      //Una vez que se validan los datos los guardo en un array
      let datosContacto = [];
      datosContacto.push($("#nombre-contacto").val());
      datosContacto.push($("#email-contacto").val());
      datosContacto.push($("#telefono-contacto").val());

      //Convierto el array a formato JSON para poder subirlo a la API
      let datosContactoJSON = JSON.stringify(datosContacto);
      enviarDatos(datosContactoJSON);

      //Muestro un alert para que el usuario vea que el envio fue exitoso
      Swal.fire({
        icon: "success",
        title: "Datos enviados con éxito",
        text: "En unos días vas a recibir nuestro contacto :)",
        confirmButtonColor: "#444444",
      });

      //Reseteo los campos de entrada
      $(".entrada-contacto").val("");
    }
  });
}

//Funcion para simular la subida de los datos a una API
function enviarDatos(datos) {
  const URLPOST = "https://jsonplaceholder.typicode.com/posts";

  $.post(URLPOST, datos).done(function (respuesta, estado) {
    console.log(respuesta);
    console.log(estado);
  });
}