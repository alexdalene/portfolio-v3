<script>
	import Hero from '$lib/components/Hero.svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let sections = gsap.utils.toArray('.section');

		sections.forEach((section) => {
			ScrollTrigger.create({
				trigger: section,
				start: 'top top',
				end: () => "+=" + section.offsetHeight,
				pin: true,
				scrub: 1,
			});
		});

		gsap.to('.img-skills', {
			scrollTrigger: {
				trigger: '.skills',
				start: '-=400px center',
				end: '+=200%',
				scrub: 2,
			},
			x: "-20%",
		});
	})

</script>

<section class="section hero">
	<div>
		<Hero />

		<h1>Frontend_utvikler</h1>
		<p>
			Jeg er en kreativ og løsningsorientert webutvikler med en lidenskap for design og teknologi. Jeg
			har jobbet med alt fra små- til mellomstore bedrifter og har erfaring med å utvikle og vedlikeholde nettsider.
		</p>
	</div>
	<span class="material-symbols-outlined">expand_more</span>
</section>

<section class="section skills">
	<div class="img-skills-container">
		<img class="img-skills" src="https://skillicons.dev/icons?i=js,ts,tailwind,svelte,jest,git,nodejs,express,mysql,mongo" alt="list of skills that alex has">
	</div>
	<div>
		<h2>Skills</h2>
		<p>
			Jeg har opparbeidet meg en rekke ferdigheter gjennom årene. Her er noen av de jeg er mest komfortabel med:
		</p>
		<ul>
			<li>JavaScript</li>
			<li>TypeScript</li>
			<li>Tailwind CSS</li>
			<li>Svelte</li>
			<li>Jest</li>
			<li>Git</li>
			<li>Node.js</li>
			<li>Express</li>
			<li>MySQL</li>
			<li>MongoDB</li>
		</ul>
		<p>
			For en fullstendig liste over ferdigheter, kan du sjekke ut min <a href="https://github.com/alexdalene" target="_blank" class="link">GitHub <span class="material-symbols-outlined">north_east</span></a> profil.
		</p>
	</div>
</section>

<section class="section projects">
	<div>
		<h2>Prosjekter</h2>
		<p>
			Jeg er en kreativ og løsningsorientert webutvikler med en lidenskap for design og teknologi. Jeg
			har jobbet med alt fra små- til mellomstore bedrifter og har erfaring med å utvikle og vedlikeholde nettsider.
		</p>
	</div>
</section>

<style>
	.section {
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

	.hero {
		& span {
			font-size: 3rem;
			position: absolute;
			bottom: 0;
			margin-bottom: 3rem;
		}
	}

	.skills {
		background-color: #82816D;
		z-index: 1;

		& .img-skills-container {
			min-width: 100%;
			overflow: hidden;
			padding-block: 2rem;
			transform: translateY(-5rem);
		}

		& .img-skills {
			min-width: fit-content;
			height: 20rem;
			object-fit: cover;
			opacity: 0.4;
		}
	}

	.projects {
		z-index: 2;
	}

	h1, h2 {
		font-size: 1rem;
		text-transform: uppercase;
	}

	h1 {
		margin-top: 2rem;
	}

	.link {
		color: var(--black-color);
		text-decoration: underline;

		& span {
			font-size: 1.2rem;
			position: relative;
			top: 0.2rem;
			margin-left: -0.5rem;
		}
	}
</style>
