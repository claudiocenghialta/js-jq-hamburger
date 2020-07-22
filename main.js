$('header .header-right a i.fa-bars').click(function () {
    $('.hamburger-menu').fadeIn('slow');
});

$('header .hamburger-menu a.close i.fa-times').click(function () {
    $('.hamburger-menu').fadeOut('slow');
});