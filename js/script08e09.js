// Curso de jQuery

// Aula 08 e 09 - No conflict e Filter
// Aula 08 - No conflict

// $.noConflict();

// iniciando o noConflict direto, o cifrão fica inválido para declarações jQuery, passando a valer a própria frase "jQuery":

/* jQuery(document).ready(function(){

});*/

var jq = $.noConflict();
jq(document).ready(function(){

    // alert('$.noConflict() funcionando perfeitamente!');

    jq('input').keyup(function(){
        var valor = jq(this).val().toLowerCase();

        jq('tbody tr').filter(function(){
            jq(this).toggle(jq(this).text().toLowerCase().indexOf(valor) > -1);
        });
    });

});