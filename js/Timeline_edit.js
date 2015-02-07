function move() {
    var bh = $('body').height();
    $('.row').each(function() {
        var rh = $(this).offset().top; //get distance between row and top of window
        var op = 0.3; //position to come together (0=top :: 1=bottom)
        var dn = ((rh/bh)-op)*100; //turn distance into pos
        var oo = ((dn-50)*-2)/100; //calc opacity
        if (oo < 0.2) { oo = 0.2; } //minimum opacity
        var as = 500; //speed *animation is not active, css is faster than animate but choppy in ff
        //min and max values && bottom pos/opacity
        if (dn < 2 || Math.abs($('#inner').offset().top) + $('#wrap').height() + $('#wrap').offset().top >= ($('#inner').outerHeight() - 1)) { dn = 2; oo = 1; }
        else if (dn > 50) { dn = 50; }
        //animation
        if ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) { //for 3d animations
            var rd = (dn/50)*270; //rotateY
            if (rd < 11) { rd = 0; } //minimum for rotateY
            var dv = (dn/50)*75; //translate3d
            var mw = $('#wrap').width()/2; //get half parent width
            var dw = mw/20; //translateZ
            //animate perspective
            $(this).children('.left').css('-webkit-transform', 'translate3d(-'+dv+'%, 0, 0) rotateY(-'+rd+'deg) translate3d(-'+dv+'%, 0, 0) rotateX('+(rd/2)+'deg) translateZ('+dw+'px)');
            $(this).children('.right').css('-webkit-transform', 'translate3d('+dv+'%, 0, 0) rotateY('+rd+'deg) translate3d('+dv+'%, 0, 0) rotateX('+(rd/2)+'deg) translateZ('+dw+'px)');
            $(this).css('-webkit-perspective', mw);
        } else { //for linear animation
            //animate
            $(this).children('.left').css('margin-left', '-'+dn+'%');
            $(this).children('.right').css('margin-right', '-'+dn+'%');
        }
        $(this).fadeTo(0, oo); //fade in/out
    });   
}
move();
$('#wrap').scroll(function () {
    move();
});