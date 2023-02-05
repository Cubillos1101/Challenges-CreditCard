
let cardName = document.querySelector('#name-card');
let nameCardImg = document.querySelector('.name-card-img');
let nameError = document.querySelector('.name-error');

let cardNumber = document.querySelector('#number-card');
let numberCardImg = document.querySelector('.number-card-img');
let numberError = document.querySelector('.error-number');

let mmCard = document.querySelector('#mm-card');
let mmCardImg = document.querySelector('.mm-card-img');
let mmError = document.querySelector('.mm-error');

let yyCard = document.querySelector('#yy-card');
let yyCardImg = document.querySelector('.yy-card-img');

let cvcCard = document.querySelector('#cvc-card');
let cvcCardImg = document.querySelector('.cvc-card-img');
let cvcError = document.querySelector('.cvc-error');

let btnConfirm = document.querySelector('.confirm')

let formSection = document.querySelector('.info-card');
let thankSection = document.querySelector('.thanks-you');


let newNameCard = []
let newNumberCard = []
let newMountCard = []
let newYearsCard = []
let newCvcCard = []
let nameValid = []
let numberValid = []
let mmValid = []
let yyValid = []
let cvcValid = []

let regExp = /[A-z]/g;


cardName.addEventListener('keyup', addName);
cardNumber.addEventListener('keyup', addNumber);
mmCard.addEventListener('keyup', addMM);
yyCard.addEventListener('keyup', addYY);
cvcCard.addEventListener('keyup', addCVC);
btnConfirm.addEventListener('click', confirm);


function addName(){
    
    newNameCard = cardName.value;
    nameCardImg.innerHTML = newNameCard;
    
}
function addNumber(){
    let newNumberCard = []
    newNumberCard = cardNumber.value;
    numberCardImg.innerHTML = newNumberCard;

    if(regExp.test(cardNumber.value)){
        showError(cardNumber, numberError, 'Wrong format, numbers only');
    }else{
        cardNumber.value = cardNumber.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        showError(cardNumber, numberError, '', false);
    }
}

function addMM(){
    newMountCard = mmCard.value;
    mmCardImg.innerHTML = newMountCard;
    
    if (parseInt(mmCard.value)> 0 && parseInt(mmCard.value)<= 12){
    }else{
        mmError.innerHTML ='Date not valid';
    }
return
}
function addYY(){
    newYearsCard = yyCard.value;
    yyCardImg.innerHTML = newYearsCard;
    if (parseInt(yyCard.value)> 22 && parseInt(yyCard.value)<= 28){
    }else{
        mmError.innerHTML ='Years not valid';
    }
    return
}
function addCVC(){
    newCvcCard = cvcCard.value;
    cvcCardImg.innerHTML = newCvcCard;
    return
}

function confirm(){
    if (cardName.value == ''){
        nameValid = false;
        nameError.innerHTML ='Cant be blank';
    }else{
        nameValid = true;
    }

    if (cardNumber.value == ''){
        numberValid = false;
        numberError.innerHTML ='Cant be blank';
    }else{
        numberValid = true;
    }

    if (parseInt(mmCard.value)> 0 && parseInt(mmCard.value)<= 12){
        mmValid = true;
    }else{
        mmValid = false;
        mmError.innerHTML ='Cant be blank';
    }

    if (parseInt(yyCard.value)> 23 && parseInt(yyCard.value)<= 28){
        yyValid = true;
    }else{
        yyValid = false;
        mmError.innerHTML ='cant be blank';
    }

    if (cvcCard.value.length == 3){
        cvcValid = true;
    }else{ 
        cvcValid = false;
        cvcError.innerHTML ='Cant be blank';
    }

    if(nameValid == true && numberValid == true && mmValid == true  && yyValid == true  && cvcValid == true){
        formSection.style.display = 'none';
        thankSection.style.display = 'block';
    }
return
}

function showError(divInput, divError, msgError, show = true){
    if(show){
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(0, 100%, 66%)';
    }else{
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
    
}

/*
function validateLetters(input, divError){
    // Validando que haya una letra,
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        showError(input, divError, 'Wrong format, numbers only');
    }else{
        showError(input, divError, '', false);
    }
}
 */