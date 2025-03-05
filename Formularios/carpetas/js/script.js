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