//load
(function(){
    // Animate loader off screen
    $(window).load(function() {
        $(".loader").delay(300).fadeOut("slow");
    });

    //after refresh send to top
    $(function(){
        window.onunload = function(){ window.scrollTo(0,0); }
    });
})();


/*toggle menu*/
(function(){
    $('.hamburger').click(function(){
        $('.site-nav--mobile, .close-button').fadeIn('fast');
        $('.hamburger').fadeOut('fast');
    });

    $('.close-button').click(function(){
        $('.site-nav--mobile, .close-button').fadeOut('fast');
        $('.hamburger').fadeIn('fast');
    });
})();


/*niceScroll*/
(function(){
    $(document).ready(function(){
        //browsers =====================================================================================================
        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
        var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;


        if( $(window).width() > 1400 ){
            if( (isChrome === true) || (isOpera === true) ){
                $("html").niceScroll({zindex: "10000", cursorborder: "none", scrollspeed: "10", mousescrollstep: "36", cursorcolor: "#260500"});
            } else {
                $("html").niceScroll({zindex: "10000", cursorborder: "none", scrollspeed: "50", mousescrollstep: "40", cursorcolor: "#260500"});
            }
        }
    });
})();


/*scrollDown events*/
(function(){
    $(document).scroll(function() {
        var opacity = Math.min(($(document).scrollTop() / 500), 1);
        var shadow = Math.min(($(document).scrollTop() / 500), .1);

        $(".site-header").css({ "background": "rgba(255, 255, 255," + opacity + ")", "box-shadow": "0 5px 15px rgba(0, 0, 0, " + shadow + ")" });
        $('.laiksUnTel, .site-title').css({ "opacity": opacity });
        if($(window).width() < 1000){
            $('.site-header, .site-title').css({ "opacity": 0 });
            $('.laiksUnTel').css({ "box-shadow": "0 -5px 15px rgba(0, 0, 0, " + shadow + ")" });
        }
    });
})();


//email
(function(){
    /*safer email*/
    var contactForm = document.getElementById('contactform');
    contactForm.setAttribute('action', '//formspree.io/' + 'info' + '@' + 'originalas-davanas' + '.' + 'lv');

    /*using select*/
    $("select").on("change", function() {
        var selected = $(this).find('option:selected').text().toLowerCase();
        $('[data-mail="caption"]').attr({"value": selected})
    }).trigger("change"); // initialise on load

    /*form validation*/
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
})();