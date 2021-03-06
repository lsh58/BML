window.addEventListener('load', function () {
    var imgWrapper = document.querySelector('#img_wrapper')
    var thumbnail = document.querySelectorAll('#img_wrapper>a');
    var spanAll = document.querySelectorAll('#img_wrapper a span');
    var span;
    var extend;
    var extendimg;
    var url;
    var lasturl;
    var chevron;
    var prevUrl;
    var nextUrl;
    var block = 5;
    var bln = true;
    var tr = Math.ceil(thumbnail.length / block);

    //갤러리
    function delTriangle() {
        for (var i = 0; i < spanAll.length; i++) {
            spanAll[i].style.display = 'none';
        }
    }
    function show() {
        extend = document.querySelector('.extended');
        extend.style.display = 'flex';
        extendimg = extend.querySelector('img');
    }
    function close() {
        delTriangle();
        extend.style.display = 'none';
        span[0].style.display = 'none';
        url = null;
        bln = true;
    }
    function move() {
        var location = extend.offsetTop - 300;
        window.scrollTo({ top: location, behavior: 'smooth' });
    }
    // console.log(spanAll);
    for (var k = 0; k < thumbnail.length; k++) {
        thumbnail[k].addEventListener('click', function (e) {
            e.preventDefault();
            delTriangle();//삼각형 전체 지우기
            var dataNum = this.getAttribute('data-num');
            span = e.target.childNodes;
            spanAll[dataNum].style.display = 'block'; // 선택된애 밑에 삼각형 추가
            extend = document.querySelector('.extended');
            extend.remove();
            bln = true;

            if (bln) {
                for (var i = 0; i < tr; i++) {
                    for (j = (5 * i); j < (block * (i + 1)); j++) {
                        if (j == dataNum) {
                            var num = (i + 1) * block - 1;
                            if (num > thumbnail.length) {
                                num = thumbnail.length - 1
                            }
                            thumbnail[num].insertAdjacentHTML("afterend", '<div class="extended"><a href=""><i class="fas fa-chevron-left"></i></a><a href=""><i class="fas fa-chevron-right"></i></a><a href=""><i class="fas fa-times"></i></a><img src="../img/trailer/sketch/2019_sketch_01.jpg" alt=""></div>');
                        }
                    }
                }
                bln = false;
            } //5단위로 div나오는곳 구현
            extend = document.querySelector('.extended');
            extendimg = extend.querySelector('img');
            var imgname = new Image();
            url = this.style.backgroundImage.replace("trailer_thum", "trailer");
            imgname.src = url.split('"')[1];
            if (url == lasturl) { //같은애 클릭하면 닫히게
                close();
            }
            else {
                extend.style.display = 'flex';
                move();
                imgname.addEventListener('load', function () {
                    extendimg.src = url.split('"')[1];
                }); //url따와서 img에 src로 넣어주기
            }
            lasturl = url;
            chevron = extend.querySelectorAll('a');
            chevron[0].addEventListener('click', function (e) { //이전버튼 클릭시
                delTriangle();
                e.preventDefault();
                dataNum--;
                for (var i = 0; i < tr; i++) {
                    for (j = (5 * i); j < (block * (i + 1)); j++) {
                        if (j == dataNum) {
                            var num2 = (i + 1) * block;
                            imgWrapper.insertBefore(extend, thumbnail[num2]);
                            show()
                        }
                    }
                }
                if (dataNum < 0) {
                    dataNum = 0;
                }
                var imgname = new Image();
                prevUrl = thumbnail[dataNum].style.backgroundImage.replace("trailer_thum", "trailer");
                imgname.src = prevUrl.split('"')[1];
                imgname.addEventListener('load', function () {
                    extendimg.src = prevUrl.split('"')[1];
                });

                spanAll[dataNum].style.display = 'block';
                move();
            });
            chevron[1].addEventListener('click', function (e) { //다음버튼 클릭시
                delTriangle();
                e.preventDefault();
                dataNum++;
                for (var i = 0; i < tr; i++) {
                    for (j = (5 * i); j < (block * (i + 1)); j++) {
                        if (j == dataNum) {
                            var num2 = (i + 1) * block;
                            imgWrapper.insertBefore(extend, thumbnail[num2]);
                            show()
                        }
                    }
                }
                if (dataNum >= thumbnail.length) {
                    dataNum = thumbnail.length - 1;
                }
                var imgname = new Image();
                nextUrl = thumbnail[dataNum].style.backgroundImage.replace("trailer_thum", "trailer");;
                imgname.src = nextUrl.split('"')[1];
                imgname.addEventListener('load', function () {
                    extendimg.src = nextUrl.split('"')[1];
                });
                spanAll[dataNum].style.display = 'block';
                move();
            });//chevron 구현
            chevron[2].addEventListener('click', function (e) {
                e.preventDefault();
                close();
            });

            //X자 눌러도 닫게 구현할것
        })
    }
});
//갤러리 end


//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
//스크롤이벤트end

//모바일 메뉴
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
//모바일 메뉴 end