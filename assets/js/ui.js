$(window).on('load scroll', function() {
	// 타이틀 고정
	if ($('#tit_page').length > 0) {
		if ($(window).scrollTop() >= 45) {
			$('html').addClass('tit_fixed');
		} else {
			$('html').removeClass('tit_fixed');
		}
	}
});

$(document).ready(function () {
	// 풋바 패딩 설정
	$('#quickmenu').prev('article').addClass('add_quick');

	// 화면 배경색 설정
	if ($('.pd_full.bg_gray').length > 0) {
		$('html').addClass('bg_gray');
	}

	// 레이어 닫기
	$('.layer .btn_layer_close').on('click', function() {
		scrollTrue();
		$(this).closest('.layer').hide();
	});

	// 탭메뉴
	$('.tapmenu>li.on').each(function() {
		var tg = $(this).children('a').attr('href');
		if (tg != '#') $(tg).show().siblings('.tap_cont').hide();
	});
	$('.tapmenu li a').on('click', function() {
		if (!$(this).hasClass('disable')) {
			var tg = $(this).attr('href');
			if (tg != '#') $(tg).show().siblings('.tap_cont').hide();
			$(this).parent('li').addClass('on').siblings('li').removeClass('on');
		}
		return false;
	});

	// 항목이 많은 탭(FAQ)
	var tap = $('.tapmenu.long');
	var tapL = $(tap).children('li').length;
	if (tapL > 4) $(tap).addClass('col'+tapL);

	// 토글목록 열림 설정
	$('.toggle_list dt.on').next('dd').show();
});

// 토글 목록
$(document).on('click', '.toggle_list dt a', function() {
	if ($(this).closest('.toggle_list').hasClass('station_list')) {
		$(this).parent('dt').toggleClass('on').next('dd').slideToggle('easeOutExpo');
	} else {
		$(this).parent('dt').toggleClass('on').next('dd').slideToggle('easeOutExpo').siblings('dd').slideUp('easeOutExpo');
		$(this).parent('dt').siblings('dt').removeClass('on');
	}
	return false;
});

// 모바일 스크롤 제어
function scrollFalse(type) {
	if (type == 'alert' || type == 'service' || type == 'loading') {
		$('html').on('touchmove', function (e) { e.preventDefault(); });
	} else {
		setTimeout(function() {
			$('html').addClass('fixed');
		},300)
	}
}
function scrollTrue() {
	$('html').removeClass('fixed').off('touchmove');
}