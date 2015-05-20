// =============================================================================

    // APP JS
    // Property of the Swig
    // Authored by Josh Beveridge

// =============================================================================

// Data Link Handler ===========================================================
$('[data-link-handler]').on('click touchend',function(e){
    if($('[data-link-target="'+$(this).attr('data-link-handler')+'"]').hasClass('active')) {
        $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').removeClass('active');
    }
    else {
        $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').addClass('active');
    }
    e.preventDefault();
});

// Navigation Handler ==========================================================
$('.menu dd a').on('click touchend', function(e) {
    if($('.pane-01').hasClass('active')) {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('active');
            $('.menu-content').removeClass('active');
            $('.pane-01, .pane-02, .pane-03').removeClass('active');
        }
        else {
            $('.menu dd a').removeClass('active');
            $('.menu-content').removeClass('active');
            $('body').addClass('active');
            $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').addClass('active');
            $(this).addClass('active');
        }
    }
    else {
        $(this).addClass('active');
        $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').addClass('active');
        $('body').addClass('active');
        $('.pane-01, .pane-02, .pane-03').addClass('active');
    }
    e.preventDefault();
});

// Progress Handler ============================================================
$(document).on('ready', function() {
    var navHeight = $('nav').outerHeight();
    var articleHeight = $('.page').outerHeight();

    if (window.matchMedia("(max-width: 800px)").matches) {

        var windowHeight = $(window).height() - navHeight;

        $(document).on('scroll', function(){
            var position = $(window).scrollTop() / articleHeight * 100;
            $('.value').css('width', position + '%');
        });

    }
    else {

        var windowHeight = $(window).height();

        $(document).on('scroll', function(){
            var position = $(window).scrollTop() / articleHeight * 100;
            $('.value').css('height', position + '%');
        });

    }

});
