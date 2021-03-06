// D-day 출력
var dday = document.querySelector(".header__wrapper strong");
var now = new Date();
var day = new Date("may 16,2020");
var gap = now.getTime() - day.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
dday.innerHTML += gap;
// D-day 출력 end

// D-day 출력 for mobile
var dday = document.querySelector(".header__wrapper__mobile strong");
var now = new Date();
var day = new Date("may 16,2020");
var gap = now.getTime() - day.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
dday.innerHTML += gap;
// D-day 출력 end

//배경변경
var header = document.querySelector("header");
var num = 1;
function showSlides() {
    if (num < 4) {
        header.className = "bg0" + num;
        num++;
    } else {
        num = 1;
    }
}
setInterval(showSlides, 3000);
//배경변경 end

// 비디오
var video = document.querySelector("video");
var play = document.getElementById("playbtn");
var pause = document.getElementById("pausebtn");

function playPause() {
    if (video.paused) {
        video.play();
        play.style.opacity = 0;
        pause.style.opacity = 1;
    } else {
        video.pause();
        play.style.opacity = 1;
        pause.style.opacity = 0;
    }
}

play.addEventListener("click", function (e) {
    e.preventDefault();
    playPause();
}); //재생

pause.addEventListener("click", function (e) {
    e.preventDefault();
    playPause();
}); //일시정지
//비디오 end

//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
//스크롤이벤트end


//모바일네비
var headerTop = document.querySelector('.header__menu__mobile');
var menuBtn = document.querySelector('.header__menu__mobile button');
var menuOpen = document.querySelector('.header__menuContent__mobile');
var menuBack = document.querySelector('.header__menuContent__background');

menuBtn.addEventListener('click', function () {
    headerTop.style.display = 'none';
    menuOpen.style.left = '0';
    menuBack.style.display = 'block';
})
menuBack.addEventListener('click', function () {
    headerTop.style.display = 'block';
    menuBack.style.display = 'none';
    menuOpen.style.left = '-100%';
})

var lastScroll = 0;
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    if (scroll > lastScroll) {
        headerTop.style.display = 'none';
    }
    else {
        headerTop.style.display = 'block';
    }
    if (scroll <= 0) { headerTop.style.display = 'block' }
    lastScroll = scroll;
});
