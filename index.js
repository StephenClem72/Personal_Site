$(document).ready(function(){

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

console.log('hey')

})