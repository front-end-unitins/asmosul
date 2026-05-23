document.addEventListener("DOMContentLoaded", function () {

    // Máscara CPF
    const cpfInput = document.querySelector('input[name="cpf"]');

    cpfInput.addEventListener("input", function () {

        let valor = this.value.replace(/\D/g, "");

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        this.value = valor;
    });

    // Máscara Telefone
    const telefoneInput = document.querySelector('input[type="tel"]');

    telefoneInput.addEventListener("input", function () {

        let valor = this.value.replace(/\D/g, "");

        if (valor.length <= 10) {

            // (xx) xxxx-xxxx
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

        } else {

            // (xx) xxxxx-xxxx
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        }

        this.value = valor;
    });

});