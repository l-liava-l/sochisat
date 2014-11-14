
function setPage(href) {
    $('.mainMenu li').removeClass('active');
    $('a[href="'+ href + '"]').parent().addClass('active');
}


$(document).ready(function() {
    setTimeout(function(){$('.fadein').fadeIn(700)}, 300);
});
