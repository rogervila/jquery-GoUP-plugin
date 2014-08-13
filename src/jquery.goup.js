// GoUP 0.1.2 - Developed by Roger Vila (@_rogervila) //

(function ($) {
    
    $.fn.goup = function (options) {
        
        $.fn.goup.defaultOpts = {
            appear: 200,
            scrolltime: 800,
            imgsrc: "http://goo.gl/VDOdQc", //it works with short urls
            width: 72,
            place: "bottom-right",
            fadein: 500,
            fadeout: 500,
            opacity: 0.5,
            marginX: 2,
            marginY: 2
        };
        
        var opts = $.extend({}, $.fn.goup.defaultOpts, options);
        
        return this.each(function () {
            
            var goup = $(this);
            goup.html("<a><img /></a>");
            
            var goupa = $('#goup a'),
                goupimg = $('#goup a img');
            
            //width
            goup.css({
                "position": "fixed",
                "display": "block",
                "width": "'" + opts.width + "px'",
                "z-index": "9"
            });
            
            //opacity
            goupa.css("opacity", opts.opacity);
            
            goupimg.attr("src", opts.imgsrc);
            goupimg.width(opts.width);
            
            goupimg.hide();

            
            //appear, fadein, fadeout
            $(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > opts.appear) {
                        goupimg.fadeIn(opts.fadein);
                    } else {
                        goupimg.fadeOut(opts.fadeout);
                    }
                });
                
                //hover effect
                $(goupa).hover(function () {
                    $(this).css("opacity", "1.0");
                    $(this).css("cursor", "pointer");
                }, function () {
                    $(this).css("opacity", opts.opacity);
                });
                
                //scrolltime
                $(goupa).click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, opts.scrolltime);
                    return false;
                });
            });
            
            //place, marginX, marginY: 
            if (opts.place === "top-right") {
                goup.css({
                    "top": opts.marginY + "%",
                    "right": opts.marginX + "%"
                });
            } else if (opts.place === "top-left") {
                goup.css({
                    "top": opts.marginY + "%",
                    "left": opts.marginX + "%"
                });
            } else if (opts.place === "bottom-right") {
                goup.css({
                    "bottom": opts.marginY + "%",
                    "right": opts.marginX + "%"
                });
            } else if (opts.place === "bottom-left") {
                goup.css({
                    "bottom": opts.marginY + "%",
                    "left": opts.marginX + "%"
                });
            } else {
                goup.css({
                    "bottom": opts.marginY + "%",
                    "right": opts.marginX + "%"
                });
            }
        });
    };
})(jQuery);