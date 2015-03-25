var main = function(){

  // ------------------------------- COUNTDOWN ------------------------
   //month is zero based
    //UTC is 8 hours different
  //   var start = new Date(Date.UTC(2014, 10, 24, 1))
  //   console.log(start);
  //   start = start.getTime() / 1000;
  //   var date = new Date(Date.UTC(2015, 7, 30, 1, 30, 0));
  //   console.log(date);
  //   var now   = new Date();
  //   var diff = date.getTime() / 1000 - now.getTime() / 1000;
  //   now = now.getTime() / 1000;
  //   date = date.getTime() / 1000;
   //
   //
  //   if ($('.countdown').length){
  //    $('.countdown').final_countdown({
  //      'start': 1362139200,
  //      'end': date,
   //
  //      'now': now
  //    });
  //  }


// ---------------------------------- GALLERY ----------------------------
// $('#carousel').flexslider({
//   animation: "slide",
//   controlNav: false,
//   animationLoop: false,
//   slideshow: true,
//   itemWidth: 210,
//   itemMargin: 5,
//   asNavFor: '#slider'
// });

$('#slider').flexslider({
  animation: "slide",
  // controlNav: false,
  animationLoop: true,
  slideshow: true,
  smoothHeight: true,
  // sync: "#carousel"
});


// ------------------------- TWEENS & ANIMATIONS -------------------------

  // This example adds a duration to the tweens so they are synced to the scroll position
  // Disable for touch devices
  if (!Modernizr.touch){
    var controller = $.superscrollorama();

    // amount of scrolling over which the tween takes place (in pixels)
    var scrollDuration = 0;
    var x_pos = $(window).width()*2;

    var LeftRightScrollBuilder = function(selectorObj){
      var info_counter = 0;
      selectorObj.each(function(){
        $this = $(this);
        var entry = 0;
        switch (info_counter % 3){
          case 0:
          entry = x_pos * -1;
          break;
          case 1:
          entry = x_pos * 1;
          break;
          default:
          entry = 0;
        }
        if (entry == 0) {
          TweenAppear($this);
        }
        else {
          TweenFromSide($this, entry);
        }
        info_counter++;
      })
    };

    var TweenFromSide = function(obj, entry){
      $this = obj;
      controller.addTween($this, TweenMax.from( $this, 1, { css: { left: entry }, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
    };
    var TweenAppear = function(obj){
      $this = obj;
      controller.addTween($this, TweenMax.from( $this, 2, {css:{opacity: 0, scaleX: .5}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
    };

    LeftRightScrollBuilder($(".infographic"));
    LeftRightScrollBuilder($(".story-cards"));
  }


// -------------------------------- INSTAGRAM -----------------------------
// var feed = new Instafeed({
//   clientId: 'a415febb075e4f78a8db95973981df84',
//   limit: 20,
//   sortBy: 'most-liked',
//   get: 'tagged',
//   tagName: 'test',
//   after: function () {
//     var images = $("#instafeed").find('a');
//     $.each(images, function(index, image) {
//       var delay = (index * 75) + 'ms';
//       $(image).css('-webkit-animation-delay', delay);
//       $(image).css('-moz-animation-delay', delay);
//       $(image).css('-ms-animation-delay', delay);
//       $(image).css('-o-animation-delay', delay);
//       $(image).css('animation-delay', delay);
//       $(image).addClass('animated flipInX');
//     });
//   },
//   template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
// });
// feed.run();

//---------------------------------- WEDDING INFO ---------------------------


// resizeInfoPanels();


// --------------------------------- WEDDING PARTY --------------------------
var wedding_party = [
{
  Name:"Adrienne"
  ,Id:"Adrienne"
  ,Img:"/assets/party/Adrienne.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Bridesmaid"
  ,Description:"If you looked at Lauren and Adrienne side-by-side, you probably wouldn’t be able to tell that they are sisters. Though they may look very different, both sisters share a love of art. While Lauren enjoys viewing art and dabbling in arts and crafts, Adrienne produces unique and beautiful pieces as an artist and graphic design guru. Adrienne is the wildly creative member of the family. With her in the bridal party, you can rest assured that there will be no puffed sleeves, frilly bows, or otherwise ugly bridal party outfits!"
  ,Order: 10
}
,{
  Name:"Ben"
  ,Id:"Ben"
  ,Img:"/assets/party/Ben.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Groomsman"
  ,Description:"Ben has been one of Michael's closest friends since the first grade. Over the last 20+ years, they have had more adventures than one can count: 12 years of school together, regularly beating each other up in Tae Kwon Do classes, working together, and traveling all over the world. It's only fitting that Ben be a part of launching this next great adventure in Michael & Lauren's lives."
  ,Order: 20
}
,{
  Name:"Lauren"
  ,Id:"Lauren"
  ,Img:"/assets/party/Lauren_G.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Bridesmaid"
  ,Description:"Lauren and Lauren met in ballet class during high school and immediately bonded over their mutual interests in musicals, sparkly things, arts & crafts, dance, and what makes people tick. Lauren and Lauren can be found in heated discussion about the most recent episode of So You Think You Can Dance, making greeting cards with way too much glitter, or giggling hysterically over…nothing really."
  ,Order: 30
}
,{
  Name:"Harry"
  ,Id:"Harry"
  ,Img:"/assets/party/Harry.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Groomsman"
  ,Description:"Harry是梁迈柯的好朋友。他们会见了在2006年在USC。那时候，他们就是同学们学习中文。然后，他们住在一起。毕业以后，他们还是特别好的朋友。"
  ,Order: 40
}
,{
  Name:"Hannah"
  ,Id:"Hannah"
  ,Img:"/assets/party/Hannah.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Bridesmaid"
  ,Description:"Hannah has to tolerate sharing a small office with Lauren at The Guidance Center. Hannah can challenge anyone to a Disney song-singing or Friends line-quoting competition and probably win – she uses the competitive edge she honed as a collegiate athlete to go deep catalogue. Lauren can always count on Hannah to put things in perspective or insert a strategically placed corny joke. Most recently, Hannah discovered she can text message voice recordings, which has opened up a whole new world of humorous communication."
  ,Order: 50
}
,{
  Name:"Dishan"
  ,Id:"Dishan"
  ,Img:"/assets/party/Dishan.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Groomsman"
  ,Description:"Friends since their freshmen year of college, Dishan and Michael's bromance has blossomed over their interests in technology, cars, and long drives along the California coastline. At this point, Dishan has become an adopted member of the Larner family, and it is rumored that folks actually prefer him over Michael."
  ,Order: 60
}
,{
  Name:"Gaby"
  ,Id:"Gaby"
  ,Img:"/assets/party/Gaby.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Bridesmaid"
  ,Description:"When Lauren met Michael, she also gained a thoughtful, smart, and kind friend in Gaby. Gaby’s parents are best friends with Michael’s parents, and Gaby and Michael grew up together. While we don’t ever get to snap a picture of Gaby (it took a group of us a couple of hours to find this one), we have plenty of fun memories of this athlete, aspiring lawyer, and awesome new mommy."
  ,Order: 70
}
,{
  Name:"Sridhar"
  ,Id:"Sridhar"
  ,Img:"/assets/party/sridhar.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Groomsman"
  ,Description:"A fellow Trojan and friend since the freshmen dorms, Sridhar was always the man of mystery amongst us. After a decade of friendship, we finally know all of the important details - like what his major was in college. Now that Sridhar lives abroad, helping to improve healthcare in Europe, we don't get to see him quite as often, but we're so excited that he's making the long trek to be a part of our special day."
  ,Order: 80
}
,{
  Name:"Katie"
  ,Id:"Katie"
  ,Img:"/assets/party/junior.jpg"
  ,Hover:"Junior Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Junior Bridesmaid"
  ,Description:"As one of Lauren's favorite cousins, Katie has already given her expert opinion on her dress for the wedding and is a seasoned pro at being in the bridal party. She was recently featured as the flower girl in a friend’s wedding on TV! Lauren is excited to promote Katie to Jr. Bridesmaid. Lauren and Katie tend to gravitate toward each other at family gatherings, at which time Katie likes to scare Lauren by talking about all the scary movies she watches. Even when she is recounting a blood curdling movie plot, it is easy to see that Katie smart, funny, friendly, and kind."
  ,Order: 90
}
,{
  Name:"Darrin"
  ,Id:"Darrin"
  ,Img:"/assets/party/Darrin.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Reader"
  ,Description:"Buddies since high school, Michael & Darrin spent years trying to out-do the other in friendly games of basketball. Darrin\'s big heart and thoughtful nature make him a wonderful friend and great new daddy. We can always count on Darrin to be the life of the party, especially when he's hosting his annual New Years or 4th of July bash."
  ,Order: 100
}
// ,{
//   Name:"Diana"
//   ,Id:"Dianna"
//   ,Img:"/assets/party/Diana.jpg"
//   ,Hover:"Reader"
//   ,Type:"other"
//   ,Title:"Reader"
//   ,Description:"Lauren and Diana met in Peer Health Educators training at USC during undergrad and then worked as research assistants together in a psychology research lab. When they weren\'t working hard to become psychologists, they did awkward 10-shot photoshoots, spent an entire 24 hours trying to get out of the Atlanta airport, and made honey badger masks to wear during lab meetings. And yes, these activities are exactly as sketchy as they sound."
//   ,Order: 130
// }
,{
  Name:"Pierson"
  ,Id:"Pierson"
  ,Img:"/assets/party/Pierson.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Reader"
  ,Description:"If Pierson told you about what he does for a living, he\'d have to kill you - or so he says. Also part of the Trojan gang, Pierson has always marched to the beat of his own drummer - creating his own major before launching a successful business doing...something. We do know that he\'s a cyber-security expert, avid photographer, and all-around awesome dude!"
  ,Order: 120
}
,{
  Name:"Kalina"
  ,Id:"Kalina"
  ,Img:"/assets/party/Kalina.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Reader"
  ,Description:"Michael met Kalina during college when he and Harry were roommates. As a good friend and extremely good sport, she was one of the few who was willing to brave the artic tundra that was their apartment at the time. Lucky for Harry, the extreme cold didn't scare Kalina off; otherwise, he might still be a bachelor! Kalina is one of the kindest and most thoughtful people that you will ever meet, and we are lucky to have her in our lives."
  ,Order: 110
}
,{
  Name:"Ron"
  ,Id:"Ron"
  ,Img:"/assets/party/Ron.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Reader"
  ,Description:"Although he lives in the unimaginable cold of Minnesota, Uncle Ron has always been an important and steadfast member of the family. Afterall, he gave Lauren her first CD from The Cure when she was 13. Lauren was a flower girl in Ron's wedding, and now Lauren and Michael are excited to have him participate in their special day."
  ,Order: 140
}
,{
  Name:"Dave & Michele"
  ,Id:"DaveMichele"
  ,Img:"/assets/party/DaveMichele.JPG"
  ,Hover:"Readers"
  ,Type:"other"
  ,Title:"Readers"
  ,Description:"Dave & Michele have been a permanent fixture in Michael\'s life since before he was even born. Having grown up with Michael's parents, this wonderful couple is the definition of family. Their warm hearts, open home, abnormally robust vocabulary, and pack of cute canines are only some of the reasons that we love them."
  ,Order: 150
}
,{
  Name:"Leah"
  ,Id:"Leah"
  ,Img:"/assets/party/Leah.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Reader"
  ,Description:"It's safe to say that Leah became one of Lauren's favorite cousins after she gave Lauren a Sanrio Surprises gigantic stuffed frog as a present one year when Lauren was little. Leah is kind, thoughtful, funny, and could probably put the rest of us to shame in a game of Disney trivia."
  ,Order: 160
}
];
wedding_party = _.sortBy(wedding_party, 'Order');
var html_builder = '';
for (var i = 0; i < wedding_party.length; i++){
  Person = wedding_party[i];
  html_builder += '<div class="col-xs-12 col-sm-6 col-md-3 isotope-item ' + Person.Type + '"><div class="image-box"><div class="overlay-container"><img src="' + Person.Img + '" alt="' + Person.Id + '"><a class="overlay" data-toggle="modal" data-target="#' + Person.Id + '"><i class="fa fa-search-plus"></i><span>' + Person.Hover + '</span></a></div><a class="btn btn-default btn-block" data-toggle="modal" data-target="#' + Person.Id + '">' + Person.Name + '</a></div><!-- Modal --><div class="modal fade" id="' + Person.Id + '" tabindex="-1" role="dialog" aria-labelledby="' + Person.Id + '-label" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="' + Person.Id + '-label">' + Person.Title + '</h4></div><div class="modal-body"><h3>'+Person.Name+'</h3><div class="row"><div class="col-md-6">'+Person.Description+'</div><div class="col-md-6"><img src="' + Person.Img + '" alt="' + Person.Id + '"></div></div></div><div class="modal-footer"><button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Modal end --></div>';
};

$('#wedding_party').html(html_builder);


// ------------------- MISC ----------------------

  //Applies text resizing to all appropriate items
  $('#name_header').fitText();
  $('#top_info_1').fitText(2, { maxFontSize: '40px' });
  $('#top_info_2').fitText(2, { maxFontSize: '40px' });
  $('.section-title').fitText();
  $('.section-subtitle').fitText(1, { maxFontSize: '30px' });
  $('.card-title').fitText(1, { maxFontSize: '60px' });
  // $('.nav_text').fitText(1, { minFontSize: '14px'});


};


var debug = false;

var resizeInfoPanels = function(){
  var groups =
  [
    [$("#where"), $("#when")]
    ,[$('#accommodations-left'), $('#accommodations-center'), $('#accommodations-right')]
    ,[$('#her_story'), $('#his_story')]
  ];
  for (var i = 0; i < groups.length; i++){
    resetHeight(groups[i]);
    if ($(window).width() > 991){
      setHeight(groups[i]);
    }
    if (debug == true){
      checkHeight(groups[i]);
    }
  }
};

var setHeight = function(objArray){
  var h = 0;
  if (debug == true) {
    console.log('setting height')
  };
  for (var i = 0; i < objArray.length; i++){
    if (debug == true) {
      console.log(objArray[i].attr('id') + ": " + objArray[i].height())
    };
    if (objArray[i].height() > h){
      h = objArray[i].height();
    }
  }
  for (var i = 0; i < objArray.length; i++){
    objArray[i].height(h);
  }
}

var resetHeight = function(objArray){
  if (debug == true){
    console.log('resetting height')
  };
  for (var i = 0; i < objArray.length; i++){
    objArray[i].height('auto');
    if (debug == true) {
      console.log(objArray[i].attr('id') + ": " + objArray[i].height())
    };
  }
}

var checkHeight = function(objArray){
  for (var i = 0; i < objArray.length; i++){
    console.log(objArray[i].attr('id') + ": " + objArray[i].height());
  }
}


$(document).ready(main);
$(window).load(resizeInfoPanels);
$(window).resize(resizeInfoPanels);
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var nav = $('#custom-nav');
  var nav_height = nav.height();
  if ((scroll + nav_height) >= $("#story").position().top){
    nav.addClass('nav-shadow');
  }
  else {
    nav.removeClass('nav-shadow');
  };
});

// set the date we're counting down to
var target_date = new Date('Aug, 29, 2015, 17:00:00').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById("countdown");
console.log(countdown);

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    // countdown.innerHTML = '<div class="col-xs-3 timer_item"><div class="col-md-12 timer_number">' + days +  '</div><div class="col-md-12 timer_label"><b>Days</b></div></div><div class="col-xs-3 timer_item"><div class="col-md-12 timer_number">' + hours +  '</div><div class="col-md-12 timer_label"><b>Hrs</b></div></div><div class="col-xs-3 timer_item"><div class="col-md-12 timer_number">' + minutes +  '</div><div class="col-md-12 timer_label"><b>Mins</b></div></div><div class="col-xs-3 timer_item"><div class="col-md-12 timer_number">' + seconds +  '</div><div class="col-md-12 timer_label"><b>Secs</b></div></div>';
    // document.getElementById("days").innerHTML = days;
    $("#days").html(days + '<br><span class="timer_label">Days</span>');
    $("#hours").html(hours + '<br><span class="timer_label">Hrs</span>');
    $("#minutes").html(minutes + '<br><span class="timer_label">Mins</span>');
    $("#seconds").html(seconds + '<br><span class="timer_label">Secs</span>');
}, 1000);
