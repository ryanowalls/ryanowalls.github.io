var logo = document.getElementById('logo-wrapper')

function ready() {
	animateLogo()
}

function animateLogo() {
	gsap.from(logo, {
		duration: 2,

		rotation: 20,
		ease: "elastic.out(1, 0.3)",
		onStart: show,
		onStartParams: [logo]
	})

	gsap.from(logo, {
		alpha: 0,
		duration: 0.75,
		ease: "power1.out"
	})
}

function show(el) {
	el.style.visibility = 'visible'
}