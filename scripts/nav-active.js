
// jQuery
// checks if the link is the current page I am on and changes its class
// I can use css to style this class
$(function() {
    $('a').each(function() {
        if ($(this).prop('href') === window.location.href) {
            $(this).addClass('active');
            $(this).parents('li').addClass('active');
        }
    });
});

