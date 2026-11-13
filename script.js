
/*
========================================
 MODELLЕ CENTER | ESTÉTICA
 CONFIGURAÇÃO DA LOJA
========================================

Quando o endereço do Cloudflare mudar,
altere SOMENTE a linha abaixo.

*/

const LINK_DA_LOJA = "https://measured-mark-defend-nevada.trycloudflare.com/";

/* NÃO PRECISA ALTERAR ABAIXO */

const botao = document.getElementById("botaoLoja");

const enderecoConfigurado =
    LINK_DA_LOJA.startsWith("https://") &&
    !LINK_DA_LOJA.includes("SEU-LINK-ATUAL");

if (enderecoConfigurado) {

    botao.href = LINK_DA_LOJA;

} else {

    botao.addEventListener("click", function(event) {

        event.preventDefault();

        alert("O endereço da nossa loja está sendo atualizado. Tente novamente em instantes.");

    });

}
