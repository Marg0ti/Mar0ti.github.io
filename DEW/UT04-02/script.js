const DOM = {
    user : document.getElementById('NombreUsuario'),
    password : document.getElementById('Contrasena'),
    showpass : document.getElementById('showpass'),

    name : document.getElementById('Nombre'),
    lastname : document.getElementById('Apellidos'),
    phone : document.getElementById('Telefono'),
    number : document.getElementById('CodigoPostal'),
    document_type : document.getElementById('TipoDocumento'),
    document_number : document.getElementById('DniNie'),

    cuenta : document.querySelectorAll('input[name="CuentaComo"]'),
    cuenta_particular : document.getElementById('cuenta_particular'),
    cuenta_empresa : document.getElementById('cuenta_empresa'),

    nacimiento : document.getElementById('AnioNacimiento'),

    music : document.getElementById('music'),
    deporte : document.getElementById('deporte'),
    games : document.getElementById('games'),
    diy : document.getElementById('diy'),
    art : document.getElementById('art'),
    book : document.getElementById('book'),
    aficiones : document.getElementById('Aficiones'),

    title : document.getElementById('PublicacionTitulo'),
    description : document.getElementById('PublicacionDescripcion'),

    letras_titulo : document.getElementById('letras-titulo'),
    letras_descripcion : document.getElementById('letras-descripcion'),
    enviar : document.getElementById('enviar'),

    validation : document.getElementById("form-validations")
}

DOM.enviar.addEventListener("click", (e) => {
    
    DOM.validation.textContent = '';
    let isValid = true;

    const MENSAJE = "Campo obligatorio";

    const ELEMENTS = [DOM.user, DOM.password, DOM.name, DOM.lastname, DOM.phone, DOM.number, DOM.document_type, DOM.document_number, DOM.nacimiento, DOM.title, DOM.description];

    ELEMENTS.forEach(element => {
        if (element.validationMessage){
            eliminarMensajeError(element);
            DOM.validation.appendChild(createMessageError( element.name , element.validationMessage));
            isValid = false;
            mensajePersonalizado(element, MENSAJE);
        }
        
    });

  
    let cuentaChecked = false;
    DOM.cuenta.forEach((radio) => {
        eliminarMensajeError(DOM.cuenta[0]);
        if (radio.checked) {
            cuentaChecked = true;
        }
    });
    if (!cuentaChecked) {
        mensajePersonalizado(DOM.cuenta[0], "Debes seleccionar una opción");
        DOM.validation.appendChild(createMessageError(DOM.cuenta[0].name, DOM.cuenta[0].validationMessage));
        isValid = false;
    }

    let cp = parseInt(DOM.number.value);
    if ( cp != null && cp < 38000 || cp >=39000 ) {
        eliminarMensajeError(DOM.number);
        mensajePersonalizado(DOM.number, "El código postal debe tener 5 dígitos y empezar por 38");
        DOM.number.setCustomValidity("No cumple con el formato de código postal");
        isValid = false;
    }

   
    let idNumber = DOM.document_number.value;
    let idTipo = "dni";
    idNumber.toUpperCase();
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    if (/^[XYZ]\d{7}[A-Z]$/.test(idNumber)) {
        idNumber = idNumber
                        .replace('X', '0')
                        .replace('Y', '1')
                        .replace('Z', '2');
        idTipo = "nie";
    }

    if(idNumber.length == 9 && !isNaN(idNumber.substring(0,8)) && isNaN(idNumber.substring(8,9))){
        let num = idNumber.substring(0,8);
        let letra = idNumber.substring(8,9);

        let resto = num % 23;

        console.log(DOM.document_type.value)
        if(letra != letras[resto] || DOM.document_type.value != idTipo){
            eliminarMensajeError(DOM.document_number);
            mensajePersonalizado(DOM.document_number, "El documento debe ser correcto");
            DOM.document_number.setCustomValidity("No válido");
            isValid = false;
        }else{
            console.log("Documento correcto");
        }
    }
    



    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let checked = Array.prototype.slice.call(checkboxes).filter(x => x.checked).length;
    eliminarMensajeError(DOM.aficiones);
    if (checked < 2) {
        mensajePersonalizado(DOM.aficiones, "Debes seleccionar al menos dos opciones");
        let mensajeCheckbox= "";
        checkboxes.forEach(x => {
            x.setCustomValidity("No válido");
            x.classList.add('invalid');
            mensajeCheckbox = x.validationMessage;
        });
        DOM.validation.appendChild(createMessageError( DOM.aficiones.name , mensajeCheckbox));
        isValid = false;
    }else{
        checkboxes.forEach(x => {
            x.setCustomValidity("");
            x.classList.remove('valid');
        });
        console.log(DOM.games.value);
        const DOMAficiones = [DOM.games, DOM.music, DOM.deporte, DOM.diy, DOM.art, DOM.book];
        DOM.aficiones.value = DOMAficiones.filter(x => x.checked).map(x => x.value).join(", ");
       
    }


    if (isValid) {
        console.log("Formulario válido");
        
    } else {
        e.preventDefault();
         
    }

});


const createMessageError = ( element, mensaje) => {
    let span = document.createElement("span");
    span.textContent = `${element}: ${mensaje}`;
    return span;
}

const mensajePersonalizado = (node, mensaje) => {
    let parent = node.parentNode;
    let span = document.createElement("span");
    span.textContent = mensaje;
    parent.appendChild(span);
}

const eliminarMensajeError = (node) => {
    const parent = node.parentNode;
    const spans = parent.querySelectorAll("span");
    spans.forEach(span => parent.removeChild(span));
};

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


document.addEventListener("DOMContentLoaded", (e) => {
    DOM.letras_titulo.textContent = `0/15`;
    DOM.letras_descripcion.textContent = `0/120`;

    for (let anio = 2009 ; anio >= 1920; anio--){
        const opcion = document.createElement("option");
        opcion.value = anio;
        opcion.textContent = anio;
        DOM.nacimiento.appendChild(opcion);
    }
    
});
