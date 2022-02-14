$(document).ready(function () {

    new WOW().init();
    
    // smooth scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });

    // form validation options
    $('.window__form').validate({
        errorPlacement: function(error,element) {
            return true;
        },
        rules: {
            firstName: {
                required: true,
                minlength: 2
            },
            lastName: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7
            },
            email: {
                required: true,
                email: true,
                minlength: 5
            },
            agree: {
                required: true,
            },
        },
    });

    document.querySelector('form.window__form').addEventListener('submit', function(e) {
        e.preventDefault();
        let x = document.querySelector('form.window__form').elements;
        console.log("First Name: ", x['firstName'].value);
        console.log("Second Name: ", x['lastName'].value);
        console.log("Phone: ", x['phone'].value);
        console.log("e-Mail: ", x['email'].value);
    });
});