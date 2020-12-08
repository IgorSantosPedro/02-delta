function validaForm() {
var nome = document.forms["myForm"]["nome"].value;
if(nome === null || nome === "" || nome.length<3){
    alert("Insira o nome");
    return false;
}

var sobrenome = document.forms["myForm"]["sobrenome"].value;
if(sobrenome === null || sobrenome === "" || sobrenome.length<3){
    alert("Insira o sobrenome");
    return false;
}

var cel = document.forms["myForm"]["cel"].value;
    if( cel === null || cel === ""){
        alert("Insira um número de celular");
        return false;
    }

var email = document.forms["myForm"]["email"].value;
    if( email === null || email === ""){
        alert("Insira um email");
        return false;
    }

var senha = document.forms["myForm"]["senha"].value;
    if( senha === null || senha === ""){
        alert("Insira uma senha válida");
        return false;
    }

var confir = document.forms["myForm"]["confir"].value;
    if( confir !== senha){
        alert("As confirmação não está correta");
        return false;
    }
}

function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}