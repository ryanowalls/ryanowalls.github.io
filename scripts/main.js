var logo = document.getElementById('logo-wrapper')

function ready() {

	setVH()

	overlapHeadings()

	animateHeading()
}

function animateHeading() {
	// Wrap every letter in a span
	var textWrapper1 = document.querySelector('.heading .letters1')
	textWrapper1.innerHTML = textWrapper1.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
	var textWrapper2 = document.querySelector('.heading .letters2')
	textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")

	show(textWrapper1)
	show(textWrapper2)

	anime.timeline({
		loop: true
	})
	.add({
		targets: '.letters1 .letter',
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 500,
		delay: anime.stagger(25, {start: 0})
	})
	.add({
		targets: '.letters1 .letter',
		opacity: [1,0],
		easing: "easeOutExpo",
		duration: 500,
		delay: anime.stagger(25, {start: 1000})
	})
	.add({
		targets: '.letters2 .letter',
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 500,
		offset: '-=775',
		delay: anime.stagger(25, {start: 0})
	}, '-=250')
	.add({
		targets: '.letters2 .letter',
		opacity: [1,0],
		easing: "easeOutExpo",
		duration: 500,
		offset: '-=775',
		delay: anime.stagger(25, {start: 1000})
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

function overlapHeadings() {
	// overlap 2 headings
	var heading2 = document.querySelector('.letters2')
	var heading2height = heading2.getBoundingClientRect().height
	heading2.style.marginTop = '-' + heading2height + 'px'
}

function setVH() {
	// first we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01
	// then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
	overlapHeadings()
})