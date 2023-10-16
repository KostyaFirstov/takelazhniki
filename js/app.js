const arrText_Slider = new Array(
	'Доставка грузов',
	'Переезд офисов',
	'Такелажные работы',
	'Промышленный переезд'
)
const swiper = new Swiper('.slogan-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				className +
				'">' +
				'<div class="slider-text">' +
				arrText_Slider[index] +
				'</div>' +
				'</span>'
			)
		}
	},
	speed: 1000,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false
	},
	loop: true,
	watchSlidesProgress: true
})
document.addEventListener(
	'mouseenter',
	event => {
		const el = event.target
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.stop()
			el.classList.add('swiper-paused')

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active')
			activeNavItem.style.animationPlayState = 'paused'
		}
	},
	true
)

document.addEventListener(
	'mouseleave',
	event => {
		const el = event.target
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.start()
			el.classList.remove('swiper-paused')

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active')

			activeNavItem.classList.remove('swiper-pagination-bullet-active')

			setTimeout(() => {
				activeNavItem.classList.add('swiper-pagination-bullet-active')
			}, 10)
		}
	},
	true
)

new Swiper('.companies-slider', {
	loop: true,
	simulateTouch: true,
	speed: 800,
	centeredSlides: false,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false
	},
	breakpoints: {
		100: {
			slidesPerView: 2.6,
			spaceBetween: 10
		},
		510: {
			slidesPerView: 4.6,
			spaceBetween: 10
		}
	}
})

const pointBtns = document.querySelectorAll('.map__point'),
	windowsWrapper = document.querySelector('.map__windows'),
	pointWindows = document.querySelectorAll('.map-window')

pointBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const modalNum = btn.dataset.window
		const modal = windowsWrapper.querySelector(`[data-modal="${modalNum}"]`)

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
		} else {
			pointWindows.forEach(window => {
				window.classList.remove('active')

				document.addEventListener('click', function (event) {
					if (event.composedPath().includes(btn)) {
					} else if (!event.composedPath().includes(window)) {
						modal.classList.remove('active')
					}
				})
			})

			modal.classList.add('active')
		}
	})
})

const menuBtn = document.querySelector('.menu__btn'),
	menuLinksWrapper = document.querySelector('.menu__links'),
	menuContacts = document.querySelector('.menu__contacts'),
	menuClose = document.querySelector('.menu__close'),
	menuBG = document.querySelector('.menu__bg'),
	menuLinks = document.querySelectorAll('.menu__link'),
	menu = document.querySelector('.menu')

menuBtn.addEventListener('click', openMenu)

function openMenu() {
	menu.classList.add('active')
	menuBG.classList.add('active')
	setTimeout(() => {
		menuLinksWrapper.classList.add('active')
	}, 400)

	setTimeout(() => {
		menuContacts.classList.add('active')
	}, 600)

	document.body.style.overflow = 'hidden'
}

menuClose.addEventListener('click', closeMenu)
menuBG.addEventListener('click', closeMenu)
menuLinks.forEach(btn => btn.addEventListener('click', closeMenu))

function closeMenu() {
	menuLinksWrapper.classList.remove('active')

	setTimeout(() => {
		menuContacts.classList.remove('active')
	}, 200)

	setTimeout(() => {
		menu.classList.remove('active')
	}, 400)

	menuBG.classList.remove('active')
	document.body.style.overflow = 'auto'
}

const openModalBtns = document.querySelectorAll('.modal__btn'),
	modal = document.querySelector('.modal'),
	modalWrapper = document.querySelector('.modal__wrapper'),
	closeModal = document.querySelector('.modal-close')

openModalBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add('active')

		setTimeout(() => {
			modal.classList.add('anim')
		}, 100)
		document.body.style.overflow = 'hidden'
	})
})

closeModal.addEventListener('click', () => {
	modal.classList.remove('anim')

	setTimeout(() => {
		modal.classList.remove('active')
	}, 0)

	document.body.style.overflow = 'auto'
})

modal.addEventListener('click', function (event) {
	if (!event.composedPath().includes(modalWrapper)) {
		modal.classList.remove('anim')
		setTimeout(function () {
			modal.classList.remove('active')
		}, 0)

		document.body.style.overflow = 'auto'
	}
})
