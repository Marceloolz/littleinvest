$(document).ready(function(){
    AOS.init();

    /*Manupular o menu*/
    $('.Container_Menu_IconeMobile').click(function(){
        $('.Container_Menu_Item').addClass('__ActiveMobile');
    });

    $('.Menu_Item_Close').click(function(){
        $('.Container_Menu_Item').removeClass('__ActiveMobile');
    });

    /*Manupular os steps*/
    $('.__buttonform1').click(function(){
        $('.__is-form1').removeClass('__is-active');
        $('.__is-form2').addClass('__is-active');
        $('.__is-step2').addClass('__is-active');
    });

    $('.__buttonform2').click(function(){
        $('.__is-form2').removeClass('__is-active');
        $('.Conteudo_Container_MensagemFinal').addClass('__is-active');
        $('.__is-step3').addClass('__is-active');
    });



    //////// CONFIGURA SCROLL DOS MENUS ////////
    $( ".scrollLink" ).click(function() {
        animacaoScroll($(this));
    });


    function animacaoScroll(element){
        if($(window).width() > 768){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 94}, 500);
        }
        if($(window).width() <= 768 && $(window).width() > 600){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 92 }, 500);
        }
        if($(window).width() <= 600 && $(window).width() > 480){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 92 }, 500);
        }
        if($(window).width() <= 480){
            $("html, body").animate({ scrollTop: $($(element).attr("data-scrollto")).offset().top - 92 }, 500);
        }
    }

   

    //Slide de Produtos da Home
    $('.Cotacoes_Container_Content').slick({
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // variableWidth: false,
        arrows: true,
        infinite: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></div>',
        dots: false,
        responsive: [
            {
                breakpoint: 30000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})