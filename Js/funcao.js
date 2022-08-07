// 
var telaLogin = document.querySelector(".telaLogin");
var telaCadastro = document.querySelector(".telaCadastro");

var buttonProximo = document.querySelector(".form button");
var btnCadastraLink = document.querySelector(".btnCadastraLink");



buttonProximo.addEventListener("click", function(e){
    telaLogin.style.zIndex = 2;
    telaCadastro.style.zIndex = 1;
    
    telaLogin.classList.add("subir");
    telaCadastro.classList.add("descer");
    e.preventDefault();
})


btnCadastraLink.addEventListener("click", function(e){

    telaLogin.style.zIndex = 1;
    telaCadastro.style.zIndex = 2;
    telaLogin.classList.add("descer");
    telaCadastro.classList.add("subir");
    e.preventDefault();
})