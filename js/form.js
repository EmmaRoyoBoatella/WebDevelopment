document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
  
    if (nombre === "" || apellidos === "" || email === "" || telefono === "") {
      mostrarError("Todos los campos son obligatorios");
      return;
    }
  
    const datos = {
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      telefono: telefono
    };
  
    const url = 'https://postman-echo.com/post';
  

    const opciones = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    };

    fetch(url, opciones)
      .then(response => {
        if (response.ok) {
   
          console.log('Datos enviados correctamente');
          this.reset(); 
        } else {

          mostrarError('Error al enviar los datos');
        }
      })
      .catch(error => {

        mostrarError('Error de red al enviar los datos');
      });
  });
  
  function mostrarError(mensaje) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = mensaje;
    errorDiv.style.color = "red";
  
    const formulario = document.getElementById("contactForm");
    formulario.insertBefore(errorDiv, formulario.lastElementChild);
  }
  