

document.querySelector('form').addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if (!checkedOne) {
        let mensaje = document.getElementsByClassName('error-message')[0];
        mensaje.textContent = 'Debes seleccionar al menos una opción';
        mensaje.style.color = "red";
        event.preventDefault();
    }
});




document.querySelector('form').addEventListener('submit', function(event) {
    const particular = document.getElementById('cuenta_particular');
    const empresa = document.getElementById('cuenta_empresa');
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'Por favor, selecciona una opción.';

    if (!particular.checked && !empresa.checked) {
        event.preventDefault();
        if (!document.querySelector('.error-message')) {
            particular.parentNode.appendChild(errorMessage);
        }
    } else {
        if (document.querySelector('.error-message')) {
            errorMessage.remove();
        }
    }
});



document.querySelector('form').addEventListener('submit', function(event) {
    var documentType = document.getElementById('document_type');
    if (documentType.value === '---') {
        let dni = document.getElementById('error-id');
        dni.textContent = 'Por favor, selecciona un tipo de documento';
        dni.style.color = "red";
        event.preventDefault();
    }
});





const titleInput = document.getElementById('title');
const letrasTitulo = document.getElementById('letras-titulo');
if (titleInput && letrasTitulo) {

    titleInput.addEventListener('input', () => {
        let currentLength = titleInput.value.length;
        letrasTitulo.textContent = `${currentLength} /15`;
    });
}


const descriptionInput = document.getElementById('description');
const letrasDescripcion = document.getElementById('letras-descripcion');
if (descriptionInput && letrasDescripcion) {
    descriptionInput.addEventListener('input', () => {
        let currentLength = descriptionInput.value.length;
        letrasDescripcion.textContent = `${currentLength} /120`;
    });
}
