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