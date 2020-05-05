var logo = document.getElementById('logo-wrapper')

function ready() {

	setVH()

	animateHeading()
}

function animateHeading() {
	// Wrap every letter in a span
	var textWrapper = document.querySelector('.heading .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

	anime.timeline({
		// loop: true
	})
	.add({
		targets: '.heading .letter',
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 500,
		offset: '-=775',
		delay: (el, i) => 34 * (i+1)
	})
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

function setVH() {
	// first we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01
	// then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
})