<script>
	import Image from '$lib/components/Image.svelte';
	import History from '$lib/components/History.svelte';
	import Skills from '$lib/components/Skills.svelte';

	import { gsap, ScrollTrigger } from '$lib/gsap';
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
				end: 'bottom 20%'
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
			yPercent: -20
		});
	});
</script>

<svelte:head>
	<title>Alex Dalene - Frontend Utvikler</title>
	<meta
		name="description"
		content="Alex Dalene, efaren Frontend Utvikler med erfaring fra små- til mellomstore bedrifter."
	/>
</svelte:head>

<section class="hero">
	<div>
		<Image />
	</div>
</section>

<section class="about">
	<div>
		<h1>OM MEG</h1>
		<p>
			Jeg er en kreativ og løsningsorientert webutvikler med en lidenskap for design og teknologi.
		</p>
	</div>
</section>

<Skills />

<section class="experience">
	<div>
		<h1>ERFARING</h1>
		<p>
			Jeg har jobbet med alt fra små til mellomstore bedrifter og vet hva som kreves for å levere
			gode resultater.
		</p>
	</div>
</section>

<History />

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

		& > div {
			width: clamp(300px, 100%, 568px);
			display: flex;
			flex-direction: column;
		}
	}

	.about {
		& h1 {
			font-size: 1rem;
			text-transform: uppercase;
			margin-bottom: 2rem;
			font-weight: 400;
		}

		& p {
			font-size: 4rem;
			font-weight: 700;
			line-height: 1.2;
		}

		& div {
			width: 100%;
			max-width: 968px;
		}
	}

	.experience {
		background-color: var(--black-color);
		color: var(--white-color);

		& h1 {
			font-size: 1rem;
			text-transform: uppercase;
			margin-bottom: 2rem;
			font-weight: 400;
		}

		& p {
			font-size: 4rem;
			font-weight: 700;
			line-height: 1.2;
		}

		& div {
			width: 100%;
			max-width: 968px;
		}
	}

	.scroll-indicator {
		position: absolute;
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
