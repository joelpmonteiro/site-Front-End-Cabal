/* eslint-disable */
var teste = function() {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var loastPassword = $('.lost-pass');
    var modal = $('.modal_div');
    console.log('modal', open_modal)
    loastPassword.click(function() {
        modal
            .animate({
                    opacity: 0,
                    top: '15%'
                }, 200,
                function() {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
};

export default { teste }