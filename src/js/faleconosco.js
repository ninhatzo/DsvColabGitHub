const regexNome = /^\p{L}+(?:[ '\-\.]\p{L}+)+$/u;
const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const regexEmail = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;



function faleconosco(){

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();

            if (!regexNome.test(nome)) {
                alert("Campo nome invalido! Nome e sobrenome");
                return false;
              }
            
              if (!regexTelefone.test(telefone)) {
                alert("Campo telefone inválido! Formato: (99) 99999-9999");
                return false;
              }
            
              if (!regexEmail.test(email)) {
                alert("campo E-mail inválido!");
                return false;
              }
              else{
                alert("Obrigado pela mensagem! Entraremos em contato em 7 dias.")
            return true

              }
}