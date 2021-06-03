$(document).ready(function(){
    
    
    $('.sc1-gall').click(function(){
        
        click = $(this).index();
        
        $('.banner-img').fadeOut(700);
        $('.banner-img').eq(click).fadeIn(700);
        
        $('.text-img').fadeOut(700);
        $('.text-img').eq(click).fadeIn(700);
        
        $('.sc1-gall').removeClass('sc1-gall-color');
        $('.sc1-gall').eq(click).addClass('sc1-gall-color');
        
    });
    
    click = 0;
    setInterval(function(){
        
        click++;
        if (click > 2) {
            click = 0;
        }
        
        $('.banner-img').fadeOut(700);
        $('.banner-img').eq(click).fadeIn(700);
        
        $('.text-img').fadeOut(700);
        $('.text-img').eq(click).fadeIn(700);
        
        $('.sc1-gall').removeClass('sc1-gall-color');
        $('.sc1-gall').eq(click).addClass('sc1-gall-color');
        
    }, 3500);
    
    ////////// 배너
    
    
    $('.sc2-item-box').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.sc2-item').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.sc2-img-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.sc2-item').click(function(){
        
        var i = $(this).attr('data-index');
        
        $('.sc2-item-box').removeClass('sc2-item-box-color');
        $('.sc2-item-box').eq(i).addClass('sc2-item-box-color');
        
        $('.sc2-img-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.sc2-img-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    ////////// section-2
    
    
    $('#top-btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    $(window).scroll(function(){
        
    var st = $(window).scrollTop();
    var ht = $('header').height();

    if(st > ht) {
        $('#top-btn').css({
            opacity: 1
        });
    } else if (st < ht) {
        $('#top-btn').css({
            opacity: 0
        });
    }
    });
    
    ////////// top-btn
    
    
    $('#ham-btn').click(function () {
        $('#ham-btn-mask').css({
            display: 'block'
        });
    });

    $('#ham-header img').click(function () {
        $('#ham-btn-mask').css({
            display: 'none'
        });
    });
    
    ////////// ham-btn
    
    
}); //end

















