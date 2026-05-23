const cpfCNPJ = document.getElementById("cpfCNPJ");

const telefone = document.getElementById("telefone");

/* CPF E CNPJ */

cpfCNPJ.addEventListener("input", function(){

    let valor = cpfCNPJ.value.replace(/\D/g, "");

    /* CPF */

    if(valor.length <= 11){

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    }

    /* CNPJ */

    else{

        valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");

        valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

        valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");

        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

    }

    cpfCNPJ.value = valor;

});

/* TELEFONE */

telefone.addEventListener("input", function(){

    let valor = telefone.value.replace(/\D/g, "");

    /* TELEFONE FIXO */

    if(valor.length <= 10){

        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

    }

    /* CELULAR */

    else{

        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    }

    telefone.value = valor;

});