// 'use strict';

// // ==============메인슬라이드 변수==================================

// let slide_list = document.querySelector('.slide_container'),
//     slide_list_li = document.querySelectorAll('.slide_container li'),
//     slideLength = slide_list_li.length,
//     slide_cnt = 0;
// let bg_img = ['slide001.jpg', 'slide002.jpg', 'slide003.jpg', 'slide004.jpg'];

// // ==============레프트카테고리 변수==================================

// let category_Btn = document.querySelector('.category_Btn'),
//     category_nav = document.querySelector('.category_nav'),
//     category_list = document.querySelector('.category_list');

// //==================주간베스트 변수===========================
// let best_slide_li = document.querySelectorAll('.best_slide li'),
//     slide_btn = document.querySelectorAll('.best_container a'),
//     best_slide = document.querySelector('.best_slide');
// let best_slideLength = best_slide_li.length;
// let best_slide_cnt = 0;
// let best_slide_cnt1 = 4;
// // ================레프트카테고리======================================

// category_Btn.addEventListener('click', function () {
//     if (category_nav.classList.length <= 1) {
//         category_Btn.classList.add('category_effect');
//         category_nav.classList.add('category_Bg');
//         category_list.style.left = '20%';

//     } else {
//         category_Btn.classList.remove('category_effect');
//         category_nav.classList.remove('category_Bg');
//         category_list.style.left = '-100%';
//     }
// });

// // ================메인슬라이드 ======================================
// for (let i = 0; i < bg_img.length; i++) {
//     slide_list_li[i].style.background = `url(../image/${bg_img[i]}) 0/cover`;
// }

// setInterval(() => {
//     slide_list_li[slide_cnt].style.opacity = 0;
//     slide_list_li[slide_cnt].style.left = '100%'; // 현재 보여지는 값
//     slide_cnt++;
//     slide_cnt = slide_cnt % slideLength;
//     slide_list_li[slide_cnt].style.opacity = 1;
//     slide_list_li[slide_cnt].style.left = '0%' // 보이지 않는 값
// }, 1500);

// // 주간베스트=====================================================================

// let Fowardpos = [
//     '100%',
//     0,
//     '200px',
//     '400px',
//     '600px'
// ];

// let Backpos = [
//     0,
//     '200px',
//     '400px',
//     '600px',
//     '100%'
// ];


// function activeFowardBtn() {
//     for (let i = best_slide_cnt, tempIdx, j = 0; i <= best_slide_cnt + 4; i++, j++) {
//         tempIdx = i % best_slideLength;
//         console.log(i);
//         best_slide_li[tempIdx].style.left = Fowardpos[j];
//     }
//     console.log('<br>');
//     best_slide_cnt = (best_slide_cnt + 1) % best_slideLength;
// }


// function activeBackBtn() {
//     for (let i = best_slide_cnt, tempIdx, j = 0; i <= best_slide_cnt + 4; i++, j++) {
//         tempIdx = i % best_slideLength;
//         best_slide_li[tempIdx].style.left = Backpos[j];
//     }
//     console.log('<br>');
//     best_slide_cnt++;
// }

// // 오른쪽버튼==========================================================================

// slide_btn[1].addEventListener('click', function () {
//     activeFowardBtn(best_slide_cnt + 1);
// });

// // 왼쪽버튼==========================================================================

// slide_btn[0].addEventListener('click', function () {
//     activeBackBtn();
// });

// // 주간베스트 슬라이드=============================================================

// // setInterval(() => {activeFowardBtn()}, 4000);


'use strict';

// ==============메인슬라이드 변수==================================

let slide_list = document.querySelector('.slide_container'),
    slide_list_li = document.querySelectorAll('.slide_container li'),
    slideLength = slide_list_li.length,
    slide_cnt = 0;
let bg_img = ['slide001.jpg', 'slide002.jpg', 'slide003.jpg', 'slide004.jpg'];

// ==============레프트카테고리 변수==================================

let category_Btn = document.querySelector('.category_Btn'),
    category_nav = document.querySelector('.category_nav'),
    category_list = document.querySelector('.category_list'),
    weekBest = document.querySelector('.weekBest'),
    main_container = document.querySelectorAll('.container section');

//==================주간베스트 변수===========================
let best_slide_li = document.querySelectorAll('.best_slide li'),
    slide_btn = document.querySelectorAll('.best_container a'),
    best_slide = document.querySelector('.best_slide');
let best_slideLength = best_slide_li.length;
let best_slide_cnt = 0;
// ================레프트카테고리======================================
function open_category() {
    category_Btn.classList.add('category_effect');
    category_nav.classList.add('category_Bg');
    category_list.style.left = '20%';
    slide_list.style.opacity = .5;
    weekBest.style.opacity = .5;
}

function close_category() {
    category_Btn.classList.remove('category_effect');
    category_nav.classList.remove('category_Bg');
    category_list.style.left = '-100%';
    slide_list.style.opacity = 1;
    weekBest.style.opacity = 1;
}

category_Btn.addEventListener('click', function () {
    if (category_nav.classList.length <= 1) {
       open_category()
    } else {
        close_category()
    }
});

main_container[0].addEventListener('click', function () {
    close_category()
});
main_container[1].addEventListener('click', function () {
    close_category()
});

// ================메인슬라이드 ======================================
for (let i = 0; i < bg_img.length; i++) {
    slide_list_li[i].style.background = `url(../image/${bg_img[i]}) 0/cover`;
}

setInterval(() => {
    slide_list_li[slide_cnt].style.opacity = 0;
    slide_list_li[slide_cnt].style.left = '100%'; // 현재 보여지는 값
    slide_cnt++;
    slide_cnt = slide_cnt % slideLength;
    slide_list_li[slide_cnt].style.opacity = 1;
    slide_list_li[slide_cnt].style.left = '0%' // 보이지 않는 값
}, 1500);

// 주간베스트=====================================================================

let Fowardpos = [
    '100%',
    0,
    '200px',
    '400px',
    '600px'
];

let Backpos = [
    0,
    '200px',
    '400px',
    '600px',
    '100%'
];


function activeFowardBtn(idx) {
    for (let i = idx - 1, tempIdx, j = 0; i <= idx + 3; i++, j++) {
        tempIdx = i % best_slideLength;
        console.log(i);
        best_slide_li[tempIdx].style.left = Fowardpos[j];
    }
    best_slide_cnt = idx
}


function activeBackBtn(idx) {
    for (let i = idx, tempIdx, j = 0; i <= idx + 4; i++, j++) {
        tempIdx = (i + best_slideLength) % best_slideLength;
        best_slide_li[tempIdx].style.left = Backpos[j];
    }
    best_slide_cnt = (idx + best_slideLength) % best_slideLength;
}

// 오른쪽버튼==========================================================================

slide_btn[1].addEventListener('click', function (e) {
    e.preventDefault();
    activeFowardBtn(best_slide_cnt + 1);
});

// 왼쪽버튼==========================================================================

slide_btn[0].addEventListener('click', function (e) {
    e.preventDefault();
    activeBackBtn(best_slide_cnt - 1);
});

// 주간베스트 슬라이드=============================================================

setInterval(() => { activeFowardBtn(best_slide_cnt + 1) }, 4000);