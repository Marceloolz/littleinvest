$(document).ready(function(){
    AOS.init();

    /*Manupular o menu*/
    $('.Container_Menu_IconeMobile').click(function(){
        $('.Container_Menu_Item').addClass('__ActiveMobile');
        $('.Container_Menu_IconeMobile').hide();
    });

    $('.Menu_Item_Close').click(function(){
        $('.Container_Menu_Item').removeClass('__ActiveMobile');
        $('.Container_Menu_IconeMobile').show();
    });


    //Abrir Modal
    $('.AtivaOrcamento').click(function(){
        $('.ModalOrcamento').addClass('__is-active');
    });

    //Fechar Modal
    $('.ModalOrcamento_Close').click(function(){
        $('.ModalOrcamento').removeClass('__is-active');
    });
   

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