/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('get', endpoint);
        xhttp.send();
    })
})
*/

$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const button = $(this);
        $(button).find('i').addClass('d-none');
        $(button).find('span').removeClass('d-none');

        //     $.ajax(endpoint).done(function(resposta) {
        //         const logradouro = resposta.logradouro;
        //         const bairro = resposta.bairro;
        //         const cidade = resposta.localidade;
        //         const estado = resposta.uf;
        //         const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //         $('#endereco').val(endereco)
        //     })



        fetch(endpoint).then(function (resposta) {
            return resposta.json()
        }).then(function (json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
            setTimeout(function () {
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
            }, 1000);

        })
    })

    $('#formulario-pedido').submit(function(evento){
        evento.preventDefault();
        
        if ($('#nome').val().lenght == 0) {
          throw new Error('Digite o nome')
        }
    })
})