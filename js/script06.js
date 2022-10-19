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
        <a class="btn" id="btn-redirect" href="https://jquery.com">Clique aqui para ser redirecionado</a>`
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

});