// Curso de jQuery

// Aula 05 - Efeitos e animações
$(document).ready(function(){

    $(`.container-yellow, .container-green, .container-blue`).append(
        /*`<button class="btn-hide">Hide</button>
        <button class="btn-show">Show</button>
        <button class="btn-fadein">FadeIn</button>
        <button class="btn-fadeout">FadeOut</button>*/
        `<button class="btn-toggle">Toggle</button>
        <button class="btn-fadetoggle">FadeToggle</button>`);

    $('button').addClass('btn');

    // ----------------------------------------------
    // Yellow
    // ----------------------------------------------

    // hide
    $(`.container-yellow .btn-hide`).click(function(){
        $(`#yellow, .container-yellow .btn-hide`).hide('fast'/*, function(){
            alert('Ocultado com sucesso!');
        }*/);
        $('.container-yellow .btn-show').show('fast');
    });

    // show
    $(`.container-yellow .btn-show`).click(function(){
        $(`#yellow, .container-yellow .btn-hide`).show('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
        $('.container-yellow .btn-show').hide('fast');
    });

    // toggle
    $(`.container-yellow .btn-toggle`).click(function(){
        $('#yellow').toggle('fast'/*, function(){
            alert('Sucesso!');
        }*/);
    });

    // fadeIn
    $(`.container-yellow .btn-fadein`).click(function(){
        $(`#yellow`).fadeIn('fast'/*, function(){
            alert('Ocultado com sucesso!');
        }*/);
        $('.container-yellow .btn-fadeout, .container-yellow .btn-fadein').toggle('fast');
    });

    // fadeOut
    $(`.container-yellow .btn-fadeout`).click(function(){
        $(`#yellow, .container-yellow .btn-fadeout`).fadeOut('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
        $('.container-yellow .btn-fadein').toggle('fast');
    });

    // fadeToggle
    $(`.container-yellow .btn-fadetoggle`).click(function(){
        $(`#yellow`).fadeToggle('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
    });


    
    // ----------------------------------------------
    // Green
    // ----------------------------------------------

    // hide
    $(`.container-green .btn-hide`).click(function(){
        $(`#green, .container-green .btn-hide`).hide('fast'/*, function(){
            alert('Ocultado com sucesso!');
        }*/);
        $('.container-green .btn-show').show('fast');
    });

    // show
    $(`.container-green .btn-show`).click(function(){
        $(`#green, .container-green .btn-hide`).show('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
        $('.container-green .btn-show').hide('fast');
    });

    // toggle
    $(`.container-green .btn-toggle`).click(function(){
        $('#green').toggle('fast'/*, function(){
            alert('Sucesso!');
        }*/);
    });

    // fadeIn
    $(`.container-green .btn-fadein`).click(function(){
        $(`#green`).fadeIn('fast'/*, function(){
            alert('Ocultado com sucesso!');
        }*/);
        $('.container-green .btn-fadeout, .container-green .btn-fadein').toggle('fast');
    });

    // fadeOut
    $(`.container-green .btn-fadeout`).click(function(){
        $(`#green, .container-green .btn-fadeout`).fadeOut('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
        $('.container-green .btn-fadein').toggle('fast');
    });

    // fadeToggle
    $(`.container-green .btn-fadetoggle`).click(function(){
        $(`#green`).fadeToggle('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
    });



    // ----------------------------------------------
    // Blue
    // ----------------------------------------------

    // hide
    $(`.container-blue .btn-hide`).click(function(){
        $(`#blue, .container-blue .btn-hide`).hide('fast'/*, function(){
            alert('Ocultado com sucesso!');
        }*/);
        $('.container-blue .btn-show').show('fast');
    });

    // show
    $(`.container-blue .btn-show`).click(function(){
        $(`#blue, .container-blue .btn-hide`).show('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
        $('.container-blue .btn-show').hide('fast');
    });

    // toggle
    $(`.container-blue .btn-toggle`).click(function(){
        $('#blue').toggle('fast'/*, function(){
            alert('Sucesso!');
        }*/);
    });

    // fadeIn
    $(`.container-blue .btn-fadein`).click(function(){
        $(`#blue`).fadeIn('fast'/*, function(){
            alert('Ocultado com sucesso!');
        }*/);
        $('.container-blue .btn-fadeout, .container-blue .btn-fadein').toggle('fast');
    });

    // fadeOut
    $(`.container-blue .btn-fadeout`).click(function(){
        $(`#blue, .container-blue .btn-fadeout`).fadeOut('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
        $('.container-blue .btn-fadein').toggle('fast');
    });

    // fadeToggle
    $(`.container-blue .btn-fadetoggle`).click(function(){
        $(`#blue`).fadeToggle('fast'/*,function(){
            alert('Mostrado com sucesso!')
        }*/);
    });

    // slideDown, slideUp e slideToggle
    $('.slide').click(function(){
        $('.content-cards').slideToggle('slow').css('display','flex');
    });

    $('.div05').html('<p>Selecione um dos efeitos abaixo para visualizar a execução</p>');

    // animate com encadeamento
    $('.slide').click(function(){
        $(this).animate({top:'10px'},300).animate({top: '0px'},500);
    });

});