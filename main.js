// Referenze
var bar = $('.fa-bars');
var hamMenu = $('.hamburger-menu');
var close = $('.fa-times');

// Premere icon-bars e far apparire il menu-hamburger
bar.click( function() {
    hamMenu.fadeIn();
})

// Premere il close e far scomparire il menu-hamburger
close.click( function() {
    hamMenu.fadeOut();
})
