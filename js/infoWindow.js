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
            let height = '293px'
            
            
             if ($(document).width() <= 372) { //check width of user device/screen
                height = '512px' //height of info black div

            }
            else if ($(document).width() <= 381) {
                height = '492px'

            }
            else if ($(document).width() <= 391) {
                height = '512px'

            }
            else if ($(document).width() <= 414) {
                height = '492px'

            }
            else if ($(document).width() <= 423) {
                height = '472px'

            }
            else if ($(document).width() <= 441) {
                height = '492px'

            }
            else if ($(document).width() <= 471) {
                height = '472px'

            }
            else if ($(document).width() <= 499) {
                height = '452px'

            }
            else if ($(document).width() <= 506) {
                height = '472px'

            }
            else if ($(document).width() <= 549) {
                height = '452px'

            }
            else if ($(document).width() <= 639) {
                height = '432px'

            }
            else if ($(document).width() < 1023) {
                height = '416px'

            }
            else if ($(document).width() <= 1063) {
                height = '293px'

            }
            else if ($(document).width() <= 1279) {
                height = '274px'

            }
            else {
                height = '293px'
            }
            $('.info-show-wrapper').animate({
                height: height
            }, 1500)
            $('.show-button').addClass('animate-button')
            setTimeout(() => {
                $('.info-hidden-wrapper').removeClass('hidden');

            }, 900)

        }


    })
})