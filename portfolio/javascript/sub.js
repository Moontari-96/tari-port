'use strict';

// ====================레프트 카테고리 변수========================
let category_Btn = document.querySelector('.category_Btn'),
category_nav = document.querySelector('.category_nav'),
category_list = document.querySelector('.category_list'),
contact_us = document.querySelector('.contact_us');

// ====================로그인 변수========================
let login_select_btn = document.querySelectorAll('.login_select a'),
    login_select = document.querySelectorAll('.login_select'),
    login_fieldset = document.querySelectorAll('.login fieldset'),
    back_color = document.getElementsByClassName('back_color'),
    login_cnt = 0,
    btn_cnt = 0;
// ====================검색창 변수========================
let MS_search_word = document.querySelector('.MS_search_word'),
    fieldset =  document.querySelector('fieldset');

    // ====================레프트 카테고리========================

category_Btn.addEventListener('click', function () {
    if (category_nav.classList.length <= 1) {
        category_Btn.classList.add('category_effect');
        category_nav.classList.add('category_Bg');
        category_list.style.left = '20%';
        contact_us.style.opacity = .5;
    } else {
        category_Btn.classList.remove('category_effect');
        category_nav.classList.remove('category_Bg');
        category_list.style.left = '-100%';
        contact_us.style.opacity = 1;
    }
});

// ====================로그인========================

for (let i = 0; i < login_select_btn.length; i++) {
    login_select_btn[i].addEventListener('click', function () {
        login_select_btn[login_cnt].style.color = '#555';
        login_fieldset[login_cnt].classList.add('login_hide');
        login_fieldset[i].classList.remove('login_hide');
        login_select_btn[i].style.color = 'rgb(231, 91, 91)';
        login_cnt = i; 
    })
}


for (let i = 0; i < back_color.length; i++) {
    back_color[i].addEventListener('click', function () {
        back_color[btn_cnt].style.color = '#555';
        back_color[i].style.color = 'rgb(231, 91, 91)';
        btn_cnt = i
    })
}



// ====================검색창========================

// fieldset.addEventListener('mouseover', function () {
//     MS_search_word.style.display= 'inline-block';
// }) 
// fieldset.addEventListener('mouseout', function () {
//     MS_search_word.style.display= 'none';
// }) 