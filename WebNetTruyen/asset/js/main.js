

var itemSlider=document.querySelectorAll('.slider__item');
var indexSlider=document.querySelector('.slider__index');
var widthSlider=document.querySelector('.slider');

// var numberItem=5; //item hiện ra biên ngoài
var numberItem=5;

// console.log(widthSlider.offsetWidth)
// if(widthSlider.offsetWidth==1000) {
//     console.log('bao');
// }
// if(widthSlider.offsetWidth>=790 && widthSlider.offsetWidth) {
//     console.log('deptrai');
// }

var numberItemTotal=itemSlider.length; //số lượng item của slider

// var result=widthSlider.offsetWidth/numberItem;
var result=200;
// console.log(result)
var widthItem=result;

var widthHiddenOver=widthItem*numberItemTotal;
indexSlider.style.width=`${widthHiddenOver}px`

// console.log(widthItem);

for(var i=0; i<itemSlider.length; i++) {
    itemSlider[i].style.width=`${widthItem}px`
}

var index=0; //vị trí slider-grid
var times=numberItemTotal-numberItem; //số lần chuyển slider
var dem=0;

// setInterval(function() {
//     dem++;
    
//     if(dem>=0 && dem<=times) {
//         index=index-widthItem;
//         // console.log(index);
//         indexSlider.style.transform=`translateX(${index}px)`;
//     }
//     else {
//         index=0;
//         dem=0;
//         // console.log(index);
//         indexSlider.style.transform=`translateX(${index}px)`;
//     }
// },6000)

function prev() {
    dem--;
    if(dem>=0 && dem<=times) {
        index=index+widthItem;
        // console.log(index);
        indexSlider.style.transform=`translateX(${index}px)`;
    }
    else {
        index=-widthItem*numberItem+widthItem;
        dem=times;
        // console.log(index);
        indexSlider.style.transform=`translateX(${index}px)`;
    }
}

function next() {
    dem++;
    if(dem>=0 && dem<=times) {
        index=index-widthItem;
        // console.log(index);
        indexSlider.style.transform=`translateX(${index}px)`;
    }
    else {
        index=0;
        dem=0;
        // console.log(index);
        indexSlider.style.transform=`translateX(${index}px)`;
    }
}




// rating list -----------------------------------------------------------------------


var itemRating=document.querySelectorAll('.grid__4-center-rating-grid_top');

for(var i=0; i<itemRating.length; i++) {
    itemRating[i].onclick=function (e) {
        console.log(e)
    }
}


// back-to-top================================


var clickTop=document.querySelector('.click__window-top')
window.onscroll = function() {
    scrollFunction();
    hiddenHeader();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        clickTop.style.display = "block";
    } else {
        clickTop.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}

//notify___________________________________________

var allNotify=document.querySelectorAll('.header__content-comment-subnav-item');
var iconAllNotify=document.querySelector('.all__read-notifi');
var subnavAllNotify=document.querySelector('.all__read-notifi_subnav');

iconAllNotify.onclick=function() {
    for(var i=0; i<allNotify.length; i++) {
        allNotify[i].style.backgroundColor='rgba(22,24,35,.05)';
    }
    subnavAllNotify.style.display='block';
}


//header
var mainNav=document.querySelector('.main__nav');

function hiddenHeader() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mainNav.style.position = "fixed";
        mainNav.style.top = "0px";
    } else {
        mainNav.style.position = "relative";
    }
}


//color rating ==============================

var colorRating=document.querySelectorAll('.rating-list-item-number_rating');
var arrayColor=[
    '#3498db',
    '#27ae60',
    '#d35400',
    '#3b3b3b',
]
// console.log(arrayColor[0])
for(var i=0; i<colorRating.length; i++) {
    if(i<=2) {
        colorRating[i].style.color=`${arrayColor[i]}`
    }
    else{
        colorRating[i].style.color=`${arrayColor[3]}`
    }
}

// color btn like

var btnlike = document.querySelector('.btn_like-item');
var iconbtnLike = document.querySelector('.grid__4-sub-list-grid-btn-icon');
var totalLikenumber=document.querySelector('.grid__4-sub-list-grid-text-total');
var numberBtnLike;

btnlike.onclick =function () {
    if(numberBtnLike==1) {
        btnlike.innerHTML = '<i class="fa-brands fa-facebook-square grid__4-sub-list-grid-btn-icon btn_like-item-text"></i> Like';
        btnlike.style.backgroundColor = "#ffff";
        numberBtnLike=2;

        var resultLike=Number(totalLikenumber.innerText)-0.001;
        totalLikenumber.innerHTML=resultLike;
    }
    else{
        btnlike.innerHTML = '<i style="color: #aaa;" class="fa-brands fa-facebook-square grid__4-sub-list-grid-btn-icon btn_like-item-text"></i> <span style="color: #aaa;">Liked</span>';
        btnlike.color = '#ddd';
        btnlike.style.backgroundColor= "#ddd";
        numberBtnLike=1;

        var resultLike=Number(totalLikenumber.innerText)+0.001;
        totalLikenumber.innerHTML=resultLike;
    }
}

var resultLike=Number(totalLikenumber.innerText)+0.001;
// console.log(resultLike)



//category===================================================================

var subnavDownBottomTEXT=document.querySelector('.subnav_down-category-grid-bottom_sub-text');
var hoverItemSubDown=document.querySelectorAll('.subnav_down-category-grid-list-link')
var navdownSubBottom=document.querySelector('.subnav_down-category-grid-bottom_sub')

for(var i=0; i<hoverItemSubDown.length; i++) {
    hoverItemSubDown[i].addEventListener('mouseover', function(e) {
        // console.log(e.target.getAttribute('data-title'));
        navdownSubBottom.style.display='block';
        subnavDownBottomTEXT.innerHTML=e.target.getAttribute('data-title');
    })
    hoverItemSubDown[i].addEventListener('mouseout', function(e) {
        // console.log(e.target.getAttribute('data-title'));
        navdownSubBottom.style.display='none';
        subnavDownBottomTEXT.innerHTML='';
    })
}

//keyboarch-------------------------------------

document.onkeyup=function(e) {
    // console.log(e.keyCode);
    if(e.keyCode==37) {
        prev();
    }
    if(e.keyCode==39) {
        next();
    }
}


//rating-sub----------------------------------------------

var rating1=document.getElementById('rating_1');
var rating1=document.getElementById('rating_1');
var rating1=document.getElementById('rating_1');


//comment---------------------------------------------------






