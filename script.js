$(document).ready(function() {
    // jQuery code

    $(".trick-container").hide();

    $('.moment-text').hide();

    $('.second-card-container').hide();

    $('.got-one').on('click', function() {

        //disable the button
        $('.got-one').prop('disabled', true)

    
        //make  all of the cards fade away
        $('.card').fadeOut(2000);

        setTimeout(function() {
            //make the moment text appear
            $('.moment-text').fadeIn(2000);
        }   , 3000);

        //make the moment text disappear
        setTimeout(function() {
            //make the moment text appear
            $('.moment-text').fadeOut(3000);
            //make the button disappear
            $('.got-one').fadeOut(4000);
        }   , 4000);

        setTimeout(function() {
            //make the second cards appear
            $('.second-card-container').fadeIn(5000);
        }   , 9000);

    });

    $('.contact').on('mouseenter', function() {
        $('.contact-card').css('right', '0px');
    });

    $('.contact-card').on('mouseleave', function() {
        $('.contact-card').css('right', '-400px');
    });

    $('.magicbtn').on('click', function() {
        $('.trick-container').slideDown(1000);
        //scroll down to bottom of page
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 5000);
        //remove the button
        $('.magicbtn').fadeOut(2500);
    });
        
    });

