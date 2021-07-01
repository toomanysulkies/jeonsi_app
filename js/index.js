slideGallery();
onResize();

function slideGallery() {
    var $grid = $('.grid');
    $slideWrapper = $grid.find('.swiper-wrapper');
    function onGetData(r) {
        // for (var i = 0; i < r.promo.length; i++){}  아래와 같은 다른 표현 방식
        r.promo.forEach(function (v, i) {
            //파라미터 순서 반드시 밸류 다음 인덱스
            var html = '';
            html += '<li class="slide swiper-slide">';
            html += '<div class="img-wrap ratio-wrap" data-ratio="1">';
            html += '<div class="ratio-bg" style="background-image: url(' + v.src + ');"></div>';
            html += '</div>';
            html += '<div class="cont-wrap">';
            html += '<h3 class="title">' + v.title + '</h3>';
            html += '<div class="desc">' + v.desc + '</div>';
            html += '</div>';
            html += '</li>';
            $slideWrapper.append(html);
        });
    }

    var swiper = getSwiper('.grid', { break: 8, autoPlay: false, navigation: true, pagination: true }); //스와이퍼 만들 때 이 한줄이면 끝!
}

function onResize() {
    $('.ratio-wrap').each(function (i) {
        var ratio = $(this).data('ratio');
        var width = $(this).innerWidth();
        var height = width * Number(ratio);
        $(this).innerHeight(height);
    });
}
