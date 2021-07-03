/*************************글로벌
 * 설정******************************/
init();
/****************************사용자
 * 함수******************************/
function init() {
    $('.header').hide();
}

function onShowMain() {
    $('.header').show();
    // $('.header').css({ 'justify-content': 'flex-start', margin: 0, transform: 'scale(0.5)' });
    $('.loading-header').hide();
    $('.home').show();
}

/****************************이벤트 등록******************************/
$('.loading-header .header__circle').click(onShowMain);
$('.toggle__switch').click(onToggleOption);
$('.toggle__switch').mouseenter(onShowOption);
$('.toggle__switch').mouseleave(onHideOption);
$('.not-selected').click(onChgOption);
/****************************이벤트 콜백******************************/
function onToggleOption() {
    $('.select-things').toggle();
}

function onShowOption() {
    $('.select-things').show();
}

function onHideOption() {
    $('.select-things').hide();
}

function onChgOption() {
    var $span = $(this).parent().prev().find('span');
    var selected = $(this).text();
    var notSelected = $span.text();
    $span.text(selected);
    $(this).text(notSelected);
}
