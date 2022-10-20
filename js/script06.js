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
        <a class="btn" id="btn-redirect" href="https://jquery.com">Ir para o jquery</a>
        <hr>
            <div id="divBotoes">
                <button class="btn" id="trocar-img">Trocar imagem</button>
                
                <button class="btn" id="trocar-link">Trocar link</button>
                
                <button class="btn" id="atribuir-texto">Atribuir texto ao campo</button>

            </div>

            <hr class="separador">

            <h2>Aplicação para testar o append e o prepend:</h2>
            
            <div id="addDivs">
                
                <button class="btn" id="remDiv">Prepend</button>
                
                <button class="btn" id="addDiv">Append</button>
            
            </div>
            
            <div id="divs"></div>`
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
    });

    // TROCAR O LINK E O TEXTO DO BOTÃO DE REDIRECIONAMENTO
    $('#trocar-link').click(function(){
        $('#btn-redirect').text('Ir para o google');
        $('#btn-redirect').attr('href','https://google.com');
    });

    // ATRIBUIR TEXTO AO CAMPO
    $('#atribuir-texto').click(function(){
        $('#campo_texto').val('Texto atribuido com um click!');
        var campoTexto = $('#campo_texto').val();
        alert(campoTexto);
    });

    // append (adicionar após) 20:30 min
    $('#addDiv').click(function(){
        $('#divs').append('<div class="append new"></div>');
    });

    // prepend (adiocionar antes)
    $('#remDiv').click(function(){
        $('#divs').prepend('<div class="prepend new"></div>')
    });

    // REMOVER ELEMENTOS 24:30 min

});