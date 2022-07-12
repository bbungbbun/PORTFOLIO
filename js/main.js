$('.skill a').on('click',function(e){
    e.preventDefault()
})

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

// 웹에 처음 들어왔을때만 뜨고 그 이후로는 안뜨게 하는 방법은 없나욘..

let txtList = [];

$('.tab').on('click',function(){
    // $('nav').hide();
    // $('.navS').show();
    $('nav').removeClass('show');
    $('.navS').removeClass('hide');
    $('.gnbClick').show();
})

$('.gnbClick').on('click',function(){
    // $('.navS').hide();
    // $('nav').show();
    $('.navS').addClass('hide');
    $('nav').addClass('show');
    $('.gnbClick').hide();
})



