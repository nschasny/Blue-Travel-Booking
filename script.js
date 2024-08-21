$(function(){
    // Form Submission
    $('.form-button').on('click', function(){
        let data = {
            'name': $('[name="name"]').val(),
            'phone': $('[name="phone"]').val(),
            'email': $('[name="email"]').val()
        };
        $.post('apip.php', data, function(response){
            if (response == 1) {
                $('[name="name"]').val('');
                $('[name="phone"]').val('');
                $('[name="email"]').val('');
                alert('Your response was recorded,\n we will contact you soon');
            } else {
                alert('Error Occurred: Try Again');
            }
        });
        return false;
    });
});