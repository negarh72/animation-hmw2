$(document).ready(init);

function init() {
    setInterval(function() {
        var leftstart = Math.floor((Math.random() * 250) + 1);
        var topstart = Math.floor((Math.random() * 250) + 1);
        $('.box-1').animate({
                left: leftstart,
                top: topstart
            }, 2000,
            function() {
                $('.box-1').removeClass('disapear');
            }
        );
    }, 1000);
}