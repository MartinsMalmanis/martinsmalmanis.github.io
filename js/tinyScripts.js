//browsers =====================================================================================================
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;


$(window).load(function() {
    // Animate loader off screen
    $(".loader").delay(300).fadeOut("slow");
});


/*toggle menu*/
$('.hamburger').click(function(){
    $('.site-nav--mobile, .close-button').fadeIn('fast');
    $('.hamburger').fadeOut('fast');
});


$('.close-button').click(function(){
    $('.site-nav--mobile, .close-button').fadeOut('fast');
    $('.hamburger').fadeIn('fast');
});


/*niceScroll*/
$(document).ready(function(){
    if( $(window).width() > 1400 ){
        if( (isChrome === true) || (isOpera === true) ){
            $("html").niceScroll({zindex: "10000", cursorborder: "none", scrollspeed: "10", mousescrollstep: "36", cursorcolor: "#260500"});
        } else {
            $("html").niceScroll({zindex: "10000", cursorborder: "none", scrollspeed: "50", mousescrollstep: "40", cursorcolor: "#260500"});
        }
    }
});


/*after refresh send to top*/
$(function(){
    window.onunload = function(){ window.scrollTo(0,0); }
});


/*scrollDown events*/
$(document).scroll(function() {
    var opacity = Math.min(($(document).scrollTop() / 500), 1);
    var shadow = Math.min(($(document).scrollTop() / 500), .1);

    $(".site-header").css({ "background": "rgba(255, 255, 255," + opacity + ")", "box-shadow": "0 5px 15px rgba(0, 0, 0, " + shadow + ")" });
    $('.laiksUnTel, .site-title').css({ "opacity": opacity });
    if($(window).width() < 1000){
        $('.site-header, .site-title').css({ "opacity": 0 });
        $('.laiksUnTel').css({ "box-shadow": "0 -5px 15px rgba(0, 0, 0, " + shadow + ")" });
    }
    /*console.log($(document).scrollTop());
     console.log(opacity, shadow);*/
});


/*smooth scroll*/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/*safer email*/
$(function(){
    var contactForm = document.getElementById('contactform');
    contactForm.setAttribute('action', '//formspree.io/' + 'info' + '@' + 'originalas-davanas' + '.' + 'lv');
});


/*using select*/
$(function() {
    $("select").on("change", function() {
        var selected = $(this).find('option:selected').text().toLowerCase();
        //console.log(selected);

        $('[data-mail="caption"]').attr({"value": selected})
    }).trigger("change"); // initialise on load
});


/*form validation*/
$(function(){
    $('[data-submit="submit"]').click(function(){
        var emailField = $('[data-mail="input"]').val();
        var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        var textArea = $('[data-text="area"]').val();

        if($.trim(emailField) === "" || textArea.length < 2 || $.trim(textArea) === ""){
            swal("Kļūda!", "Lūdzu aizpildiet ar * atzīmētos laukus!", "error");
            return false;
        } else if(!emailFilter.test(emailField)){
            swal("Kļūda!", "Lūdzu ievadiet derīgu epastu!", "error");
            return false;
        } else {
            swal({title: "Ziņojums nosūtīts!", type: "success"});
            return true
        }
    });
});