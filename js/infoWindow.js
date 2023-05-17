$(document).ready(() => {
    $('.show-button').css({
        transition: 'all 1.5s'
    })
    
    // info-hidden-wrapper
    $('.info-wrapper').click(() => { //it's our black div with important info onclick it show all info
        if ($('.show-button').hasClass('animate-button')) { //check class and make animation, not toggle because height have animation by Jquery
            $('.show-button').removeClass('animate-button')

            $('.info-hidden-wrapper').addClass('hidden');
        }
        else {
            $('.show-button').addClass('animate-button')
            setTimeout(() => {
                $('.info-hidden-wrapper').removeClass('hidden');

            }, 900)

        }


    })
})