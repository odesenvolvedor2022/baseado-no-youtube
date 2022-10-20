// Curso de jQuery

// Aula 06 - Manipulando o DOM
$(document).ready(function(){
    $('.section06').prepend(
        `<img id="jquery" src="https://icon-library.com/images/jquery-icon-png/jquery-icon-png-21.jpg" alt="Google">
        <h1>O jQuery pode manipular o DOM</h1>
        <h2>DOM = Document Object Model (Modelo de Objeto de Documento)</h2>
        <p>Em outras palavras é a árvore de elementos do nosso código. O jQuery pode acessar e atualizar dinamicamente o conteúdo, a estrutura e o estilo de um documento.</p>
        <p>Tudo pode ser modificado, adicionado ou removido usando jQuery.</p>
        <input id="campo_texto" type="text" placeholder="Digite algo...">
        <a class="btn" id="btn-redirect" href="https://jquery.com">Ir para o jquery</a>`
    );

    // var htmlH1 = $('h1').html();
    // alert(htmlH1);

    // var htmlH2 = $('h2').html();
    // alert(htmlH2);

    // var textP = $('p').text();
    // alert(textP);

    $('#campo_texto').blur(function(){
        var campo_texto = $(this).val();
        alert(campo_texto);
    });

    $('#btn-redirect').click(function(){
        var link = $(this).attr('href');
        alert('Você será redirecionado para: ' + link);
    });

    $('img').click(function(){
        var src = $(this).attr('src');
        alert('O caminho desta imagem é: ' + src);
    });

    $('#trocar-img').click(function(){
        $('img').css('transition','1s ease');
        $('img').attr('src','https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png').css('transform','scale(1.1)');
        $(this).hide('fast');
    });

    // TROCAR O LINK E O TEXTO DO BOTÃO DE REDIRECIONAMENTO
    $('#trocar-link').click(function(){
        $('#btn-redirect').text('Ir para o google');
        $('#btn-redirect').attr('href','https://google.com');
        $(this).hide('fast');
    });

    // ATRIBUIR TEXTO AO CAMPO
    $('#atribuir-texto').click(function(){
        $('#campo_texto').val('Texto atribuído com um clique!');
        $(this).hide('fast');
        var campoTexto = $('#campo_texto').val();
        $('#campo_texto').focus();
    });

    // append (adicionar após) 20:30 min
    $('#append').click(function(){
        $('#divs').append('<div class="append new"></div>');
    });

    // prepend (adiocionar antes)
    $('#prepend').click(function(){
        $('#divs').prepend('<div class="prepend new"></div>')
    });

    // ZERAR
    // Apagar todas as divs adicionadas com o metodo empty()
    $('#zerarDivs').click(function(){
        $('#divs').empty('slow');
    });

    // REMOVER ELEMENTOS
    // remove() 24:30 min
    $('#removerDivs').click(function(){
        $('.new:last-child').remove();
    });

    // MANIPULANDO O CSS
    // addClass(), removeClass() e toggleClass()
    $('#toggleTema').click(function(){
        $('body').toggleClass('light');
        $('body').css('transition','.3s ease');
        var classBody = $('body').attr('class');

        if(classBody == 'light'){
            $(this).text('Dark');
        }else{
            $(this).text('Light');
        };
        
        var caminhoImg = $('img').attr('src');
        
        if(caminhoImg == 'https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png'){
            $('img').attr('src','https://icon-library.com/images/jquery-icon-png/jquery-icon-png-21.jpg');
        }else{
            $('img').attr('src','https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png');
        };
    });

    // PEGANDO O TAMANHO DE UM ELEMENTO
    // .width() e .height()
    $('img').mouseleave(function(){
        var larguraImg = $(this).width();
        var alturaImg = $(this).height();
        alert('A largura desta imagem é de ' + larguraImg + 'px e a altura é de ' + alturaImg + 'px.');
    });

});