$(function () {

    var toRedirect = function () {
        location.href = "index.html";
    };

    var timerMs = 1000 * 60 * 10;
    // var timerMs = 1000 * 10;
    var timerId = setTimeout(toRedirect, timerMs);

    $('div').on('click keypress scroll touchstart touchend touchcancel touchmove', function () {
        clearTimeout(timerId);
        timerId = setTimeout(toRedirect, timerMs);
    });
});

$(function() {
    $('#home').on('click',function() {
        location.href = "index.html";
    });
});