/****************************글로벌 
 * 설정******************************/
init();
/****************************사용자 
 * 함수******************************/
function init() {
		// $('.main').css({'display':'none'});
		// $('.header--ban').css({'z-index':'3'});
}

function onShowMain() {
	$('.header').css({ 'justify-content': 'flex-start', 'margin': 0, 'transform': 'scale(0.5)' });
	$('.header__front').hide();
	$('.main').show();

}
/****************************이벤트 등록******************************/
$('.header--front .header__circle').click(onShowMain);
/****************************이벤트 콜백******************************/

