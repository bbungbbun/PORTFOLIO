let design = [
    // {
    //     title : '맥도날드 인스타 광고', 
    //     exp : '포토샵을 이용해서 맥도날드 홍보 이미지를 제작하였습니다.',
    //     tool : ['포토샵'],
    //     img : '../images/design1.jpg'
    // },
    // {
    //     title : '맥도날드 인스타 광고', 
    //     exp : '포토샵을 이용해서 맥도날드 홍보 이미지를 제작하였습니다.',
    //     tool : ['포토샵'],
    //     img : '../images/design1-1.jpg'
    // },
    {
        title : '맥도날드 인스타 광고', 
        exp : '포토샵을 이용해서 맥도날드 홍보 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : 'images/design1-2.jpg'
    },
    {
        title : '앨범아트 이미지1', 
        exp : '포토샵을 이용해서 앨범아트 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : 'images/design2.jpg'
        
    },
    {
        title : '앨범아트 이미지2', 
        exp : '포토샵을 이용해서 앨범아트 이미지를 제작하였습니다.',
        tool : ['포토샵'],
        img : 'images/design3.jpg'
    },

];


design.forEach(function(box,i){

let hash = "";
for(let n=0; n<design[i].tool.length; n++){
    //낼 하자 
   hash = hash + `<span>${design[i].tool[n]}</span>`
}
    let temp = `
    <div class="item">
    <div class="pic pic${i+1}">
        <img src="${box.img}" alt="">
    </div>
    <div class="txt">
        <h4>${box.title}</h4>
        <p>${box.exp}</p>
        <div class="twrap">${hash}</div>
    </div>
</div>
<!-- item -->`

$('.design').append(temp);
});



// style="background:url(${box.img})"