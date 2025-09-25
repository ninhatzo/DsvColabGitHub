const regexNome = /^\p{L}+(?:[ '\-\.]\p{L}+)+$/u;
const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const regexEmail = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;

function faleconosco() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!regexNome.test(nome)) {
    abrirPopup(false, "Nome inválido! Use apenas letras.");
    return false;
  }

  if (!regexTelefone.test(telefone)) {
    abrirPopup(false, "Telefone inválido! Formato: (99) 99999-9999");
    return false;
  }

  if (!regexEmail.test(email)) {
    abrirPopup(false, "E-mail inválido!");
    return false;
  }

  abrirPopup(true, "Dentro de alguns dias entraremos em contado. Obrigado pela preferência!")
  limparCampos()
  return false
}

function limparCampos() {
  document.getElementById("telefone").value = null
  document.getElementById("nome").value = null
  document.getElementById("email").value = null
  document.getElementById("mensagem").value = null
}

function abrirPopup(sucesso, mensagem) {
  popup.style.display = "block";
  const color = sucesso ? "#008eb6" : "#FF0000"

  popup.style.backgroundColor = color

  document.getElementById("mensagem-pop-up").textContent = mensagem

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    popup.style.display = "none";
  }, 10000);
}

const popup = document.getElementById("popup");
const fechar = document.getElementById("fecharPopup");
let timeoutId;

fechar.addEventListener("click", () => {
  popup.style.display = "none";
  clearTimeout(timeoutId);
});