function funSub02() {
    var wrapper = document.querySelectorAll('.img__wrapper');
    var sub_first = wrapper[0].querySelector('.img__sub');
    var wrapper_first = wrapper[0].querySelectorAll('.img__sub a');
    var content_first = wrapper[0].querySelector('.img__main .img__content');
    var sub_second = wrapper[1].querySelector('.img__sub');
    var wrapper_second = wrapper[1].querySelectorAll('.img__sub a');
    var content_second = wrapper[1].querySelector('.img__main .img__content');

    var hash = location.hash;
    var emoticon_f = wrapper_first[0].querySelector('i');
    var emoticon_s = wrapper_second[0].querySelector('i');
    var mainimg = document.querySelectorAll('.img__wrapper .img__main');
    var info_f = mainimg[0].querySelector('a');
    var info_s = mainimg[1].querySelector('a');
    var title = document.querySelectorAll('section>a');

    //타이틀 클릭시 초기화면으로 돌아가기
    title[0].addEventListener('click', function (e) {
        e.preventDefault();
        info_f.style.display = "none";
        content_first.classList.remove('active');
        emoticon_f.classList.remove('active');
        mainimg[0].style = "background: url(../" + "img/lineup/lineup02.jpg" + " no-repeat center / cover;";
        for (var j = 0; j < wrapper_first.length; j++) {
            var emoticon3 = sub_first.querySelectorAll('i');
            emoticon3[j].classList.remove('active');
        }
    });
    title[1].addEventListener('click', function (e) {
        e.preventDefault();
        info_s.style.display = "none";
        content_second.classList.remove('active');
        emoticon_s.classList.remove('active');
        mainimg[1].style = "background: url(../" + "img/lineup/lineup02.jpg" + " no-repeat center / cover;";
        for (var j = 0; j < wrapper_second.length; j++) {
            var emoticon3 = sub_second.querySelectorAll('i');
            emoticon3[j].classList.remove('active');
        }
    });
    //타이틀 클릭시 초기화면으로 돌아가기 end

    //메인에서 이미지 클릭해서 들어왔을때 작동 (해당가수 정보 보여주기)
    if (hash) {
        var href = window.location.href;
        var hrefNum = parseInt(href.substr(href.length - 2));
        var hrefDay = hash.charAt(1);
        var locationFirst = wrapper[0].offsetTop - 300;
        var locationSecond = wrapper[1].offsetTop - 300;
        var sublocationFirst = wrapper_first[hrefNum].offsetTop;
        var imgname_f = wrapper_first[hrefNum].style.backgroundImage.replace("lineup_thum", "lineup");
        var imgname_s = wrapper_second[hrefNum].style.backgroundImage.replace("lineup_thum", "lineup");
        emoticon_f = wrapper_first[hrefNum].querySelector('i');
        emoticon_s = wrapper_second[hrefNum].querySelector('i');
        if (hrefDay == 'f') {
            window.scrollTo({ top: locationFirst, behavior: 'smooth' });
            sub_first.scrollTo({ top: sublocationFirst, behavior: 'smooth' });
            mainimg[0].style = "background:" + imgname_f + " no-repeat center / cover;";
            content_first.classList.add('active');
            emoticon_f.classList.add('active');
            info_f.style.display = "block";
        }
        if (hrefDay == 's') {
            window.scrollTo({ top: locationSecond, behavior: 'smooth' });
            sub_second.scrollTo({ top: sublocationFirst, behavior: 'smooth' });
            mainimg[1].style = "background:" + imgname_s + " no-repeat center / cover;";
            content_second.classList.add('active');
            emoticon_s.classList.add('active');
            info_s.style.display = "block";
        }
    }
    //메인에서 이미지 클릭해서 들어왔을때 작동 end

    //썸네일 클릭시 메인화면에 큰이미지출력 및 내용변경
    for (var i = 0; i < wrapper_first.length; i++) {
        wrapper_first[i].addEventListener('click', function (e) {
            e.preventDefault();
            info_f.style.display = "block";
            content_first.classList.remove('active');
            emoticon_f.classList.remove('active');
            var emoticon2 = this.querySelector('i');
            for (var j = 0; j < wrapper_first.length; j++) {
                var emoticon3 = sub_first.querySelectorAll('i');
                emoticon3[j].classList.remove('active');
            }
            emoticon2.classList.add('active');
            var imgname = new Image();
            var imgsource = this.style.backgroundImage.replace("lineup_thum", "lineup");
            imgname.src = imgsource.split('"')[1];
            imgname.addEventListener('load', function () {
                mainimg[0].style = "background:" + imgsource + " no-repeat center / cover;";
            });
        });
    }
    info_f.addEventListener('click', function (e) {
        e.preventDefault();
    });
    mainimg[0].addEventListener('click', function (e) {
        e.preventDefault();
        content_first.classList.toggle('active');
        if (info_f.style.display == 'none') {
            content_first.classList.remove('active');
        }
    });
    for (var i = 0; i < wrapper_second.length; i++) {
        wrapper_second[i].addEventListener('click', function (e) {
            e.preventDefault();
            info_s.style.display = "block";
            content_second.classList.remove('active');
            emoticon_s.classList.remove('active');
            var emoticon2 = this.querySelector('i');
            for (var j = 0; j < wrapper_second.length; j++) {
                var emoticon3 = sub_second.querySelectorAll('i');
                emoticon3[j].classList.remove('active');
            }
            emoticon2.classList.add('active');
            var imgname = new Image();
            var imgsource = this.style.backgroundImage.replace("lineup_thum", "lineup");
            imgname.src = imgsource.split('"')[1];
            imgname.addEventListener('load', function () {
                mainimg[1].style = "background:" + imgsource + " no-repeat center / cover;";
            });
        });
    }
    info_s.addEventListener('click', function (e) {
        e.preventDefault();
    });
    mainimg[1].addEventListener('click', function (e) {
        e.preventDefault();
        content_second.classList.toggle('active');
        if (info_s.style.display == 'none') {
            content_second.classList.remove('active');
        }
    });
    //썸네일 클릭시 메인화면에 큰이미지출력 및 내용변경 end


    //스크롤이벤트
    var scroll = document.querySelector('.header__scroll');

    scroll.addEventListener('click', function () {
        window.scrollTo({ top: 550, behavior: 'smooth' });
    })
    //스크롤이벤트end

    //모바일메뉴
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
    //모바일메뉴 end
};



