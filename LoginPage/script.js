function mostraSenha(obj) {
    var obj = document.getElementById('myPassword');
    var imagem = document.getElementById('olho');
    if (obj.type == "password"){
        obj.type = "text";
        imagem.src = 'img/olhoaberto.png';
    }else{
        obj.type = "password";
        imagem.src = 'img/olhofechado.png';
    }     
}

function verifyEmail() {

    var emailInput = document.getElementById("myEmail");
    var display = document.getElementById("display_verify");
    var email = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailInput.classList.add("invalid");
        if(email != ""){
            display.innerHTML = "Email inválido, Tente Novamente!";
            return;
        }
        else{
            display.innerHTML = "Campo Inválido, Preencha Corretamente";
        }
    } else {
        emailInput.classList.remove("invalid");
        display.innerHTML = "Login Verificado"
        return;
    }

}
function limpaDiv() {

    var display = document.getElementById("display_verify");
    var email = document.getElementById("myEmail");
    var senha = document.getElementById("myPassword");

    display.innerText = '';
    email.innerText = '';
    senha.innerHTML('')
    return;

}