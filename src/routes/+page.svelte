<script>
	import Image from '$lib/components/Image.svelte';
	import History from '$lib/components/History.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Clients from '$lib/components/Clients.svelte';

	import { gsap, ScrollTrigger, TextPlugin } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('.scroll-indicator', {
			y: 6,
			duration: 0.6,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut'
		});

		gsap.to('.scroll-indicator', {
			scrollTrigger: {
				trigger: '.scroll-indicator',
				start: 'top 80%',
				end: 'bottom 40%'
			},
			opacity: 0,
			duration: 0.2
		});

		gsap.to('.hero', {
			scrollTrigger: {
				trigger: '.hero',
				start: 'top top',
				end: '+=100%',
				scrub: 1,
				pin: true,
				ease: 'none'
			},
			yPercent: -10
		});

		// gsap.from('.showcase', {
		// 	scrollTrigger: {
		// 		trigger: '.showcase',
		// 		start: 'top bottom',
		// 		end: 'bottom 80%',
		// 		scrub: 1
		// 	},
		// 	scale: 0.2,
		// 	opacity: 0
		// });

		let words = gsap.utils.toArray('.section-text'),
			tl = gsap.timeline(),
			timePerCharacter = 0.05;

		words.forEach((word, i) => {
			let split = word.textContent.split(''),
				chars = split.map((char) => {
					let span = document.createElement('span');
					span.textContent = char;
					return span;
				}),
				charsWrapped = chars.map((char) => {
					let wrapper = document.createElement('span');
					wrapper.appendChild(char);
					return wrapper;
				});

			word.innerHTML = '';

			charsWrapped.forEach((char) => word.appendChild(char));
			tl.from(chars, {
				scrollTrigger: {
					trigger: word,
					start: 'top 80%',
					end: 'bottom center',
					scrub: 1
				},
				opacity: 0.2,
				y: '+=100%',
				stagger: timePerCharacter,
				duration: 0.6,
				ease: 'power3.inOut'
			});
		});

		gsap.from('.showcase-row', {
			scrollTrigger: {
				trigger: '.showcase',
				start: 'top bottom',
				end: 'bottom center',
				scrub: 1
			},
			scale: 0.2,
			opacity: 0,
			stagger: 0.1
		});
	});
</script>

<svelte:head>
	<title>Alex Dalene - Frontend Utvikler</title>
	<meta
		name="description"
		content="Alex Dalene, nyutdannet Frontend Utvikler med erfaring fra små- til mellomstore bedrifter."
	/>
</svelte:head>

<section class="hero">
	<div>
		<Image />
	</div>
</section>

<section class="about">
	<div>
		<h1>Om meg</h1>
		<p class="section-text">
			Jeg er en kreativ og løsningsorientert frontend-utvikler med en lidenskap for design og
			teknologi.
		</p>
	</div>
</section>

<Skills />

<section class="experience">
	<div>
		<h2>Erfaring</h2>
		<p class="section-text">
			Over 2 års erfaring med webutvikling og design, samt nærmere 6 år i servicebransjen.
		</p>
	</div>
</section>

<History />

<section class="projects">
	<div>
		<h2>Prosjekter</h2>
		<p class="section-text">
			Jeg har jobbet med alt fra små til mellomstore bedrifter og vet hva som kreves for å levere
			gode resultater.
		</p>
	</div>
</section>

<Clients />

<section class="showcase">
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
	<div class="showcase-row"></div>
</section>

<footer>
	<div class="first-col">
		<p>Frontend Utvikler</p>
		<h3>Alex Dalene</h3>
	</div>
	<div class="second-col">
		<a href="https://twitter.com/xenelad" target="_blank">X/Twitter</a>
		<a href="https://github.com/alexdalene" target="_blank">GitHub</a>
		<a href="https://www.linkedin.com/in/alex-dalene/" target="_blank">LinkedIn</a>
	</div>
</footer>

<div class="scroll-indicator">
	<span class="material-symbols-outlined arrow"> arrow_drop_down </span>
</div>

<style>
	section {
		min-height: 100svh;
		min-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--white-color);
		position: relative;

		& h1,
		h2 {
			font-size: 1rem;
			text-transform: uppercase;
			margin-bottom: 2rem;
			font-weight: 400;
		}

		& .section-text {
			font-size: 4rem;
			font-weight: 700;
			line-height: 1.2;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		& > div {
			width: 100%;
			max-width: var(--max-width);
			display: flex;
			flex-direction: column;
			padding-inline: 0.5rem;
		}
	}

	.experience {
		background-color: var(--black-color);
		color: var(--white-color);
	}

	.showcase {
		background-color: var(--white-color);
		color: var(--white-color);
		overflow: hidden;

		display: grid;
		grid-template-rows: 0.8fr 0.7fr 0.6fr 0.5fr 0.4fr 0.3fr 0.2fr 0.1fr;
		gap: 0.5rem;

		& div {
			background-color: var(--black-color);
			min-height: 100%;
			min-width: 100vw;
		}

		& div:last-child {
			background-color: var(--white-color);
		}
	}

	footer {
		min-height: 40svh;
		display: grid;
		grid-template-columns: 1fr 1fr;

		& .first-col {
			display: flex;
			align-items: flex-start;
			justify-content: flex-end;
			padding-left: 0.5rem;
			flex-direction: column;

			& h3 {
				font-size: 3rem;
				text-transform: uppercase;
				margin-bottom: 0.5rem;
				font-weight: 700;
			}
		}

		& .second-col {
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
			padding-right: 0.5rem;
			flex-direction: column;

			& a {
				text-decoration: none;
				color: var(--black-color);
				margin-left: 2rem;
				font-size: 3rem;
				font-weight: 700;
				text-transform: uppercase;
			}
		}

		& h3 {
			font-size: 4rem;
			text-transform: uppercase;
			margin-bottom: 2rem;
			font-weight: 700;
		}

		@media (max-width: 768px) {
			grid-template-columns: 1fr;

			& .first-col {
				align-items: flex-start;
				justify-content: flex-start;
			}

			& .second-col {
				align-items: flex-end;
				justify-content: flex-end;

				& a {
					margin: 0;
				}
			}
		}
	}

	.scroll-indicator {
		position: fixed;
		bottom: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		& .arrow {
			font-size: 2rem;
			color: var(--black-color);
		}
	}
</style>
