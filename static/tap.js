(function() {
    var TOUCHSTART, TOUCHMOVE, TOUCHEND;
    var timer
    var startTime
    if(typeof(window.ontouchstart) != 'undefined') {
        TOUCHSTART = 'touchstart';
        TOUCHEND = 'touchend';
        TOUCHMOVE = 'touchmove';

    } else if(typeof(window.onmspointerdown) != 'undefined') {
        TOUCHSTART = 'MSPointerDown';
        TOUCHEND = 'MSPointerUp';
        TOUCHMOVE = 'MSPointerMove';
    } else {
        TOUCHSTART = 'mousedown';
        TOUCHEND = 'mouseup';
        TOUCHMOVE = 'mousemove';
    }

    function tap(node) {
        node.oncontextmenu = function() {
            return false;
        }
        node.addEventListener(TOUCHSTART, function(e) {
            // x = e.touches[0].pageX;
            // y = e.touches[0].pageY;
            startTime = (new Date()).getTime();
            clearTimeout(timer);            
            timer = setTimeout(function() {
                e.target.dispatchEvent(new CustomEvent('longTap', {
                'detail': e,
                bubbles: true,
			    cancelable: true
            }));
            }, 300);

        });
        node.addEventListener(TOUCHMOVE, function(e) {
        //   var curx = e.changedTouches[0].pageX;
        //   var cury = e.changedTouches[0].pageY;
        //    if(Math.abs(curx - x) > 6 && Math.abs(cury - y) > 6) {
        //      clearTimeout(timer);              
        //    }
               clearTimeout(timer);       
        });
        
        node.addEventListener(TOUCHEND, function(e) {
            endTime = (new Date()).getTime();
            if(endTime - startTime < 300 ) {
                clearTimeout(timer);
            }
        });
    }

    tap(document);
})();
