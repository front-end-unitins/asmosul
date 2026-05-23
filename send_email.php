<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email_remetente = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $para = "virgulinotamirys@gmail.com";
    $assunto = "Mensagem enviada pelo site";
    
    $conteudo = "Nome: $nome\n";
    $conteudo .= "E-mail: $email_remetente\n";
    $conteudo .= "Mensagem:\n$mensagem\n";

    $cabecalhos = "From: $email_remetente";

    if (mail($para, $assunto, $conteudo, $cabecalhos)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
}
?>