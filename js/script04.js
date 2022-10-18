// Curso de jQuery

// Aula 04 - Eventos
$(document).ready(function(){
    
    $('p').html('Elemento selecionado por tag');

    $('#teste04').html('Elemento selecionado por id');

    $('.teste04').html('Elemento selecionado por classe');

    $('button').addClass('btn');

    $('div').addClass('container');

    // Eventos no javascript puro:
    // documento.querySelector('.btn').addEventListenner

    // ---------------------------------------
    // Eventos no jQuery:
    // ---------------------------------------
    // Clique: .click
    $('p').click(function(){
        $(this).html('Mudei quando fui clicado!');
    });

    // Clique duplo: .dblclick
    $('p').dblclick(function(){
        $(this).html('Mudei quando recebi um clique duplo!');
    });

    // Clique com Toggle:
    /*$('.btn').click//clique
    (function(){
        $('.container').toggle//alternar
        //Aqui dentro podemos passar parametros como velocidade de execução e também um retorno quando finalizar a execução da função (call-back): 'slow', 'fast' ou tempo em milesemos
        ('fast');
    });*/

    // Também é possível selecionar vários elementos com o uso das crases ``
    $('.btn').click(function(){
        $(`.container, h1`).toggle('fast');
    });

    // Ao entar com o mouse: .mouseenter
    $('.container').mouseenter(function(){
        $(this).css('background','red');
    });

    // Ao sair com o mouse: .mouseleave
    $('.container').mouseleave(function(){
        $(this).css('background', 'initial');
    });

    // Atalho do .mouseenter com .mouseleave: .hover
    $('.container').hover(
        function(){ //está será interpretada como .mouseenter
            $(this).css('background','red');
        },

        function(){ //está será interpretada como .mouseleave
            $(this).css('background','initial');
        }
    );

    // Ao clique do mouse: .mousedown
    $('.container').mousedown(function(){
        $(this).css('gap','40px');
    });

    // Ao soltar o clique do mouse: .mouseup
    $('.container').mouseup(function(){
        $(this).css('gap','initial');
    });

    // Ao focar: .focus
    $('#input04').focus(function(){
        $(this).css('background','#101010');
    });

    // Ao tirar o foco: .blur
    $('#input04').blur(function(){
        $(this).css('background', 'var(--bg-dark0)');
        $(this).css('color','white');
        $(this).css('border','none')
    });

    // Metodo .on
    $('.btn').on({
        mouseenter: function(){
            //oque vai acontecer...
        },
        mouseleave: function(){
            //oque vai acontecer...
        },
        mousedown: function(){
            //oque vai acontecer...
        }

        // OBS: podemos colocar quantos eventos quisermos
    })

});