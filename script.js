
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword =  document.querySelector("#valor")
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// Conjuntos de caracteres
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Concatenação de todos os conjuntos
const charset = upperCase + lowerCase + digits + specialChars;
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for(let i=0, n = charset.length; i<sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
        
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso! ✅")
    navigator.clipboard.writeText(novaSenha);
    
    
}