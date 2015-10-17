var main = function(){
  $( "#target" ).submit(function( event ) {
    // alert( "Handler for .submit() called." );
    console.log($('#target'));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.mongolab.com/api/1/databases/wedding_site/collections/test?apiKey=KRK6B53SHlKkbiuNMDBnnt50-_lVX6sr", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    // console.log(json);
    //xhr.send(json);
  });
}

$(document).ready(main);
