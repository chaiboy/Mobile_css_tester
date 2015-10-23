//js
/*global
jQuery, console, $
*/
function trace(getMessage) {
    'use strict';
    if ((typeof console === "object")) {
        console.log(getMessage);
    }
}

$(function () {
    'use strict';
    var browserStats = {
        getPixelRatio: function () {
            var pixelaspect = 1;
            if (window.devicePixelRatio) {
                pixelaspect = window.devicePixelRatio;
            }
            trace("pixelaspect: " + pixelaspect);
            return pixelaspect;
        },
        getUserAgent: function () {
            return navigator.userAgent;
        },
        getAppVersion: function () {
            return navigator.appVersion;
        },
        getVendor: function () {
            if (navigator.vendor === '') {
                return navigator.appName;
            } else {
                return navigator.vendor;
            }
        },
        getScreenHeight: function () {
            return screen.height;
        },
        getScreenWidth: function () {
            return screen.width;
        },
        getWindowHeight: function () {
            return $(window).height();
        },
        getWindowWidth: function () {
            return $(window).width();
        },
        getDocumentHeight: function () {
            return $(document).height();
        },
        getDocumentWidth: function () {
            return $(document).width();
        },
        getActualDimensions: function (dimension, ratio) {
            return dimension * ratio;
        },
        display: function () {
            trace("display called" + browserStats.getPixelRatio);
            $('.pixel').html(browserStats.getPixelRatio);
            $('.scrhi').html(browserStats.getScreenHeight());
            $('.scrwi').html(browserStats.getScreenWidth());
            if (browserStats.getPixelRatio() > 1) {
                $('.scrhipix').html(" (Actual: " + browserStats.getActualDimensions(browserStats.getScreenHeight(), browserStats.getPixelRatio()) + ")");
                $('.scrwipix').html(" (Actual: " + browserStats.getActualDimensions(browserStats.getScreenWidth(), browserStats.getPixelRatio()) + ")");
            } else {
                $('.scrhipix').html("");
                $('.scrwipix').html("");
            }
            $('.winhi').html(browserStats.getWindowHeight());
            $('.winwi').html(browserStats.getWindowWidth());
            if (browserStats.getPixelRatio() > 1) {
                $('.winhipix').html(" (Actual: " + browserStats.getActualDimensions(browserStats.getWindowHeight(), browserStats.getPixelRatio()) + ")");
                $('.winwipix').html(" (Actual: " + browserStats.getActualDimensions(browserStats.getWindowWidth(), browserStats.getPixelRatio()) + ")");
            } else {
                $('.winhipix').html("");
                $('.winwipix').html("");
            }
            $('.dochi').html(browserStats.getDocumentHeight());
            $('.docwi').html(browserStats.getDocumentWidth());
            if (browserStats.getPixelRatio() > 1) {
                $('.dochipix').html(" (Actual: " + browserStats.getActualDimensions(browserStats.getDocumentHeight(), browserStats.getPixelRatio()) + ")");
                $('.docwipix').html(" (Actual: " + browserStats.getActualDimensions(browserStats.getDocumentWidth(), browserStats.getPixelRatio()) + ")");
            } else {
                $('.dochipix').html("");
                $('.docwipix').html("");
            }

            $('.version').html(browserStats.getAppVersion());
            $('.vendor').html(browserStats.getVendor());
            $('.agent').html(browserStats.getUserAgent());
            trace("display rendered");
        }
    };

    jQuery(document).mouseleave(function () {
        browserStats.display();
    });
    jQuery(document).mouseenter(function () {
        browserStats.display();
    });

    $(window).on('load resize', function () {
        browserStats.display();
    });
});
