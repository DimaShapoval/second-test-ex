$(document).ready(() => {
    $('.show-button').css({
        transition: 'all 1.5s'
    })
    
    // info-hidden-wrapper
    $('.info-wrapper').click(() => { //it's our black div with important info onclick it show all info
        if ($('.show-button').hasClass('animate-button')) { //check class and make animation, not toggle because height have animation by Jquery
            $('.info-show-wrapper').animate({
                height: '72px'
            }, 1500)
            $('.show-button').removeClass('animate-button')

            $('.info-hidden-wrapper').addClass('hidden');
        }
        else {
           
            $('.info-show-wrapper').animate({
                height: 'auto'
            }, 1000)
            $('.show-button').addClass('animate-button')
            setTimeout(() => {
                $('.info-hidden-wrapper').removeClass('hidden');

            }, 900)

        }


    })
})