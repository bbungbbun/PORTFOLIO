$('.skill a').on('click',function(e){
    e.preventDefault()
})

// 팝업창 처음 접속 한번만 뜨게 하기

$('.pop').hide();

let a = 0;

 $(window).on('scroll',function(){
     let scr = $(window).scrollTop();
     let hig = $('header').height();
     if(scr >= hig && a==0){
        let popLocal = localStorage.getItem('pop');
        console.log(popLocal)
        if(popLocal != 'true'){
         $('.pop').fadeIn().on('click',function(){
             $('.pop').fadeOut()
             a++;
             console.log(a);
             localStorage.setItem('pop',true);
         });
         }
     }else{
         $('.pop').hide();
     }
});// scroll

let txtList = [];

$('.tab').on('click',function(){
    $('nav').removeClass('show');
    $('.navS').removeClass('hide');
    $('.gnbClick').show();
})

$('.gnbClick').on('click',function(){
    $('.navS').addClass('hide');
    $('nav').addClass('show');
    $('.gnbClick').hide();
})


// view

$('.video .item, .design .item').on('click',function(e){
    e.preventDefault(); 

    $('.view').fadeIn();

    let pic = $(this).find('.pic').html();
    $('.view figure').html(pic);

    let h4Txt = $(this).find('h4').text();
    let pTxt = $(this).find('p').text();

    $('.view').find('h4').text(h4Txt);
    $('.view').find('p').text(pTxt);

});

//close버튼 누르면 view 사라지게!

$('.btnClose, .wrapClose').on('click',function(){
    $('.view').hide();
});

