if (!localStorage.getItem('Aceptar')) {
    const galletas_si = window.confirm("AVISO DE COOKIES \n\nDebe aceptar las cookies para poder utilizar la página.");

    if (galletas_si) {
        localStorage.setItem('Aceptar', 'true');
    } else {
        alert("Para poder acceder a la web, es necesario aceptar las cookies. \n\nRefresque la página para poder aceptarlas.");
        document.body.innerHTML = '';
    }
}
