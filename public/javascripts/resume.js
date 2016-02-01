(function () {
    "use strict";
    var seenGreetCookie = $.cookie('seen-greet'),
        stopGreeting = $('#stopGreeting')[0];

    if (seenGreetCookie !== 'true') {
        $('#greetingModal')
            .modal('show')
            .on('hide.bs.modal', function () {
                if (stopGreeting.checked) {
                    $.cookie('seen-greet', 'true');
                }
            });
    }

})();
