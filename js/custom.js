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
$('#carousel').flexslider({
  animation: "slide",
  controlNav: false,
  animationLoop: false,
  slideshow: true,
  itemWidth: 210,
  itemMargin: 5,
  asNavFor: '#slider'
});

$('#slider').flexslider({
  animation: "slide",
  controlNav: false,
  animationLoop: true,
  slideshow: true,
  sync: "#carousel"
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

  // $(".section-title").each(function(){
  //   $this = $(this);
  //   controller.addTween($this, TweenMax.from( $this, 2, {css:{opacity: 0, scaleX: .5}, ease: Elastic.easeOut.config(1, 0.75), y: 0 }), scrollDuration);
  // })

  // $(".story").each(function(){
  //   $this = $(this);
  //   var entry = 0;
  // })


// -------------------------------- INSTAGRAM -----------------------------
var feed = new Instafeed({
  clientId: 'a415febb075e4f78a8db95973981df84',
  limit: 20,
  sortBy: 'most-liked',
  get: 'tagged',
  tagName: 'test',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
});
feed.run();

//---------------------------------- WEDDING INFO ---------------------------


resizeInfoPanels();


// --------------------------------- WEDDING PARTY --------------------------
var wedding_party = [
{
  Name:"Adrienne"
  ,Img:"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/206640_10150562660110302_7845927_n.jpg?oh=089f146a132f1f5ec2831b034f1aec3d&oe=5594D67D&__gda__=1434720940_960a8e5d935025c480f6c30bcdbae2e4"
  ,Hover:"Maid of Honor"
  ,Type:"bridesmaid"
  ,Title:"Lauren\'s Sister"
  ,Description:"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.</p><p>Molestiae sed enim laboriosam atque delectus voluptates rerum nostrum sapiente obcaecati molestias quasi optio exercitationem, voluptate quis consequatur libero incidunt, in, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nobis officiis, autem earum tenetur quidem. Quae non dicta earum. Ipsum autem eaque cum dolor placeat corporis quisquam dolorum at nesciunt.</p>"
}
,{
  Name:"Ben"
  ,Img:"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash2/t31.0-8/241956_10101251654506232_1533911831_o.jpg"
  ,Hover:"Best Man"
  ,Type:"groomsmen"
  ,Title:"Michael\'s Oldest Friend"
  ,Description:"TBD"
}
,{
  Name:"Lauren"
  ,Img:"https://scontent-sjc.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10805785_10101607429330803_7746208321164114642_n.jpg?oh=278c179d7846e9482188e17ecca237eb&oe=559011A2"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Lauren\'s Bestie"
  ,Description:"TBD"
}
,{
  Name:"Harry"
  ,Img:"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-9/579138_10101206231708815_703685165_n.jpg?oh=655a7e7139b2addf440687d6bf4fcff3&oe=55845602&__gda__=1434714749_16ac639ef3b2a8029eeb867b3c9161d6"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Michael\'s College Roomate"
  ,Description:"TBD"
}
,{
  Name:"Hannah"
  ,Img:"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10500545_608853182086_6254427698399059966_n.jpg?oh=76b67bf93f604e2cdaae14febc1035f5&oe=55929C3E&__gda__=1431020093_5dd71210715d5ca738757eb3e99c8864"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"The Life of the Party"
  ,Description:"TBD"
}
,{
  Name:"Dishan"
  ,Img:"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10653421_10203658431719864_3243315797973048647_n.jpg?oh=8e60cbe1e60b6707c12dbd630bb6f825&oe=55969F7C&__gda__=1435709699_0e0c0458bbed7a6309e01f24fe66b6e8"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Michael\'s Brother From Another Mother"
  ,Description:"TBD"
}
,{
  Name:"Gaby"
  ,Img:"images/portfolio-7.jpg"
  ,Hover:"Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Michael\'s Sister From Another Mister"
  ,Description:"TBD"
}
,{
  Name:"Sridhar"
  ,Img:"images/portfolio-7.jpg"
  ,Hover:"Groomsman"
  ,Type:"groomsmen"
  ,Title:"Michael\'s College Buddy"
  ,Description:"TBD"
}
,{
  Name:"Katie"
  ,Img:"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/279233_417879128270457_7499262_o.jpg"
  ,Hover:"Junior Bridesmaid"
  ,Type:"bridesmaid"
  ,Title:"Lauren\'s Coolest Cousin"
  ,Description:"TBD"
}
,{
  Name:"Darrin"
  ,Img:"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-9/1233635_10151728054615835_369814455_n.jpg?oh=4e5c7ee9a5abbc3dac506eeff00e7287&oe=55951D06&__gda__=1435625323_ad459c4c074c7196cc6af4b0b650ccc7"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Michael\'s Buddy"
  ,Description:"TBD"
}
,{
  Name:"Diana"
  ,Img:"https://scontent-lax.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/1947589_10102375937499035_6269758663935604068_n.jpg?oh=b5183f81052bf75813b4ba7d08df7164&oe=55863C3B"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Lauren\'s Pal"
  ,Description:"TBD"
}
,{
  Name:"Pierson"
  ,Img:"https://scontent-lax.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/395655_10100599817981785_1168786331_n.jpg?oh=fb925c66796f3165c024a3e334c3ab5e&oe=557E58DC"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Michael\'s Amigo"
  ,Description:"TBD"
}
,{
  Name:"Kalina"
  ,Img:"https://scontent-lax.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1477360_10102097942817605_1015099472_n.jpg?oh=f45581a9bfa31dde4ccc2184738c9e23&oe=554AACF7"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Harry\'s Wife"
  ,Description:"TBD"
}
,{
  Name:"Ron"
  ,Img:"https://scontent-lax.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/1908049_337551139737126_2632047761377470505_n.jpg?oh=5d222f6b1a1ffd1b1ca057e3c40acea9&oe=5577D7DA"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Lauren\'s Uncle"
  ,Description:"TBD"
}
,{
  Name:"Ursula"
  ,Img:"images/portfolio-7.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Michael\'s Grandmother"
  ,Description:"TBD"
}
,{
  Name:"Dave & Michele"
  ,Img:"images/portfolio-7.jpg"
  ,Hover:"Reader"
  ,Type:"other"
  ,Title:"Family Friends"
  ,Description:"TBD"
}  
];
var html_builder = '';
for (var i = 0; i < wedding_party.length; i++){
  Person = wedding_party[i];
  html_builder += '<div class="col-xs-6 col-sm-6 col-md-3 isotope-item ' + Person.Type + '"><div class="image-box"><div class="overlay-container"><img src="' + Person.Img + '" alt="' + Person.Name + '"><a class="overlay" data-toggle="modal" data-target="#project-1"><i class="fa fa-search-plus"></i><span>' + Person.Hover + '</span></a></div><a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-1">' + Person.Name + '</a></div><!-- Modal --><div class="modal fade" id="project-1" tabindex="-1" role="dialog" aria-labelledby="project-1-label" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="project-1-label">' + Person.Title + '</h4></div><div class="modal-body"><h3>'+Person.Name+'</h3><div class="row"><div class="col-md-6">'+Person.Description+'</div><div class="col-md-6"><img src="' + Person.Img + '" alt="' + Person.Name + '"></div></div></div><div class="modal-footer"><button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Modal end --></div>';
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


$(document).ready(main);

var resizeInfoPanels = function(){
  var groups = [[$("#where"), $("#when")], [$('#accommodations-left'), $('#accommodations-center'), $('#accommodations-right')]];
  for (var i = 0; i < groups.length; i++){
    console.log(groups[i]);
    resetHeight(groups[i]);
    if ($(window).width() > 991){
      setHeight(groups[i]);
    }
  }
};

var setHeight = function(objArray){
  var h = 0;
  for (var i = 0; i < objArray.length; i++){
    if (objArray[i].height() > h){
      h = objArray[i].height();
    }
  }
  for (var i = 0; i < objArray.length; i++){
    objArray[i].height(h);
  }
}

var resetHeight = function(objArray){
  for (var i = 0; i < objArray.length; i++){
    objArray[i].height('auto');
  }
}
