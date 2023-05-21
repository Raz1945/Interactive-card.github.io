// Veo si se conecta a la consola del navegador.
console.log("Conexion establecida!");

// Constantes
const form = document.querySelector("#form");
const thankYou  = document.querySelector("#thankYou");
const thankYouBtn  = document.querySelector("#thankYou-btn");

// Inputs/form
const nameInput = document.querySelector("#nameInput");
const numberInput = document.querySelector("#numberInput");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");
const cvcInput = document.querySelector("#cvcInput");

// Display/card
const cardName = document.querySelector("#displayName");
const cardNumber = document.querySelector("#displayNumber");
const cardMonth = document.querySelector("#displayMonth");
const cardYear = document.querySelector("#displayYear");
const cardCvc = document.querySelector("#displayCvc");
 
const regex = {
    letras: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, // Expresión regular que solo permite letras, espacios y acentos
    numeros: /^[0-9]*$/, // Expresión regular que solo permite numeros.
};

// Constantes de Validación
const validate = {
    name: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
}

// Funciones de Validación 
// -Para cuando los campos del formulario se encuentren vacios.
const validateEmptyField = (e) => {
    const field = e.target; 
    const fieldValue = e.target.value;

    if (fieldValue.length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Can't be blank";
    } else  {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";       
    }
};

// -Para verificar que los datos ingresados tengan los tipos de caracteres correctos segun el caso.
const validateFormField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    switch(field.id) { 
        // Itera segun el id del evento que corresponda 
        case "nameInput":
            // Formato Correcto
            if (regex.letras.test(fieldValue)){ 
                nameInput.addEventListener("input", validateEmptyField);
                validate.name = true;               
            //Formato Incorrecto
            } else { 
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error");
                field.nextElementSibling.innerText = "Wrong format, only letters";
                validate.name = false;
            }
        break;
        case "numberInput":
            if (regex.numeros.test(fieldValue)){
                numberInput.addEventListener("input", validateEmptyField);
                validate.number = true;
            } else {
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error");
                field.nextElementSibling.innerText = "Wrong format, numbers only";
                validate.number = false;
            }
        break;
        case "monthInput":
            if (regex.numeros.test(fieldValue)){
                monthInput.addEventListener("input", validateEmptyField);
                validate.month = true;
            } else {
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error");
                field.nextElementSibling.innerText = "Wrong format, numbers only";
                validate.month = false;
            }
        break;
        case "yearInput":
            if (regex.numeros.test(fieldValue)){
                yearInput.addEventListener("input", validateEmptyField);
                validate.year = true;
            } else {
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error");
                field.nextElementSibling.innerText = "Wrong format, numbers only";
                validate.year = false;
            }
        break;
        case "cvcInput":
            if (regex.numeros.test(fieldValue)){
                cvcInput.addEventListener("input", validateEmptyField);
                validate.cvc = true;
            } else {
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error");
                field.nextElementSibling.innerText = "Wrong format, numbers only";
                validate.cvc = false;
            }
        break;
        }
};

nameInput.addEventListener("keydown", validateFormField);  
numberInput.addEventListener("keydown", validateFormField);  
monthInput.addEventListener("keydown", validateFormField);  
yearInput.addEventListener("keydown", validateFormField);  
cvcInput.addEventListener("keydown", validateFormField);  

// Muesta los caracteres ingresado en los inputs del form, en el display de la card.
const updateCardDisplay = (event) => {
    const field = event.target;// Elemento del DOM que desencadenó el event
    const fieldValue = event.target.value;// Valor de dicho elemento

    switch (field.id){ 
    // Itera segun el id del evento que corresponda 
        case "nameInput":
            // Valida que este correcto antes de mostrar en el display de la card
            // Tomando encuenta si el elemento contiente o no, la clase '.invalid'
            if (field.classList.contains("invalid")){
                break;
            } else{ 
                cardName.innerHTML = fieldValue; // "captura" el valor ingresado en los inputs.
                if (fieldValue.length === 0) {
                    cardName.innerHTML = `${field.name}`;
                }
            }
        break;
        case "numberInput":
            if (field.classList.contains("invalid")){
                break;
            } else{ 
                let numberDisplay = ""; // Almacena el numero con el 'estilo' 
                for (let i = 0; i < fieldValue.length; i++) {
                    const posicionNumero = fieldValue[i];
                    numberDisplay += posicionNumero; 
                    if ((i+1) % 4 == 0){ 
                        // si el modulo de la posicion es 0, añade u nespacio
                        numberDisplay +=" ";
                    }
                }
                cardNumber.innerHTML = numberDisplay;
                if (fieldValue.length === 0) {
                    cardNumber.innerHTML = `${field.name}`;
                }
            }
        break;
        case "monthInput":
            if (field.classList.contains("invalid")){
                break;
            } else {
                cardMonth.innerHTML = fieldValue;
                if (fieldValue.length === 0) {
                    cardMonth.innerHTML = `${field.name}`;
                }
            }
        break;
        case "yearInput":
            if (field.classList.contains("invalid")){
                break;
            } else {
                cardYear.innerHTML = fieldValue;
                if (fieldValue.length === 0) {
                    cardYear.innerHTML = `${field.name}`;
                }
            }
        break;
        case "cvcInput":
            if (field.classList.contains("invalid")){
                break;
            } else {
                cardCvc.innerHTML = fieldValue;
                if (fieldValue.length === 0) {
                    cardCvc.innerHTML = `${field.name}`;
                }
            }
        break;
    }
}

nameInput.addEventListener("input", updateCardDisplay);
numberInput.addEventListener("input", updateCardDisplay);
monthInput.addEventListener("input", updateCardDisplay);
yearInput.addEventListener("input", updateCardDisplay);
cvcInput.addEventListener("input", updateCardDisplay);

//Evento ThankYou ocurre cuando se confirme el formulario 
form.addEventListener("submit", (e) =>{
    e.preventDefault(); // cancela el evento si es necesario.
    // Valida que lo datos ingresados esten correctos antes de enviar el formulario
    if (validate.name && validate.number && validate.month && validate.year && validate.cvc){ 
        form.classList.add("hiden");
        thankYou.classList.remove("hiden");
    }
})

thankYouBtn.addEventListener("click", () => {
    form.classList.remove("hiden");
    thankYou.classList.add("hiden");
    form.reset();
    cardName.innerText = "Gonzalo Sanchez";
    cardNumber.innerText = "3000 5278 9631 0100";
    cardMonth.innerText = "07";
    cardYear.innerText = "23";
    cardCvc.innerText = "757";    
})

