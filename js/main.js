// スクロール開始時に固定ヘッダー表示・初期ヘッダー非表示
const nav = document.querySelector('.header-nav');
const inner = document.querySelector('.header-inner');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('header-fixed');
            inner.classList.add('show');
            inner.classList.remove('hide');
        } else {
            nav.classList.remove('header-fixed');
            inner.classList.remove('show');
            inner.classList.add('hide');
        }
    });


$(function () {
    // ハンバーガーボタンクリックで実行
    $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");

        // ナビゲーション展開時にスクロール制御
        if ($("#js-nav").hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "");
        }
    });

    // メニュー項目のクリック時にメニューを閉じる
    $(".nav-item a").click(function () {
        $("#js-hamburger").removeClass("active");
        $("#js-nav").removeClass("active");
        $("body").css("overflow", "");
    });
});


// オープニング
$(function() {
	setTimeout(function(){
		$('.js-opening').fadeIn(1600);
	},400); //0.4秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});



// トリガー取得
const scrollTrigger = document.querySelectorAll('.js-scroll-trigger');

// aimation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// aimation関数
function scrollAnimation(trigger) {
    window.addEventListener('scroll', function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add('is-active');
            }
        }
    });
}