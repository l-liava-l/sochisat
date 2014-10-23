$(document).ready(function() {

    $('#b-work-with .label').hover(function(event) {
        console.log(event);
        $(event.target).tooltip('show');
    });

    $('body').scrollspy({ target: '.navbar-collapse' })

});