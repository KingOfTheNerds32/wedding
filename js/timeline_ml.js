

// $(document).ready(function($){
//   var $timeline_blocks = $('.cd-timeline-block');

//   $(window).on('scroll', function(){
//     $timeline_blocks.each(function(){
//       if($(this).isOnScreen){
//         $(this).removeClass('animated bounceOutRight').addClass('animated bounceInRight');
//       }
//       else{
//         $(this).removeClass('animated bounceInRight').addClass('animated bounceOutRight');
//       }
//     });
//   });
// });


// jQuery.fn.isOnScreen = function(scope){
//     var element = this;
//     if(!element){
//         return;
//     }
//     var target = $(element);
//     if(target.is(':visible') == false){
//         return false;
//     }
//     scope = $(scope || window);
//     var top = scope.scrollTop();
//     var bot = top + scope.height();
//     var elTop = target.offset().top;
//     var elBot = elTop + target.height();

//     return ((elBot <= bot) && (elTop >= top));
// };