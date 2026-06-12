const form = document.getElementById("formPagamento");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("dataNasc").value;

    let dataValor = document.getElementById("dataNasc").value;
    let dataNasc = "-";

    if (dataValor) {
        if (dataValor.includes("-")) {
            let partes = dataValor.split("-"); 
            dataNasc = partes[2] + "/" + partes[1] + "/" + partes[0]; 
        } else {
            dataNasc = dataValor;
        }
    }
    document.getElementById("resDataNac").innerText = dataNasc;
    
    document.getElementById("resNome").textContent =
        document.getElementById("nome").value;

    document.getElementById("resEmail").textContent =
        document.getElementById("email").value;

    document.getElementById("resTelefone").textContent =
        document.getElementById("telefone").value;

    document.getElementById("resOnde").textContent =
        document.getElementById("assunto").value;
    
    document.getElementById("resMensagem").textContent =
        document.getElementById("mensagem").value;

    document.getElementById("confirmacao").style.display = "block";

    document.getElementById("confirmacao").scrollIntoView({
        behavior: "smooth"
    });
});

function enviarCompra() {

    alert(
        `Dados enviados com sucesso!\n\n`
    );

    document.getElementById("formPagamento").reset();

    document.getElementById("confirmacao").style.display = "none";

    window.location.href = "../index.html";
}