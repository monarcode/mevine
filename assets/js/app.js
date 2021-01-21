$(document).ready(function(){
    var navbar = document.getElementById('navbar');
    var toggler = document.getElementById('navbar__toggler');
    var links = document.getElementById('navbar__links');

    var controller = new ScrollMagic.Controller();

    var navScene = new ScrollMagic.Scene({
        triggerElement: '#about',
        triggerHook: 0.1
    })
    .setClassToggle('#navbar', 'has-scrolled')
    .addTo(controller);

    $('.navbar__toggler').click(function(){
        links.classList.toggle('is-active');
        toggler.classList.toggle('is-clicked');

        if(!navbar.classList.contains('has-scrolled')){
            navbar.classList.toggle('has-scrolled');
        }
    });

    // whatsapp linkage
    $('.cta, .contact-cta').click(function(){
        window.open('https://api.whatsapp.com/send?phone=2348166341883&text=Hello,%20i%20just%20visited%20your%20website,%20how%20can%20i%20get%20started?')
    })
})