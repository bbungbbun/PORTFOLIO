
// web 

/*
let web = [
    {
        title : '코웨이 반응형 웹', 
        exp : '기존의 코웨이 웹을 리뉴얼 한 반응형 웹입니다. 저를 포함한 세명의 팀원과 함께 만든 반응형 웹입니다. 전반적인 디자인에 대한 의견 제시에 참여하였고 이후 전반적인 코딩 작업에 참여하였습니다.',
        tool : ['디자인 10%', '포토샵 10%', 'CSS 70%', 'JAVASCRIPT 90%'],
        link : 'https://bbungbbun.github.io/CONNECT-APP/'
    },
    {
        title : "'커넥트' 모바일 웹", 
        exp : "'커넥트'라는 음악 커뮤니티를 구상하여 제작한 모바일 웹입니다. 제이쿼리와 자바스크립트를 활용하여 다양한 효과를 준 것이 특징입니다. 메인 홈을 포함하여 알림창 및 로그인 창 등을 구현 하였습니다.",
        tool : ['디자인 100%', '포토샵 100%', 'CSS 100%', 'JAVASCRIPT 100%'],
        link : 'https://bbungbbun.github.io/CONNECT-APP/'
    },
    {
        title : 'PO 반응형 웹', 
        exp : 'PO(POCKET OPERATOR)를 소개하는 반응형웹입니다. css와 라이브러리 효과를 사용하여 다양한 효과를 주었습니다.',
        tool : ['디자인 100%', '포토샵 100%', 'CSS 100%', 'JAVASCRIPT 100%'],
        link : 'https://bbungbbun.github.io/CONNECT-APP/'
    },
];
web.forEach(function(box,i){
let hash = "";
for(let n=0; n<web[i].tool.length; n++){
   hash = hash + `<span>${web[i].tool[n]}</span>`
}
    let temp = `
    <div class="item"><a href="#">
        <div class="pic pic${i+1}"></div>
        <div class="txt">
            <h4>${box.title}</h4>
            <p>${box.exp}</p>
            <div class="twrap">${hash}</div>
        </div>
    </a></div>`
$('.web .con').append(temp);
});

*/


// design 


let design = [
    {
        title : '맥도날드 인스타 광고 (ver.1)', 
        exp : '포토샵을 이용해서 맥도날드 홍보 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : '<img src="images/design1.jpg" alt="">'
    },
    {
        title : '맥도날드 인스타 광고 (ver.2)', 
        exp : '포토샵을 이용해서 맥도날드 홍보 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : '<img src="images/design1-1.jpg" alt="">'
    },
    {
        title : '맥도날드 인스타 광고 (ver.3)', 
        exp : '포토샵을 이용해서 맥도날드 홍보 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : '<img src="images/design1-2.jpg" alt="">'
    },
    {
        title : '앨범아트 이미지1', 
        exp : '포토샵을 이용해서 앨범아트 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : '<img src="images/design2.jpg" alt="">'
    },
    {
        title : '앨범아트 이미지2', 
        exp : '포토샵을 이용해서 앨범아트 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : '<img src="images/design3.jpg" alt="">'
    },

];


design.forEach(function(box,i){

let hash = "";
for(let n=0; n<design[i].tool.length; n++){
   hash = hash + `<span>${design[i].tool[n]}</span>`
}
    let temp = `
    <div class="item">
    <div class="pic pic${i+1}">${box.img}</div>
    <div class="txt">
        <h4>${box.title}</h4>
        <p>${box.exp}</p>
        <div class="twrap">${hash}</div>
    </div>
</div>
<!-- item -->`

$('.design .con').append(temp);
});
