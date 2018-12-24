var nowVisible = '.post img'

$(function(){
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);
        nowVisible = '.posts .' + get_id + ' img';
        $('.post').not(get_current).hide();
        get_current.show();
    });

    $('#showall').click(function(){
        $('.post').show();
        nowVisible = '.post img';
    });
});

var sliderInit = function () {
    let i = 0;
    let next = document.querySelector('.next');
    next.addEventListener('click', function(){
        i++;
        if(i === groupImg.length){
            i = 0;
        }
        $('.wrapper img').attr('src', groupImg[i].attr('src'));
    });
    let prev = document.querySelector('.prev');
    next.addEventListener('click', function(){
        i--;
        if(i === -1){
            i = groupImg.length - 1;
        }
        $('.wrapper img').attr('src', groupImg[i].attr('src'));
    });
};

$('document').ready(function(){
    $(".owl-carousel").owlCarousel({
        items:7,
        margin:100,
        nav:true,
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000
    });
});


$(function(){
    $('.post img').on('click', function(){
        var get_src = $(this).attr('src');
        $('.wrapper img').attr('src', get_src);
        $('.wrapper').css('display', 'flex');
    });
});

$(function(){

    $('.wrapper a').on('click', function(){
        $('.wrapper').hide();
    });

    $('.wrapper').on('click', function(event){
        if (event.target === $(this)[0]){
            console.log(event.target);
            $('.wrapper').hide();
        }
    });
});

$(function(){
    let i = 0;

    $('.next').on('click', function(){
        i++;
        if (i === $(nowVisible).length) {
            i = 0;
        }
        var get_i = $(nowVisible)[i];
        var get_attr = $(get_i).attr('src');
        $('.wrapper img').attr('src', get_attr);
    });

    $('.prev').on('click', function(){
        i--;
        if (i === -1) {
            i = $(nowVisible).length -1;
        }
        var get_i = $(nowVisible)[i];
        var get_attr = $(get_i).attr('src');
        $('.wrapper img').attr('src', get_attr);
    })
});
