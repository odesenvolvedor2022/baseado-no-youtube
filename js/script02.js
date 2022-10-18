// Curso de jQuery

// Aula 02 - Sintaxe do jQuery

// Funçaõ que espera o documento carregar por completo
$(document).ready(function (){

    //adicionando texto em um elemento com o id="teste".
    $('p#teste02').html('Teste');

    //adicionando classe em um elemento <p>.
    $('p').addClass('classe-teste');

});