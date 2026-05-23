const senha = prompt("Área administrativa.\nDigite a senha:");

const senhaCorreta = "admin123";

if(senha !== senhaCorreta){

    alert("Acesso negado!");

    window.location.href = "institucional.html";

}

/* FORMULÁRIO */

const formulario = document.querySelector("form");

const campos = document.querySelectorAll("input, select");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let valido = true;

    campos.forEach(function(campo){

        if(campo.value === ""){

            campo.style.border = "2px solid red";

            valido = false;

        }else{

            campo.style.border = "2px solid #A5C946";

        }

    });

    if(valido){

        alert("Entrega registrada com sucesso!");

        formulario.reset();

        campos.forEach(function(campo){

            campo.style.border = "2px solid transparent";

        });

    }else{

        alert("Preencha todos os campos.");

    }

});

/* EFEITO NOS CAMPOS */

campos.forEach(function(campo){

    campo.addEventListener("focus", function(){

        campo.style.boxShadow = "0 0 10px rgba(40,156,207,0.35)";

    });

    campo.addEventListener("blur", function(){

        campo.style.boxShadow = "none";

    });

});