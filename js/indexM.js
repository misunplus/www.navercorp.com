$(function() {
	//토글버튼 클릭 이벤트
	const $tgButton = $('.tg-button');
	const $toggle = $('#toggle');
	$tgButton.on('click', function() {
		// $tgButton.addClass('on');
		$toggle.stop().animate(
			{
				right: 0
			},
			600
		);
	});
	const $tgClose = $('.tgclose');
	$tgClose.on('click', function() {
		// $tgButton.removeClass('on');
		$toggle.stop().animate(
			{
				right: '-100%'
			},
			600
		);
	});
	// 메뉴선택시 토글 이벤트
	const $toggleGnb = $('.toggle-menu-gnb-item'); //gnl의 li
	const $toggleLnbCover = $('.toggle-menu-lnb-cover'); //lnb를 감싼 cover
	const $lnbLowrank = $('.lnb-title-low-rank'); //lnb의 하위 ul

	$toggleGnb.on('click', function() {
		if (!$(this).find($toggleLnbCover).hasClass('on')) {
			$toggleLnbCover.removeClass('on');
			$lnbLowrank.removeClass('on');
			$(this).find($toggleLnbCover).addClass('on');
		}
	});

	const $lnbTit = $(
		'#mobile #toggle .toggle-cover > .toggle-menu-cover > .toggle-menu-gnb > .toggle-menu-gnb-item > .toggle-menu-lnb-cover > h3.lnb-title'
	); //lnb의 제목

	$lnbTit.on('click', function() {
		if (!$(this).next().hasClass('on')) {
			$(this).next().addClass('on');
		} else {
			$(this).next().removeClass('on');
		}
	});

	//스와이퍼 이벤트
	let swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		speed: 1000
	});
	swiper.autoplay.start();
	//스와이퍼가 시작됐을때 이벤트
	swiper.on('slideChangeTransitionStart', function() {
		const $slideActive = $(
			'#mobile #wrap #slider > .slide-cover > .swiper-container > .swiper-wrapper > .swiper-slide-active'
		);
		const nowIdw = parseInt($slideActive.attr('data-index'));
		$('.swiper-slide-text').fadeOut(400);
		$('.swiper-slide-text').eq(nowIdw).fadeIn(400);

		$('.pager > p').first().text(parseInt($slideActive.attr('data-index')) + 1);
	});

	//서비스 스와이퍼 이벤트
	let serviceSwiper = new Swiper('.service-swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: false
		},
		navigation: false,
		autoplay: false,
		width: 338
	});

	//스와이퍼가 시작됐을때 이벤트
	serviceSwiper.on('slideChangeTransitionStart', function() {
		$slideActive = $(
			'#mobile #wrap > section#main-content > .main-content-cover > .service > .service-swiper-container > .swiper-wrapper > .swiper-slide-active'
		);
		$('.sv-pager > p').first().text(parseInt($slideActive.attr('data-svindex')));
	});
	//  $('.nice-select.open')
	$('.nice-select').on('click', function() {
		if ($('.nice-select').hasClass('open')) {
			$('#mobile #wrap footer#foot .foot-cover .list').hide();
			$('#mobile #wrap footer#foot .foot-cover > .foot-adress-cover').show();
		} else {
			$('#mobile #wrap footer#foot .foot-cover .list').show();
			$('#mobile #wrap footer#foot .foot-cover > .foot-adress-cover').hide();
		}
	});

	$(document).ready(function() {
		// selectbox styling
		$('select').niceSelect();
	});
});
