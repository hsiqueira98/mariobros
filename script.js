const form = document.querySelector('.formulario-contato');
const mascara = document.querySelector('.mascara-formulario');

function formButton() {
    form.style.left = '50%';
    form.style.transform = 'translateX(-50%)';
    mascara.style.visibility = 'visible';
}

function fecharFormulario() {
    form.style.left = '-330px';
    form.style.transform = 'translateX(0)';
    mascara.style.visibility = 'hidden';
}

