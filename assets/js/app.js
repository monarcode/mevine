$(document).ready(function(){
    var navbar = document.getElementById('navbar');
    var toggler = document.getElementById('navbar__toggler');
    var links = document.getElementById('navbar__links');


    $('.navbar__toggler').click(function(){
        links.classList.toggle('is-active');
        toggler.classList.toggle('is-clicked');

        if(!navbar.classList.contains('has-scrolled')){
            navbar.classList.toggle('has-scrolled');
        }
    })
})