function validarSujestoes() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)) {
    alert("O email inserido está inválido!")
    return false
  }

  if (/^\s*$/.test(document.getElementById("comentario").value)) {
    alert("O campo comentário não pode ser vazio!")
    return false
  }

  return true
}