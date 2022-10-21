// Curso de jQuery

// Aula 07 - Requisições AJAX
$(document).ready(function(){

    // Método .load()
    $('#carregar-ajax').click(function(){
        $('#ajax-content').load('../../texto/texto_load.txt');
    });

    $('#get').click(function(){
        $('#form-viacep').toggleClass('hidden');
        $('#ajax-content').load('../../texto/texto_get.txt');
    });

    $('#voltar_get').click(function(){
        $('#ajax-content').load('../../texto/texto_load.txt')
        $('#form-viacep').toggleClass('hidden');
    });

    $('#voltar_inicio').click(function(){
        $('body').load('aula07.html')
    });

    // Método .get()
    // $('#cep').blur(function(){
    //     var cep = $(this).val();

    //     $.get('https://viacep.com.br/ws/' + cep + '/json/', function(dados,status){
    //         console.log(status);

    //         if(status == 'success'){
    //             $('#logradouro').val(dados.logradouro);
    //             $('#complemento').val(dados.complemento);
    //             $('#bairro').val(dados.bairro);
    //             $('#localidade').val(dados.localidade);
    //             $('#uf').val(dados.uf);
    //         }else{
    //             alert('A requisição não pode ser realizada...');
    //         };

    //     });
    // });

    // Método .post()
    // $.post('https://endereco-do-site',{valores. ex: nome: 'nome', idade: 'idade'}, function(dados, status){
    //     retorno = o que vai acontecer com o retorno
    // });

    // Método .ajax()
    // $.ajax({
    //     url: 'https://viacep.com.br/ws/' + cep + '/json/',
    //     type: 'GET',
    //     seccess: function(dados, status){
    //         /* O que vai acontecer caso o status seja seccess */
    //         $('#logradouro').val(dados.logradouro);
    //         $('#complemento').val(dados.complemento);
    //         $('#bairro').val(dados.bairro);
    //         $('#localidade').val(dados.localidade);
    //         $('#uf').val(dados.uf);
    //     },
    //     error: function(){
    //         /* O que vai acontecer caso o status seja error */
    //         alert('A requisição não pode ser realizada...');
    //     }
    // });


    // Agora vamos fazer a mesma requisição feita acima com o método .get(), agora usando o método .ajax():
    $('#cep').blur(function(){
        var cep = $(this).val();

        $.ajax({
            url: 'https://viacep.com.br/ws/' + cep + '/json/',
            type: 'GET',
            success: function(dados){
                /* O que vai acontecer caso o status seja seccess */
                console.log(dados);
                $('#logradouro').val(dados.logradouro);
                $('#complemento').val(dados.complemento);
                $('#bairro').val(dados.bairro);
                $('#localidade').val(dados.localidade);
                $('#uf').val(dados.uf);
            },
            error: function(){
                /* O que vai acontecer caso o status seja error */
                // $('#alerta').toggleClass('hidden');
                $("#cep").css('border','1px solid rgb(255, 73, 73)');
            }
        });

    });

});