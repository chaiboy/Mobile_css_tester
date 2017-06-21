// js
/*global
jQuery, console, jQuery, screen
*/
function trace (getMessage) {
  'use strict';
  if ((typeof console === 'object')) {
    console.log(getMessage);
  }
}

jQuery(function () {
  'use strict';
  var browserStats = {
    getPixelRatio: function () {
      var pixelaspect = 1;
      if (window.devicePixelRatio) {
        pixelaspect = window.devicePixelRatio;
      }
      trace('pixelaspect: ' + pixelaspect);
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
      return jQuery(window).height();
    },
    getWindowWidth: function () {
      return jQuery(window).width();
    },
    getDocumentHeight: function () {
      return jQuery(document).height();
    },
    getDocumentWidth: function () {
      return jQuery(document).width();
    },
    getActualDimensions: function (dimension, ratio) {
      return dimension * ratio;
    },
    display: function () {
      trace('display called' + browserStats.getPixelRatio());

      jQuery('.pixel').html(browserStats.getPixelRatio());
      jQuery('.scrhi').html(browserStats.getScreenHeight());
      jQuery('.scrwi').html(browserStats.getScreenWidth());
      if (browserStats.getPixelRatio() > 1) {
        jQuery('.scrhipix').html(' (Actual: ' + browserStats.getActualDimensions(browserStats.getScreenHeight(), browserStats.getPixelRatio()) + ')');
        jQuery('.scrwipix').html(' (Actual: ' + browserStats.getActualDimensions(browserStats.getScreenWidth(), browserStats.getPixelRatio()) + ')');
      } else {
        jQuery('.scrhipix').html('');
        jQuery('.scrwipix').html('');
      }
      jQuery('.winhi').html(browserStats.getWindowHeight());
      jQuery('.winwi').html(browserStats.getWindowWidth());
      if (browserStats.getPixelRatio() > 1) {
        jQuery('.winhipix').html(' (Actual: ' + browserStats.getActualDimensions(browserStats.getWindowHeight(), browserStats.getPixelRatio()) + ')');
        jQuery('.winwipix').html(' (Actual: ' + browserStats.getActualDimensions(browserStats.getWindowWidth(), browserStats.getPixelRatio()) + ')');
      } else {
        jQuery('.winhipix').html('');
        jQuery('.winwipix').html('');
      }
      jQuery('.dochi').html(browserStats.getDocumentHeight());
      jQuery('.docwi').html(browserStats.getDocumentWidth());
      if (browserStats.getPixelRatio() > 1) {
        jQuery('.dochipix').html(' (Actual: ' + browserStats.getActualDimensions(browserStats.getDocumentHeight(), browserStats.getPixelRatio()) + ')');
        jQuery('.docwipix').html(' (Actual: ' + browserStats.getActualDimensions(browserStats.getDocumentWidth(), browserStats.getPixelRatio()) + ')');
      } else {
        jQuery('.dochipix').html('');
        jQuery('.docwipix').html('');
      }

      jQuery('.version').html(browserStats.getAppVersion());
      jQuery('.vendor').html(browserStats.getVendor());
      jQuery('.agent').html(browserStats.getUserAgent());
      trace('display rendered');
    }
  };

  document.addEventListener('mousemove', mousepointer, false);
  document.addEventListener('touchmove', mousepointer, false);
  // document.onmousemove = mousepointer;

  function mousepointer (event){
    var pageX, pageY, mouse_position;

        event = event || window.event; // IE-ism

        mouse_position = {
            x: event.pageX,
            y: event.pageY
        };

        jQuery('.mousepointer').css('top', mouse_position.y + 'px');
        jQuery('.mousepointer').css('left', mouse_position.x + 'px');
        jQuery('.mousey').text('top (y): position: '+ mouse_position.y + 'px');
        jQuery('.mousex').text('left (x): position: '+ mouse_position.x + 'px');
  }

  jQuery(document).mouseleave(function () {
    browserStats.display();
  });

  jQuery(document).mouseenter(function () {
    browserStats.display();
  });

  jQuery(window).on('load resize', function () {
    browserStats.display();
  });

  jQuery(window).on('load', function () {
    var modernzr_classes = jQuery('html').attr("class");
    jQuery('.modernzr_classes_list').html(modernzr_classes);
  });

});
