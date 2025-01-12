function salvarMensagem(){
    var formularioNome = document.getElementById('formularioNome')
    var formularioSobrenome = document.getElementById('formularioSobrenome')
    var formularioEmail = document.getElementById('formularioEmail')
    var formularioMensagem = document.getElementById('formularioMensagem')

    var dados = JSON.parse(localStorage.getItem('dadosMensagem'))

    if(
        formularioNome.value.trim() === '' || formularioSobrenome.value.trim() === '' || 
        formularioEmail.value.trim() === '' || formularioMensagem.value.trim() === ''
    )

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