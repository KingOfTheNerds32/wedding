  

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

};

$(document).ready(main);