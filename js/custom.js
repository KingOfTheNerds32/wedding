var main = function(){

  // ------------------------------- COUNTDOWN ------------------------
   //month is zero based
    //UTC is 8 hours different
    var start = new Date(Date.UTC(2014, 10, 24, 1))
    console.log(start);
    start = start.getTime() / 1000;
    var date = new Date(Date.UTC(2015, 7, 30, 1, 30, 0));
    console.log(date);
    var now   = new Date();
    var diff = date.getTime() / 1000 - now.getTime() / 1000;
    now = now.getTime() / 1000;
    date = date.getTime() / 1000;


    if ($('.countdown').length){
     $('.countdown').final_countdown({
       'start': 1362139200,
       'end': date,

       'now': now
     });
   }


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
  ,Img:"/assets/party/Adrienne.jpg"
  ,Hover:"Maid of Honor"
  ,Type:"bridesmaid"
  ,Title:"Lauren\'s Sister"
  ,Description:"If you looked at Lauren and Adrienne side-by-side, you probably wouldn’t be able to tell that they are sisters. Though they may look very different, both sisters share a love of art. While Lauren enjoys viewing art and dabbling in arts and crafts, Adrienne produces unique and beautiful pieces as an artist and graphic design guru. Adrienne is the wildly creative member of the family. With her as the Maid of Honor, you can rest assured that there will be no puffed sleeves, frilly bows, or otherwise ugly bridal party outfits!"
  ,Order: 10
}
,{
  Name:"Ben"
  ,Img:"/assets/party/Ben.jpg"
  ,Hover:"Best Man"
  ,Type:"groomsmen"
  ,Title:"Michael\'s Oldest Friend"
  ,Description:"TBD"
  ,Order: 20
}
,{
  Name:"Lauren"
  ,Img:"/assets/party/Lauren_G.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Lauren\'s Bestie"
  ,Description:"Lauren and Lauren met in ballet class during high school and immediately bonded over their mutual interests in musicals, sparkly things, arts & crafts, dance, and what makes people tick. Lauren and Lauren can be found in heated discussion about the most recent episode of So You Think You Can Dance, making greeting cards with way too much glitter, or giggling hysterically over…nothing really."
  ,Order: 30
}
,{
  Name:"Harry"
  ,Img:"/assets/party/Harry.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Michael\'s College Roomate"
  ,Description:"TBD"
  ,Order: 40
}
,{
  Name:"Hannah"
  ,Img:"/assets/party/Hannah.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"The Life of the Party"
  ,Description:"Hannah has to tolerate sharing a small office with Lauren at The Guidance Center. Hannah can challenge anyone to a Disney song-singing or Friends line-quoting competition and probably win – she uses the competitive edge she honed as a collegiate athlete to go deep catalogue. Lauren can always count on Hannah to put things in perspective or insert a strategically placed corny joke. Most recently, Hannah discovered she can text message voice recordings, which has opened up a whole new world of humorous communication."
  ,Order: 50
}
,{
  Name:"Dishan"
  ,Img:"/assets/party/Dishan.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Michael\'s Brother From Another Mother"
  ,Description:"TBD"
  ,Order: 60
}
,{
  Name:"Gaby"
  ,Img:"images/portfolio-7.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Michael\'s Sister From Another Mister"
  ,Description:"When Lauren met Michael, she simultaneously acquired a thoughtful, smart, kind, new friend in Gaby. Gaby’s parents are best friends with Michael’s parents, and Gaby and Michael grew up together. While don’t ever get to snap a picture of Gaby (Gaby, you will be in photos on the wedding day – start preparing now), we have plenty of fun memories of this athlete, aspiring lawyer, and awesome new mommy."
  ,Order: 70
}
,{
  Name:"Sridhar"
  ,Img:"/assets/party/sridhar.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Michael\'s College Buddy"
  ,Description:"TBD"
  ,Order: 80
}
,{
  Name:"Katie"
  ,Img:"/assets/party/junior.jpg"
  ,Hover:"Junior Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Lauren\'s Coolest Cousin"
  ,Description:"Katie is Lauren’s favorite cousin (but shhhh! Don’t tell the other cousins!). Katie has already given her expert opinion on her dress for the wedding and is a seasoned pro at being in the bridal party. She was recently featured as the flower girl in a friend’s wedding on TV! Lauren is excited to promote Katie to Jr. Bridesmaid. Lauren and Katie tend to gravitate toward each other at family gatherings, at which time Katie likes to scare Lauren by talking about all the scary movies she watches. Even when she is recounting a blood curdling movie plot, it is easy to see that Katie smart, funny, friendly, and kind."
  ,Order: 90
}
,{
  Name:"Darrin"
  ,Img:"/assets/party/Darrin.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Michael\'s Buddy"
  ,Description:"TBD"
  ,Order: 100
}
,{
  Name:"Diana"
  ,Img:"/assets/party/Diana.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Lauren\'s Pal"
  ,Description:"TBD"
  ,Order: 130
}
,{
  Name:"Pierson"
  ,Img:"/assets/party/Pierson.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Michael\'s Amigo"
  ,Description:"TBD"
  ,Order: 120
}
,{
  Name:"Kalina"
  ,Img:"/assets/party/Kalina.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Harry\'s Wife"
  ,Description:"TBD"
  ,Order: 110
}
,{
  Name:"Ron"
  ,Img:"/assets/party/Ron.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Lauren\'s Uncle"
  ,Description:"TBD"
  ,Order: 140
}
,{
  Name:"Dave & Michele"
  ,Img:"/assets/party/DaveMichele.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Famiy Friend"
  ,Description:"TBD"
  ,Order: 150
}
,{
  Name:"Leah"
  ,Img:"/assets/party/Leah.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Family Friends"
  ,Description:"TBD"
  ,Order: 160
}  
];
wedding_party = _.sortBy(wedding_party, 'Order');
var html_builder = '';
for (var i = 0; i < wedding_party.length; i++){
  Person = wedding_party[i];
  html_builder += '<div class="col-xs-6 col-sm-6 col-md-3 isotope-item ' + Person.Type + '"><div class="image-box"><div class="overlay-container"><img src="' + Person.Img + '" alt="' + Person.Name + '"><a class="overlay" data-toggle="modal" data-target="#' + Person.Name + '"><i class="fa fa-search-plus"></i><span>' + Person.Hover + '</span></a></div><a class="btn btn-default btn-block" data-toggle="modal" data-target="#' + Person.Name + '">' + Person.Name + '</a></div><!-- Modal --><div class="modal fade" id="' + Person.Name + '" tabindex="-1" role="dialog" aria-labelledby="' + Person.Name + '-label" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="' + Person.Name + '-label">' + Person.Title + '</h4></div><div class="modal-body"><h3>'+Person.Name+'</h3><div class="row"><div class="col-md-6">'+Person.Description+'</div><div class="col-md-6"><img src="' + Person.Img + '" alt="' + Person.Name + '"></div></div></div><div class="modal-footer"><button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Modal end --></div>';
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