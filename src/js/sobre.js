function validarDuvidas() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)) {
    abrirPopup(false, "O email inserido está inválido!")
    return false
  }

  if (/^\(?[1-9]{2}\)? ?9[0-9]{4}-?[0-9]{4}$/.test(document.getElementById("fone").value)) {
    abrirPopup(false, "O campo Telefone está inválido!")
    return false
  };

  abrirPopup(true, "Sujestão enviado com sucesso!")
  return false
}

function abrirPopup(sucesso, mensagem) {
  popup.style.display = "block";
  console.log(1)
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