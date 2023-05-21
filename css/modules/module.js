// Veo si se conecta a la consola del navegador.
console.log("Conexion establecida!");

// Inputs/form
const nameInput = document.querySelector("#nameInput");
const numberInput = document.querySelector("#numberInput");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");
const cvcInput = document.querySelector("#cvcInput");
const form = document.querySelector("#form");
const thankYou  = document.querySelector("#thankYou");
const thankYouBtn  = document.querySelector("#thankYou-btn");

// Display/card
const cardName = document.querySelector("#displayName");
const cardNumber = document.querySelector("#displayNumber");
const cardMonth = document.querySelector("#displayMonth");
const cardYear = document.querySelector("#displayYear");
const cardCvc = document.querySelector("#displayCvc");


// La validacion de caracteres, deberia de ser lo primero que realize el js (falta hacer)
// luego de validado el caracter podria seguir a pasarlo por el display ("ESPEJO")
// Luego de escapado del input, ver si se cumple con los requerimientos de los campos


// Espejo, muetras los caracteres ingresado en los inputs del form, en el display de la card.
const mirrow = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    cardName.innerHTML = fieldValue;

    if (fieldValue.length === 0) {
        cardName.innerHTML = `${field.name}`;
    }
}
nameInput.addEventListener("input", mirrow);

// Espejo "manual"
numberInput.addEventListener("input",(e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    cardNumber.innerHTML = fieldValue;

    if (fieldValue.length === 0) {
        cardNumber.innerHTML = `${field.name}`;
    }
})
monthInput.addEventListener("input", (e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    cardMonth.innerHTML = fieldValue;

    if (fieldValue.length === 0) {
        cardMonth.innerHTML = `${field.name}`;
    }
})
yearInput.addEventListener("input",(e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    cardYear.innerHTML = fieldValue;

    if (fieldValue.length === 0) {
        cardYear.innerHTML = `${field.name}`;
    }
})
cvcInput.addEventListener("input",(e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    cardCvc.innerHTML = fieldValue;

    if (fieldValue.length === 0) {
        cardCvc.innerHTML = `${field.name}`;
    }
})

// Error y Requerimiento de los campos
const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    if (fieldValue.length === 0) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Can't be blank";
    } else  {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";       
    }
}

nameInput.addEventListener("input", validateEmptyField);
numberInput.addEventListener("input", validateEmptyField);
monthInput.addEventListener("input", validateEmptyField);
yearInput.addEventListener("input", validateEmptyField);
cvcInput.addEventListener("input", validateEmptyField);

//ThankYou,
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    form.classList.add("hiden");
    thankYou.classList.remove("hiden");
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