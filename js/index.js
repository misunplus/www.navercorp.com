$(function() {
	//스크롤 이벤트
	let lastTopVal = 0;
	const $tgbtn = $('.tgbtn');
	const $tgBg = $('.bg-cover ');
	$(window).on('scroll', function() {
		let scrollTopVal = $(window).scrollTop();
		if ($tgbtn.hasClass('on')) {
			if (80 > scrollTopVal) {
				$('.all-nav-cover').attr({
					style: 'displasy : block'
				});
				$('.all-nav-container').attr({
					style: 'top:80; position: absolute;'
				});
			} else if (lastTopVal < scrollTopVal) {
				$('.all-nav-cover').attr({
					style: 'displasy : none'
				});
				$('.all-nav-container').attr({
					style: 'top:0; position: fixed;'
				});
			}
		} else if (!$tgbtn.hasClass('on')) {
			if (lastTopVal > scrollTopVal) {
				$('#header').slideDown();
			} else if (lastTopVal < scrollTopVal) {
				$('#header').slideUp();
			}
			lastTopVal = scrollTopVal;
		}
	});

	//토글버튼 클릭 이벤트
	$tgbtn.on({
		click: function() {
			if ($tgbtn.hasClass('on')) {
				$('#wrap #all-nav').hide();
				$tgBg.hide();
				$tgbtn.removeClass('on');
			} else {
				$('#wrap #all-nav').show();
				$tgBg.show();
				$tgbtn.addClass('on');
			}
		}
	});

	// 네비게이션 마우스 이벤트
	const $gnb = $('#wrap > #header > .header-container > nav > ol.gnb > li');
	const $lnb = $('#wrap > #header > .header-container > nav > ol.gnb > li > .lnb');
	$gnb.on({
		mouseenter: function() {
			$(this).find($lnb).stop().slideDown();
		},
		mouseleave: function() {
			$(this).find($lnb).stop().slideUp();
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
			'#wrap #slide > .slide-cover > .swiper-container > .swiper-wrapper > .swiper-slide.swiper-slide-active'
		);

		//텍스특 박스
		$('.silde-info-box').removeClass('active');
		$('.silde-info-box').attr({
			style: 'top:-200%'
		});
		$slideActive.find('.silde-info-box').addClass('active');
		$slideActive.find('.silde-info-box.active').stop().animate(
			{
				top: 0
			},
			1000
		);

		// 퍼센트바 게이지
		// console.log((parseInt($slideActive.attr('data-index')) + 1) * 20);
		$('#wrap #slide > .slide-cover > .swiper-container > .percent > div').attr({
			style: 'width :' + (parseInt($slideActive.attr('data-index')) + 1) * 20 + '%'
		});
		$('.slide-cover > .swiper-container > .pager > p')
			.first()
			.text(parseInt($slideActive.attr('data-index')) + 1);
	});

	// // 슬라이드 이벤트
	// let intervalID = null;
	// const $slideContainer = $('#slide > .slide-cover > .slide-frame > .silide-container');
	// const $slideItem = $('#slide > .slide-cover > .slide-frame > .silide-container > .slide-item');
	// let nowIdx = 1;
	// let ul = document.querySelector('#slide > .slide-cover > .slide-frame > .silide-container');
	// let firstClone = ul.firstElementChild.cloneNode(true);
	// let lastClone = ul.lastElementChild.cloneNode(true);
	// let imgLength = $slideItem.length - 1;
	// ul.appendChild(firstClone);
	// ul.prepend(lastClone);
	// const slideSpeed = 1500;
	// //슬라이드 이동 함수
	// const moveFn = function() {
	// 	console.log('이건가' + nowIdx);
	// 	autoStop();
	// 	$slideContainer.stop().animate({
	// 		left: -100 * nowIdx + '%'
	// 	}, 1000, 'linear', function() {
	// 		if (nowIdx == imgLength + 1) {
	// 			$slideContainer.attr({
	// 				style: 'left:0'
	// 			});
	// 			nowIdx = 0;
	// 		}
	// 		nowIdx++;
	// 		autoStart();
	// 	});
	// };

	// const preMoveFn = function() {
	// 	nowIdx--;
	// 	autoStop();
	// 	if (nowIdx == 0) {
	// 		$slideContainer.attr({
	// 			style: 'left:-600' + '%'
	// 		});
	// 		nowIdx = imgLength + 1;
	// 	}
	// 	$slideContainer.stop().animate(
	// 		{
	// 			left: -100 * nowIdx + '%'
	// 		},
	// 		1000,
	// 		'linear'
	// 	);
	// 	autoStart();
	// };

	// const $preBtn = $('#wrap #slide > .slide-cover > .slide-frame > .move-cover > .pre');
	// const $nextBtn = $('#wrap #slide > .slide-cover > .slide-frame > .move-cover > .next');
	// //인디케이터 클릭 이벤트

	// $preBtn.on('click', function() {
	// 	autoStop();
	// 	preMoveFn();
	// });
	// $nextBtn.on('click', function() {
	// 	moveFn();
	// });

	// //재생멈춤 함수
	// const autoStop = function() {
	// 	$slideContainer.stop();
	// 	clearInterval(intervalID);
	// };

	// //자동재생 함수
	// const autoStart = function() {
	// 	intervalID = setInterval(moveFn, 2000);
	// };

	// // 스크린 드레그 이동
	// let moveOffset = 0;
	// let startOffSet = 0;
	// let moveStart = false;
	// let moveVal = 0;

	// const mouseMove = function(evt) {
	// 	moveOffset = evt.offsetX;
	// 	if (moveStart) {
	// 		console.log('mouseMove' + nowIdx);
	// 		const slideContainerWidt = $slideContainer.width() / 7;
	// 		let contaninerWitdh = [];
	// 		for (let i = 0; i <= imgLength + 3; i++) {
	// 			contaninerWitdh[i] = slideContainerWidt * i;
	// 		}

	// 		let move = contaninerWitdh[nowIdx] + (startOffSet - moveOffset);
	// 		moveVal = startOffSet - moveOffset;

	// 		$slideContainer.stop().animate(
	// 			{
	// 				left: move * -1
	// 			},
	// 			1000
	// 		);
	// 		if (moveVal > 0) {
	// 			console.log('들어옴');

	// 			moveFn();
	// 		} else if (moveVal < 0) {
	// 			preMoveFn();
	// 		}
	// 		moveStart = false;
	// 	}
	// };
	// const mouseUp = function(evt) {
	// 	console.log('마우스 업이라고 이시키야');
	// 	moveStart = false;
	// 	autoStop();
	// 	// moveFn();
	// };
	// const mouseDown = function(evt) {
	// 	console.log('마우스 다우누ㅜ 이시키야');
	// 	moveStart = true;
	// 	startOffSet = evt.offsetX;
	// 	autoStop();
	// };

	// const mouseleave = function(evt) {
	// 	moveStart = false;
	// 	autoStop();
	// };

	// $slideContainer.on({
	// 	mouseup: function(evt) {
	// 		evt.preventDefault();
	// 		mouseUp(evt);
	// 		autoStart();
	// 	},
	// 	mousemove: function(evt) {
	// 		evt.preventDefault();
	// 		mouseMove(evt);
	// 	},
	// 	mousedown: function(evt) {
	// 		evt.preventDefault();
	// 		mouseDown(evt);
	// 	},
	// 	mouseleave: function(evt) {
	// 		if (moveStart) {
	// 			evt.preventDefault();
	// 			mouseleave(evt);
	// 			autoStart();
	// 		}
	// 	}
	// });

	// 서비스 마우스 오버 아웃 이벤트
	const $serviceItem = $(
		'#wrap #main-content > .main-content-cover > .service .service-container .service-item'
	);
	$serviceItem.on({
		mouseover: function() {
			$(this).find('div').stop().animate(
				{
					bottom: '20px'
				},
				300
			);
		},
		mouseout: function() {
			$(this).find('div').stop().animate(
				{
					bottom: '-30%'
				},
				300
			);
		}
	});

	$(document).ready(function() {
		// selectbox styling
		$('select').niceSelect();
	});
});
