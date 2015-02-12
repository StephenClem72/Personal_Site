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
        console.log('hey')

        // Fade in the child "span"
        $(this).find('.caption').show(function(){
          $(this).animate({duration: 1000, easing: 'easeInElastic'})
        });
        }, function(){
        // Once you mouse off, fade it out
        $(this).find('.caption').hide(function(){
          $(this).animate({duration: 1000, easing: 'easeOutBack'})
        })
      });
  // End $(this)
  });

// $('.caption').hide()

// $('.project_indv').hover(showcaption())

// var showcaption = function(){
//   $('.caption').show()
// }

// var hidecaption = function(){
//   $('.caption').hide()
// }

// function(){$('.project_indv').hover(function(){
//   $(this).animate({top: '0px'}, {duration: 1600, easing: 'easeOutBounce'});
//   // console.log('hey')
// }, function(){
//   $(this).animate({ top: '-13.37em'}, {duration: 1600, easing: 'easeOutBack'});
// })}

// if($('.project_indv').mouseenter()){
//   // $('.caption').show();
// }else{
//   $('.caption').hide();

// }
// $('.caption').hide()

// $('.project_indv').hover(
//   function(){
//     $('.caption').show()
//   })





 // $(window).scroll (function () {
 //    var sT = $(this).scrollTop();
 //    console.log(sT)
 //        if (sT >= 572 && sT <= 1089 ) {
 //            // $('.navbar').css('backgroundColor', '#e8b71a')
 //            $('.navbar a').css('color', '#f7eac8')
 //        }else {
 //            $('.navbar').css('backgroundColor', '#28abe3')
 //            $('.navbar a').css('color', '#f7eac8')
 //        }
 //  })

// console.log('hey')
});


