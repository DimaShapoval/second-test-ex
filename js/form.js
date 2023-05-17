$(document).ready(()=>{
    const REGULAR_EMAIL = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    $('#submit-button').click((event)=>{
        if(!$('#email').val() || !REGULAR_EMAIL.test($('#email').val())){ //if input value incorrect it show to user error
            event.preventDefault();
            $('#email').addClass('border')
            $('#email').addClass('border-rose-600')
            $('.error-wrapper').removeClass('hidden')
        }
    })
    $('#email').on('input',()=>{
        $('#email').removeClass('border')
            $('#email').removeClass('border-rose-600')
            $('.error-wrapper').addClass('hidden')
    })
})