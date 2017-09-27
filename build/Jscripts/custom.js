/* ====================================
   Onload functions
   ==================================== */

$(function() {
    $('.zone--media .zone__content').bxSlider({
        nextText: '',
        prevText: '',
        auto: 1
    });
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
});