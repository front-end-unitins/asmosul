const senha = prompt("Área administrativa.\nDigite a senha:");

if(senha !== "admin123"){

    alert("Acesso negado!");

    window.location.href = "institucional.html";

}

/* DADOS */

let doacoes = [];

/* ELEMENTOS */

const tabela = document.querySelector("tbody");

const totalDoacoes = document.querySelector(".total-doacoes");

const totalArrecadado = document.querySelector(".total-arrecadado");

const familias = document.querySelector(".familias");

const cestas = document.querySelector(".cestas");

const contadorEntradas = document.querySelector(".contador-entradas");

const contadorSaidas = document.querySelector(".contador-saidas");

const contadorItens = document.querySelector(".contador-itens");

const contadorMovimentacoes = document.querySelector(".contador-movimentacoes");

/* FORM */

const formRegistro = document.getElementById("formRegistro");

const nome = document.getElementById("nome");

const tipo = document.getElementById("tipo");

const quantidade = document.getElementById("quantidade");

const valor = document.getElementById("valor");

const statusDoacao = document.getElementById("status");

/* LOCAL STORAGE */

if(localStorage.getItem("doacoes")){

    doacoes = JSON.parse(localStorage.getItem("doacoes"));

}

/* MOSTRAR CAMPOS */

tipo.addEventListener("change", function(){

    if(

        tipo.value === "Cesta Básica" ||

        tipo.value === "Fraldas" ||

        tipo.value === "Roupas"

    ){

        quantidade.style.display = "block";

        valor.style.display = "none";

        valor.value = "";

    }

    else if(tipo.value === "Dinheiro"){

        valor.style.display = "block";

        quantidade.style.display = "none";

        quantidade.value = "";

    }

    else{

        quantidade.style.display = "none";

        valor.style.display = "none";

    }

});

/* TABELA */

function renderizarTabela(){

    tabela.innerHTML = "";

    doacoes.forEach(function(item){

        tabela.innerHTML += `

            <tr>

                <td>${item.doador}</td>

                <td>${item.tipo}</td>

                <td>${item.info}</td>

                <td>${item.status}</td>

                <td>${item.data}</td>

            </tr>

        `;

    });

}

/* DASHBOARD */

function atualizarDashboard(){

    totalDoacoes.innerHTML = doacoes.length;

    let totalEntrada = 0;

    let totalSaida = 0;

    let ultimaMovimentacao = "Nenhuma";

    doacoes.forEach(function(item){

        if(item.tipo === "Dinheiro"){

            const valorItem = Number(item.valorReal);

            if(item.status === "Recebido"){

                totalEntrada += valorItem;

            }

            if(item.status === "Entregue"){

                totalSaida += valorItem;

            }

            ultimaMovimentacao = "R$ " + valorItem;

        }

    });

    const saldo = totalEntrada - totalSaida;

    totalArrecadado.innerHTML = "R$ " + totalEntrada;

    familias.innerHTML = Math.floor(doacoes.length * 1.5);

    cestas.innerHTML = doacoes.length;

    contadorEntradas.innerHTML = totalEntrada;

    contadorSaidas.innerHTML = totalSaida;

    contadorItens.innerHTML = doacoes.length;

    contadorMovimentacoes.innerHTML = doacoes.length;

    document.querySelector(".financeiro-entrada").innerHTML =
        "R$ " + totalEntrada;

    document.querySelector(".financeiro-saida").innerHTML =
        "R$ " + totalSaida;

    document.querySelector(".financeiro-saldo").innerHTML =
        "R$ " + saldo;

    document.querySelector(".financeiro-ultima").innerHTML =
        ultimaMovimentacao;

}

/* REGISTRAR */

formRegistro.addEventListener("submit", function(event){

    event.preventDefault();

    let info = "";

    let quantidadeReal = 0;

    let valorReal = 0;

    if(

        nome.value === "" ||

        tipo.value === "" ||

        statusDoacao.value === ""

    ){

        alert("Preencha todos os campos!");

        return;

    }

    if(tipo.value === "Dinheiro"){

        if(valor.value === ""){

            alert("Digite o valor!");

            return;

        }

        info = "R$ " + valor.value;

        valorReal = valor.value;

    }

    else{

        if(quantidade.value === ""){

            alert("Digite a quantidade!");

            return;

        }

        info = quantidade.value + " unidades";

        quantidadeReal = quantidade.value;

    }

    const novaDoacao = {

        doador: nome.value,

        tipo: tipo.value,

        info: info,

        quantidadeReal: quantidadeReal,

        valorReal: valorReal,

        status: statusDoacao.value,

        data: new Date().toLocaleDateString()

    };

    doacoes.push(novaDoacao);

    localStorage.setItem(

        "doacoes",

        JSON.stringify(doacoes)

    );

    renderizarTabela();

    atualizarDashboard();

    formRegistro.reset();

    quantidade.style.display = "none";

    valor.style.display = "none";

    alert("Movimentação registrada!");

});

/* INICIALIZAÇÃO */

renderizarTabela();

atualizarDashboard();