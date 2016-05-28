var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    console.log('scrollHeader triggered');
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 ) {
      $("#header").addClass("scrolled");
      console.log('scrolled', zvalue);
    } else {
      $("#header").removeClass("scrolled");
      console.log('remove scrolled', zvalue);
    }
}

jQuery(document).ready(function($){

    // ON SCROLL EVENTS
    if (!isTouch){
      console.log('register scroll listeter');
        $(document).scroll(function() {
          console.log('registed scroll listener triggered');
            scrollHeader();
        });
    };

    // TOUCH SCROLL
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    // Responsive Menu

});
