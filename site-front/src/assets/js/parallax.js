/*eslint no-mixed-spaces-and-tabs: "error"*/
/*eslint-disable no-undef*/

jQuery("body").mousemove(
    function(e) {

        var offset = jQuery(this).offset();
        var xPos = e.pageX - offset.left;
        var yPos = e.pageY - offset.top;

        var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
        var mouseYPercent = Math.round(yPos / jQuery(this).height() * 0);

        jQuery(".paralax").children('div').each(
            function() {
                if (jQuery(this).attr('data-left') == null) jQuery(this).attr('data-left', jQuery(this).position().left);
                if (jQuery(this).attr('data-top') == null) jQuery(this).attr('data-top', jQuery(this).position().top);

                var diffX = jQuery('.parallax').width() - jQuery(this).width();
                var diffY = jQuery('.parallax').height() - jQuery(this).height();

                var myX = diffX * (mouseXPercent / 1500);
                var myY = diffY * (mouseYPercent / 1000);


                // var cssObj = {
                //     'left': myX + 'px',
                //     'top': myY + 'px'
                // }

                jQuery(this).animate({ left: myX + Number(jQuery(this).attr('data-left')), top: myY + Number(jQuery(this).attr('data-top')) }, { duration: 40, queue: false, easing: 'linear' });

            }
        );

    }
);