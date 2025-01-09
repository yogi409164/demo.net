
$(document).ready(function () {
       
    const $signInButton = $('#signInBtn');
    const $signUpButton = $('#signUpBtn');
    const $container = $('.container');

  

    $signInButton.on('click', function () {
        $container.removeClass('right-panel-active');
        $container.addClass('left-panel-active');
        $('.class2').css('display', 'block');
        $('.class1').css('display', 'none');
    });

    $signUpButton.on('click', function () {
        $container.removeClass('left-panel-active');
        $container.addClass('right-panel-active');

        $('.class1').css('display', 'block');
        $('.class2').css('display', 'none');
    });
    $signInButton.click()
});



