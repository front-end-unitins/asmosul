<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = strip_tags(trim($_POST["nome"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $mensagem = trim($_POST["mensagem"] ?? "");

    $destinatario = "virgulinotamirys@gmail.com";
    $assunto = "Nova mensagem do formulário";

    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Mensagem: $mensagem\n";

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Acesso negado.";
}
?>
