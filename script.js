function salvarMensagem(){
    var formularioNome = document.getElementById('formularioNome')
    var formularioSobrenome = document.getElementById('formularioSobrenome')
    var formularioEmail = document.getElementById('formularioEmail')
    var formularioMensagem = document.getElementById('formularioMensagem')
    if(
        formularioNome.value.trim() === '' || formularioSobrenome.value.trim() === '' || 
        formularioEmail.value.trim() === '' || formularioMensagem.value.trim() === ''
    ){
        alert('Todos os campos devem ser preenchidos')
        return;
    }
    var dados = JSON.parse(localStorage.getItem('dadosMensagem'))

    if(dados === null){;
        dados = [];
    }
    var registrar = {
        nome: formularioNome.value,
        sobrenome: formularioSobrenome.value,
        email: formularioEmail.value,
        mensagem: formularioMensagem.value
    }
    dados.push(registrar);
    localStorage.setItem('dadosMensagem',JSON.stringify(dados));

    formularioNome.value ='';
    formularioSobrenome.value = '';
    formularioEmail.value = '';
    formularioMensagem.vlaue = '';
    alert('Mensangem enviada com sucesso!')
}
function salvarNewsletter() {
    var Newsletter = document.getElementById('Newsletter')
    //if (Newsletter.value.trim() === ''){
    //    alert('Por favor, preencha o e-mail.')
    //    return;
    //}
    alert('Obrigado por assinar nossa newsletter!')
}