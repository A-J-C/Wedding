$(window).on('activate.bs.scrollspy', function (e) {
    let panel = $(e.relatedTarget);
    $('#navbar').removeClass('lightBg duskyBlue navy navyAndDusky navbar-light navbar-dark');

    if (panel.is('#gifts')) {
        $('#navbar').addClass('navy navyAndDusky navbar-dark');
    }
    else if (panel.hasClass('lightBg')) {
        $('#navbar').addClass('lightBg navbar-light');
    } 
    else if (panel.hasClass('navy')) {
        $('#navbar').addClass('navy navbar-dark');
    }
});

$(window).on( 'scroll', function(){
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (vw < 992) {
        let navbar = document.getElementById('navbar').getBoundingClientRect();
        let giftRegistry = document.getElementById('giftRegistry').getBoundingClientRect();

        let overlap = navbar.top > giftRegistry.top &&
            navbar.bottom < giftRegistry.bottom;
        
        if (overlap) {
            $('#navbar').removeClass('lightBg duskyBlue navy navyAndDusky navbar-light navbar-dark');
            $('#navbar').addClass('navy duskyBlue navbar-dark');
        } else {
            $('#navbar').removeClass('duskyBlue');
        }
    }
    
 });
 
$(document).ready(function () {
    if (navigator.platform.match('Mac') === null) {
        $('head').append('<link rel="stylesheet" type="text/css" href="./css/scrollbar.css" />');
    }

    $('.hotelInner').each(function(){
        this.onclick = function() {}
    });

    $('.hotelInner').click(function(e) {
        if (e.target.tagName.toLowerCase() !== 'a') {
            window.open($(this).find('a').attr('href'), '_blank');
            return false;
        }
    });

    $('.nav-item').click(() => $(".menu-btn").click());
});
