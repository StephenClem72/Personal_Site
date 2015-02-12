$(document).ready(function() {

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


  $(".project_list li a").each(function(){

      $(this).hover(function(){

        $(this).find('.caption').fadeIn()
        // .show('drop', {direction:'up', opacity: '0.8'}
        //   function(){
        //   $(this).animate({duration: 1600, easing: 'easeOutBounce'})
        // }
        ;
        }, function(){
        $(this).find('.caption').fadeOut()
        // .hide('drop', {direction:'up', opacity: '0.8'}
        //   function(){
        //   $(this).animate({duration: 1600, easing: 'easeOutBack'})
        // }

      });
  });


});


