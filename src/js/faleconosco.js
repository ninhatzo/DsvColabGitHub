const regexNome = /^\p{L}+(?:[ '\-\.]\p{L}+)+$/u;
const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const regexEmail = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;



function faleconosco(){

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();

    if(document.frmfaleconosco.txtnome.value=="")
        {
            alert("Preencha o campo Nome completo");
            document.frmfaleconosco.txtnome.focus();
            return false;
        }
        else if(document,frmfaleconosco.txtfone.value=="")
        {
            alert("Preencha o campo Telefone");
            document.frmfaleconosco.txtfone.focus();
            return false;
        }
        else if(document,frmfaleconosco.txtemail.value=="")
        {
             alert("Preencha o campo Email");
             document.frmfaleconosco.txtemail.focus();
             return false;
        }
        else
        {
            if (!regexNome.test(nome)) {
                alert("Nome inválido! Use apenas letras.");
                return false;
              }
            
              if (!regexTelefone.test(telefone)) {
                alert("Telefone inválido! Formato: (99) 99999-9999");
                return false;
              }
            
              if (!regexEmail.test(email)) {
                alert("E-mail inválido!");
                return false;
              }
              else{
                
            return true

              }
        }
}