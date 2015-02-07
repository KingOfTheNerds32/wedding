var main = function(){
   //month is zero based
   //UTC is 8 hours different
   var date  = new Date(Date.UTC(2015, 7, 30, 1, 30, 0));
   var now   = new Date();
   var diff  = date.getTime()/1000 - now.getTime()/1000;

   var clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });


   document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {
      index: link, 
      event: event
    },
    links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
  };

//$( "#story" ).load( "timeline_new.html");

  // This example adds a duration to the tweens so they are synced to the scroll position

  var controller = $.superscrollorama();

  // amount of scrolling over which the tween takes place (in pixels)
  var scrollDuration = 0; 
  var x_pos = $(window).width()/2;
  //console.log(x_pos);
  // individual element tween examples

  // $(".timeline-row").each(function(){
  //   controller.addTween($this, TweenMax.from)
  // })

  $(".time-left").each(function(){
    $this = $(this);
    controller.addTween($this , TweenMax.from( $this, 1, {css: {left:x_pos}, clearProps:"left", ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  });
  $(".time-right").each(function(){
    $this = $(this);
    controller.addTween($this , TweenMax.from( $this, 1, {css: {left:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  });

  // controller.addTween("#proposal", TweenMax.from( $("#proposal"), .5, {css: {opacity: 0}}), scrollDuration);

  // controller.addTween("#cd-timeline", TweenMax.from( $('#cd-timeline'), .5, {css:{opacity: 0}}), scrollDuration);
  // controller.addTween('#timeline1', TweenMax.from( $('#timeline1'), 1.5, {css:{opacity: 0,right:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  // controller.addTween('#timeline2', TweenMax.from( $('#timeline2'), 1, {css:{opacity: 0,left:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  // controller.addTween('#timeline3', TweenMax.from( $('#timeline3'), 1, {css:{opacity: 0,right:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  // controller.addTween('#timeline4', TweenMax.from( $('#timeline4'), 1, {css:{opacity: 0,left:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  // controller.addTween('#timeline5', TweenMax.from( $('#timeline5'), 1, {css:{opacity: 0,right:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  // controller.addTween('#timeline6', TweenMax.from( $('#timeline6'), 1, {css:{opacity: 0,left:x_pos}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration); 


  // controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{left:'1000px'}, ease:Quad.easeInOut}), scrollDuration);
  // controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}), scrollDuration);
  // controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}), scrollDuration);
  // controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), scrollDuration); // 100 px offset for better timing



};

$(document).ready(main);
