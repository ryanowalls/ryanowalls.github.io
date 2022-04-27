// viewport height fix for mobile
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', function() {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    positionPolaroids();
});

function init() {
	positionPolaroids();
}

function positionPolaroids() {
    var polaroid1 = $('.polaroid-wrapper').get(0);
    var polaroid2 = $('.polaroid-wrapper').get(1);
    var polaroid3 = $('.polaroid-wrapper').get(2);
    var polaroidWidth = $('.polaroid').width();
    var polaroidHeight = $('.polaroid').height();
    
    var logoOffset = $('.logo-wrapper').offset();
    var logoWidth = $('.logo-wrapper').width();
    var logoHeight = $('.logo-wrapper').height();

    $(polaroid1).css('left', logoOffset.left + logoWidth - 20);
    $(polaroid1).css('top', logoOffset.top);
    $(polaroid2).css('left', logoOffset.left - polaroidWidth + 15);
    $(polaroid2).css('top', logoOffset.top + 20);
    $(polaroid3).css('left', logoOffset.left + (logoWidth / 2) - (polaroidWidth / 2));
    $(polaroid3).css('top', logoOffset.top - polaroidHeight + 30);
    console.log(logoOffset)
}