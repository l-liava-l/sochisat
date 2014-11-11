
function setPage(href) {
    $('.mainMenu li').removeClass('active');
    $('a[href="'+ href + '"]').parent().addClass('active');
}


$(document).ready(function() {

    //$('#b-work-with .label').hover(function(event) {
    //    $(event.target).tooltip('show');
    //});

    $('body').scrollspy({ target: '.navbar-collapse' });




    (function() {

        var comments = document.getElementsByClassName('comment');
        var currentComment = 0; allComments = comments.length - 1;

        $('.b-comments .pager a').click(changeComment);

        function changeComment(event) {
            event.preventDefault();

            $(comments[currentComment]).hide();

            switch(event.target.getAttribute('ui-href')) {
                case 'next':  currentComment === allComments ? currentComment = 0: currentComment++; break;
                case 'previous': currentComment === 0 ?  currentComment = allComments: currentComment--; break;
            }

            $(comments[currentComment]).show();
        }
    })();
});
