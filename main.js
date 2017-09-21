

// BUBBLE JS
var myName = "Logan Morales";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if (10 < 3) {
    bubbleShape = 'square';
} else {
    bubbleShape = 'circle';
}

bounceBubbles();


$(() => {
    $('canvas').width($(window).width())

    // const scrollTop = $(window).scrollTop(),
    // elementOffset = $('#my-element').offset().top,
    // distance      = (elementOffset - scrollTop);



    $(window).scroll(function(e) {
        var $el = $('.proj-header');
        var isPositionFixed = ($el.css('position') == 'fixed');
        if ($(this).scrollTop() > 700 && !isPositionFixed) {
            $('.proj-header').css({ 'position': 'fixed', 'top': '0px' });
        }
        if ($(this).scrollTop() < 700 && isPositionFixed) {
            $('.proj-header').css({ 'position': 'static', 'top': '0px' });
        }
    });

    $(window).scroll(function(e){
        var $el2 = $('.profile-header')
        var isPositionFixed = ($el2.css('position') == 'fixed');
        if ($(this).scrollTop() > 2390 && !isPositionFixed){
            $el2.css({'position': 'fixed', 'top': '0px'})
            $('.proj-header').css({ 'display': 'none'});
        }
        if ($(this).scrollTop() < 2390 && isPositionFixed){
            $el2.css({'position': 'static', 'top': '0px'})
            $('.proj-header').css({ 'position': 'fixed', 'top': '0px' });
            $('.proj-header').css({ 'display': 'inherit'});
        }
    });

    $('.project').hover(function() {
        console.log('clicked')
        setTimeout(() => {
            $(this).toggleClass('show-description');
            $('.ment').toggleClass('animated fadeInUp')
            $('.pText').toggleClass('animated fadeInUp') // WORK HERE!!!
            setTimeout(() =>{

                $('.button-hide').toggleClass('button-show animated fadeIn')
                
            }, 500)
        }, 100)
    });

    // $(window).scroll(function(e) {
    //     var $el = $('.profile-header');
    //     var isPositionFixed = 
    // })

    // TYPER ------
    
    var first_sentence = document.getElementById('first-sentence');
    var second_sentence = document.getElementById('second-sentence');

    var typewriter = new Typewriter(first_sentence, {
        typingSpeed: 20
    });

    var typewriterTwo = new Typewriter(second_sentence,{
        typingSpeed: 20
    })

    typewriter.typeString('Logan Morales is a student at Montclair State' 
                        + ' University and alumni of General Assembly\'s Web' 
                        + ' Development Immersive program.')
        .start();

    typewriterTwo.pauseFor(5500)
        .typeString(' Logan is passionate'
                    + ' about learning, understanding and the creation of'
                    + ' online web applications. ')
        .start();


    // MENU ---

    var items = document.querySelectorAll('.circle a');

    for(var i = 0, l = items.length; i < l; i++) {
      items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      
      items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }

    document.querySelector('.menu-button').onclick = function(e) {
       e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
    }
})



