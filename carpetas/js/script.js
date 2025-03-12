// Actualizar
document.getElementById('btnUsuarios').addEventListener('click', abrirFormulario);

    const botonUsuarios = document.getElementById('btnUsuarios');
    const botonCerrar = document.getElementById('btnCancelar');
    const formulario = document.getElementById('formularioUsuarios');
    const overlay = document.getElementById('overlay');


function abrirFormulario (){
    
    formulario.style.display = 'block';
    overlay.style.display = 'block';

    botonCerrar.addEventListener('click', () => {
        formulario.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        formulario.style.display = 'none';
        overlay.style.display = 'none';
    });
}

document.getElementById('formularioUsuarios').addEventListener('submit',function(event){

    event.preventDefault();

    const nombre1 = document.getElementById('nombre1').value;
    const apellido1 = document.getElementById('apellido1').value;
    const edad1 = document.getElementById('edad1').value;
    const correo1 = document.getElementById('correo1').value;
    const cedula1 = document.getElementById('cedula1').value;

    if(nombre1.trim() === '' || apellido1.trim() === '' || edad1.trim() === '' || correo1.trim() === '' || cedula1.trim() === '' ){
        alert('Todos los campos son obligatorios bb.');
        return;
    }

    const tabla = document.getElementById('tablas').getElementsByTagName('tbody')[0];

    const nuevaFila = tabla.insertRow();
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaApellido = nuevaFila.insertCell(1);
    const celdaEdad = nuevaFila.insertCell(2);
    const celdaCorreo = nuevaFila.insertCell(3);
    const celdaCedula = nuevaFila.insertCell(4);

    celdaNombre.textContent = nombre1;
    celdaApellido.textContent = apellido1;
    celdaEdad.textContent = edad1;
    celdaCorreo.textContent = correo1;
    celdaCedula.textContent = cedula1;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'X';
    btnEliminar.style.padding = '15px';
    btnEliminar.style.paddingTop = '3px';
    btnEliminar.style.paddingBottom = '3px';
    btnEliminar.style.marginBottom = '4px';
    document.body.appendChild(btnEliminar);
    btnEliminar.onclick = function(){
        tabla.removeChild(nuevaFila);
    };
    celdaActualizar.appendChild(btnEliminar);

    // document.getElementById('formularioUsuarios').reset();
});


// Libros
document.getElementById('btnLibros').addEventListener('click', abrirFormularioLibros);

    const botonLibros = document.getElementById('btnLibros');
    const botonCerrarL = document.getElementById('btnCancelarL');
    const formularioL = document.getElementById('formularioLibros');
    const overlayL = document.getElementById('overlay');


function abrirFormularioLibros (){
    
    formularioL.style.display = 'block';
    overlayL.style.display = 'block';

    botonCerrarL.addEventListener('click', () => {
        formularioL.style.display = 'none';
        overlayL.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        formularioL.style.display = 'none';
        overlayL.style.display = 'none';
    });
}

// Ejemplares
document.getElementById('btnEjemplares').addEventListener('click', abrirFormularioEjemplares);

    const botonEjemplares = document.getElementById('btnEjemplares');
    const botonCerrarE = document.getElementById('btnCancelarE');
    const formularioE = document.getElementById('formularioEjemplares');
    const overlayE = document.getElementById('overlay');


function abrirFormularioEjemplares (){
    
    formularioE.style.display = 'block';
    overlayE.style.display = 'block';

    botonCerrarE.addEventListener('click', () => {
        formularioE.style.display = 'none';
        overlayE.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        formularioE.style.display = 'none';
        overlayE.style.display = 'none';
    });
}
// Reservas
document.getElementById('btnReservas').addEventListener('click', abrirFormularioReservas);

    const botonReservas = document.getElementById('btnReservas');
    const botonCerrarR = document.getElementById('btnCancelarR');
    const formularioR = document.getElementById('formularioReservas');
    const overlayR = document.getElementById('overlay');


function abrirFormularioReservas (){
    
    formularioR.style.display = 'block';
    overlayR.style.display = 'block';

    botonCerrarR.addEventListener('click', () => {
        formularioR.style.display = 'none';
        overlayR.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        formularioR.style.display = 'none';
        overlayR.style.display = 'none';
    });
}

// Reservas
document.getElementById('btnPrestamos').addEventListener('click', abrirFormularioPrestamos);

    const botonPrestamos = document.getElementById('btnPrestamos');
    const botonCerrarP = document.getElementById('btnCancelarP');
    const formularioP = document.getElementById('formularioPrestamos');
    const overlayP = document.getElementById('overlay');


function abrirFormularioPrestamos (){
    
    formularioP.style.display = 'block';
    overlayP.style.display = 'block';

    botonCerrarP.addEventListener('click', () => {
        formularioP.style.display = 'none';
        overlayP.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        formularioP.style.display = 'none';
        overlayP.style.display = 'none';
    });
}
