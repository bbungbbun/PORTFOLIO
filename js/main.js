$('.prof a').on('click',function(e){
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
$('.design .item').on('click',function(e){
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


// 반응형
let bWidth = window.innerWidth;
window.addEventListener("resize", () => {
  const nWidth = window.innerWidth;
  if ((bWidth < 1200 && nWidth >= 1200) || (bWidth > 1199 && nWidth <= 1199)) {
    location.reload();
  }
  beforeWidth = nowWidth;
});

if(matchMedia("screen and (max-width: 767px)").matches){
    console.log("mobile");
    $('.web .pc').remove()


}else if(matchMedia("screen and (min-width: 768px)").matches){
    console.log("tablet");
    $('.web .mobile').remove();

    // .video video autoplay pc에서는 안되게
    let vid1 = $('.video .item').find('video').get(0);
    let vid2 = $('.video .item').find('video').get(1);
    let vid3 = $('.video .item').find('video').get(2);
    vid1.pause();
    vid2.pause();
    vid3.pause();

    $('.pic2 video').get(0).pause()
    $('.web .item, .video .item').on('mouseover',function(){ 
        let vid = $(this).find('video').get(0);
        vid.play();
        $(this).find('video').get(0);
    }).on('mouseout',function(){
        let vid = $(this).find('video').get(0);
        vid.pause();
    });
  }




