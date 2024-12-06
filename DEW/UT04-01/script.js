const DOM = {
    user : document.getElementById('user'),
    password : document.getElementById('password'),
    showpass : document.getElementById('showpass'),

    name : document.getElementById('name'),
    lastname : document.getElementById('lastname'),
    phone : document.getElementById('phone'),
    number : document.getElementById('number'),
    document_type : document.getElementById('document_type'),
    document_number : document.getElementById('document_number'),

    cuenta_particular : document.getElementById('cuenta_particular'),
    cuenta_empresa : document.getElementById('cuenta_empresa'),

    nacimiento : document.getElementById('nacimiento'),

    music : document.getElementById('music'),
    deporte : document.getElementById('deporte'),
    games : document.getElementById('games'),
    diy : document.getElementById('diy'),
    art : document.getElementById('art'),
    book : document.getElementById('book'),

    title : document.getElementById('title'),
    description : document.getElementById('description'),

    letras_titulo : document.getElementById('letras-titulo'),
    letras_descripcion : document.getElementById('letras-descripcion'),
    enviar : document.getElementById('enviar'),

    validation : document.getElementById("form-validations")
}

DOM.enviar.addEventListener("click", (e) => {
    
    DOM.validation.textContent = '';
    let isValid = true;

    

    if (DOM.user.validationMessage) {
        DOM.validation.appendChild(createMessageError("Usuario inválido"));
        isValid = false;
    }

    if (DOM.password.validationMessage) {
        DOM.validation.appendChild(createMessageError("Contraseña inválida"));
        isValid = false;
    }

    if (DOM.name.validationMessage) {
        DOM.validation.appendChild(createMessageError("Nombre inválido"));
        isValid = false;
    }

    if (DOM.lastname.validationMessage) {
        DOM.validation.appendChild(createMessageError("Apellido inválido"));
        isValid = false;
    }

    if (DOM.phone.validationMessage) {
        DOM.validation.appendChild(createMessageError("Teléfono inválido"));
        isValid = false;
    }

    if (DOM.number.validationMessage) {
        DOM.validation.appendChild(createMessageError("Código postal inválido"));
        isValid = false;
    }

    let cp = DOM.number.value;
    if (cp.length != 5 || isNaN(cp) || cp < 38000 || cp >=39000  ) {
        DOM.validation.appendChild(createMessageError("El código postal debe tener 5 dígitos y empezar por 38"));
        isValid = false;
    }

    if (DOM.document_type.validationMessage) {
        DOM.validation.appendChild(createMessageError("Tipo de documento no seleccionado"));
        isValid = false;
    }

    if (DOM.document_number.validationMessage) {
        DOM.validation.appendChild(createMessageError("Documento inválido"));
        isValid = false;
    }

    if (!DOM.cuenta_particular.checked && !DOM.cuenta_empresa.checked) {
        DOM.validation.appendChild(createMessageError("Tipo de cuenta no seleccionado"));
        isValid = false;
    }
    if(DOM.nacimiento.validationMessage){
        DOM.validation.appendChild(createMessageError("Fecha de nacimiento inválida"));
        isValid = false;
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = Array.prototype.slice.call(checkboxes).filter(x => x.checked).length;
    if (checked < 2) {
        DOM.validation.appendChild(createMessageError("Debes seleccionar al menos dos opciones"));
        isValid = false;
    }

    if (DOM.title.validationMessage) {
        DOM.validation.appendChild(createMessageError("Título inválido"));
        isValid = false;
    }

    if (DOM.description.validationMessage) {
        DOM.validation.appendChild(createMessageError("Descripción inválida"));
        isValid = false;
    }

    if (isValid) {
        console.log("Formulario válido");
        
    } else {
        DOM.validation.appendChild(createMessageError("Formulario inválido"));
        e.preventDefault();
         
    }

});


function createMessageError( mensaje){
    let span = document.createElement("span");
    span.style.color = "red";
    span.textContent = mensaje;
    return span;
}

DOM.showpass.addEventListener("click", (e) => {
    if(DOM.password.type == "password"){
        DOM.password.type = "text";
    }else{
        DOM.password.type = "password";
    }
} );    


DOM.title.addEventListener("input", (e) => {
    let currentLength = DOM.title.value.length;
    DOM.letras_titulo.textContent = `${currentLength}/15`;
});

DOM.description.addEventListener("input", (e) => {
    let currentLength = DOM.description.value.length;
    DOM.letras_descripcion.textContent = `${currentLength}/120`;
});


