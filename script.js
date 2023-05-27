var facebook = document.getElementById("iconeFacebook");
var instagram = document.getElementById("iconeInstagram");
var twitter = document.getElementById("iconeTwitter");
var inputButton = document.getElementById("inputButton");
var inputEmail = document.getElementById("inputEmail");

facebook.addEventListener('mouseover' , sobreFacebookOn);
facebook.addEventListener('mouseleave' , sobreFacebookOff)

instagram.addEventListener('mouseover' , sobreInstagramOn);
instagram.addEventListener('mouseleave' , sobreInstagramOff);

twitter.addEventListener('mouseover' , sobreTwitterOn);
twitter.addEventListener('mouseleave' , sobreTwitterOff);

inputButton.addEventListener('click', verificar);

function sobreFacebookOn() {
    document.getElementById("iconeFacebook").style.fill = 'white';
}

function sobreFacebookOff() {
    document.getElementById("iconeFacebook").style.fill = 'hsl(223, 87%, 63%)';
}

function sobreInstagramOn() {
    document.getElementById("iconeInstagram").style.fill = 'white';
}

function sobreInstagramOff() {
    document.getElementById("iconeInstagram").style.fill = 'hsl(223, 87%, 63%)';
}

function sobreTwitterOn() {
    document.getElementById("iconeTwitter").style.fill = 'white';
}

function sobreTwitterOff() {
    document.getElementById("iconeTwitter").style.fill = 'hsl(223, 87%, 63%)';
}

function verificar() {
    if (inputEmail.value == '') {
        inputEmail.style.border = '1pt solid red';
        document.getElementById("erroEmail").style.display = 'block'
    } else {
        inputEmail.style.border = '1pt solid gray';
        document.getElementById("erroEmail").style.display = 'none'
    } 
}